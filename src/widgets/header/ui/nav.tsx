'use client'

import { LINKS } from '@/shared/config/constant'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

interface NavProps {
	menuOpen: boolean
	setMenuOpen: (open: boolean) => void
}

const navItemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.1 * i, duration: 0.4, ease: 'easeOut' },
	}),
}

const Nav = ({ menuOpen, setMenuOpen }: NavProps) => {
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setMenuOpen(false)
			}
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [setMenuOpen])

	const handleLinkClick = () => {
		setMenuOpen(false)
	}

	return (
		<>
			<nav
				className='hidden md:flex flex-1 px-20 items-center space-x-6 text-xl'
				role='navigation'
				aria-label='Main navigation'
			>
				<ul className='flex md:flex-row gap-5'>
					{LINKS.map((item, index) => (
						<motion.li
							key={item.link}
							custom={index}
							variants={navItemVariants}
							initial='hidden'
							animate='visible'
						>
							<Link
								href={`/#${item.link.toLowerCase()}`}
								className='relative transition-all duration-300 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full'
							>
								{item.text}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>

			<AnimatePresence>
				{menuOpen && (
					<motion.nav
						className='fixed top-15 left-0 w-full h-[calc(100vh-60px)] bg-white z-40 flex flex-col items-center justify-center space-y-10 text-2xl shadow-lg md:hidden'
						role='navigation'
						aria-label='Mobile navigation'
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.4, ease: 'easeOut' }}
					>
						<ul className='flex flex-col items-center space-y-8'>
							{LINKS.map((item, index) => (
								<motion.li
									key={item.link}
									custom={index}
									variants={navItemVariants}
									initial='hidden'
									animate='visible'
								>
									<Link
										href={`/#${item.link.toLowerCase()}`}
										className='relative transition-all duration-300 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full'
										onClick={handleLinkClick}
									>
										{item.text}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</>
	)
}

export default Nav
