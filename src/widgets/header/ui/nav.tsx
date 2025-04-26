'use client'

import { LINKS } from '@/shared/config/constant'
import { motion } from 'framer-motion'
import Link from 'next/link'

const navItemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.2 * i, duration: 0.5, ease: 'easeOut' },
	}),
}

const Nav = ({ menuOpen }: { menuOpen: boolean }) => {
	return (
		<motion.nav
			className={`md:flex flex-1 px-20 items-center space-x-6 text-xl ${
				menuOpen
					? 'absolute top-16 left-0 w-full bg-white p-4 shadow-lg flex flex-col'
					: 'hidden md:flex'
			}`}
			role='navigation'
			aria-label='Main navigation'
		>
			<ul className='flex md:flex-row gap-5'>
				{LINKS.map(item => (
					<motion.li
						key={item.link}
						custom={item.link}
						variants={navItemVariants}
						initial='hidden'
						animate='visible'
					>
						<Link
							href={`#${item.link.toLowerCase()}`}
							className='relative transition-all duration-300 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full'
						>
							{item.text}
						</Link>
					</motion.li>
				))}
			</ul>
		</motion.nav>
	)
}

export default Nav
