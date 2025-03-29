'use client'

import { Button } from '@/shared/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './header.module.scss'

const headerVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const navItemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.2 * i, duration: 0.5, ease: 'easeOut' },
	}),
}

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<motion.header
			className={styles.header}
			role='banner'
			variants={headerVariants}
			initial='hidden'
			animate='visible'
		>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Link href='/' aria-label='Go to Home'>
						MATYUSH
					</Link>
				</div>

				{/* Бургер-меню */}
				<div
					className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>

				{/* Навигация */}
				<motion.nav
					className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
					role='navigation'
					aria-label='Main navigation'
				>
					<ul>
						{['Work', 'About', 'Page'].map((item, index) => (
							<motion.li
								key={item}
								custom={index}
								variants={navItemVariants}
								initial='hidden'
								animate='visible'
							>
								<Link
									href={`/${item.toLowerCase()}`}
									className={styles.navItem}
								>
									{item}
								</Link>
							</motion.li>
						))}
					</ul>
				</motion.nav>

				<motion.div
					variants={navItemVariants}
					custom={3}
					initial='hidden'
					animate='visible'
				>
					<Button asChild variant='ghost'>
						<Link href='/contact' className={styles.link}>
							Let’s Contact
						</Link>
					</Button>
				</motion.div>
			</div>
		</motion.header>
	)
}

export default Header
