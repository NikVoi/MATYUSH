'use client'

import Container from '@/shared/ui/container/container'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { contactInfo, footerColumns, socialLinks } from './footer.constants'
import styles from './footer.module.scss'

const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.2 } },
}

const Footer = () => {
	return (
		<motion.footer
			className={styles.footer}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
		>
			<Container className={styles.wrapper}>
				<motion.div className={styles.top} variants={fadeInUp}>
					<h2 className={styles.logo}>MATYUSH</h2>
					<nav className={styles.nav}>
						<ul>
							{socialLinks.map(({ href, icon, label }) => (
								<motion.li key={href} variants={fadeInUp}>
									<Link href={href} target='_blank' aria-label={label}>
										{icon}
									</Link>
								</motion.li>
							))}
						</ul>
					</nav>
				</motion.div>
			</Container>

			<hr />

			<Container className={styles.wrapper}>
				<motion.div className={styles.bottom} variants={staggerContainer}>
					<motion.div className={styles.columns} variants={staggerContainer}>
						{footerColumns.map(({ title, links }) => (
							<motion.div
								key={title}
								className={styles.column}
								variants={fadeInUp}
							>
								<h3>{title}</h3>
								<ul>
									{links.map((link, index) => (
										<motion.li key={index} variants={fadeInUp}>
											{link}
										</motion.li>
									))}
								</ul>
							</motion.div>
						))}
					</motion.div>

					<motion.div className={styles.info} variants={fadeInUp}>
						<h3>Contact</h3>
						<ul>
							{contactInfo.map(({ text, icon }) => (
								<motion.li key={text} variants={fadeInUp}>
									{text} {icon}
								</motion.li>
							))}
						</ul>
					</motion.div>
				</motion.div>
			</Container>
		</motion.footer>
	)
}

export default Footer
