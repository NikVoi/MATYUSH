'use client'

import { MATYUSH } from '@/shared/config/constant'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import BurgerButton from './burgerButton'
import Nav from './nav'

const headerVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<motion.header
			className='fixed z-50 w-full bg-whited py-4 shadow-md'
			role='banner'
			variants={headerVariants}
			initial='hidden'
			animate='visible'
		>
			<div className='flex justify-between items-center container mx-auto max-md:px-4 '>
				<Link
					href='/'
					className='text-2xl font-bold max-md:text-xl font-archivo'
				>
					{MATYUSH}
				</Link>

				<Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

				<BurgerButton
					menuOpen={menuOpen}
					toggleMenu={() => setMenuOpen(!menuOpen)}
				/>
			</div>
		</motion.header>
	)
}

export default Header
