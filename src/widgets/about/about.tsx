'use client'

import img from '@/assets/user.webp'
import Container from '@/shared/ui/container/container'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import { PiStarFourFill } from 'react-icons/pi'
import styles from './about.module.scss'

interface Props {
	className?: string
}

const aboutText = {
	heading:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus in amet, vero, inventore, dicta asperiores cumque ipsam quaerat harum illo.',
	info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis vitae sint fugit rerum.',
	items: [
		{ year: '2022', label: 'company started' },
		{ year: '2024', label: 'new product launched' },
	],
}

const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

const slideUp = (delay = 0) => ({
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut', delay },
	},
})

const starAnimation = {
	hidden: { scale: 0, opacity: 0 },
	visible: {
		scale: 1.2,
		opacity: 1,
		transition: { duration: 0.5, ease: 'easeOut' },
	},
}

const About: FC<Props> = ({ className }) => {
	return (
		<motion.section
			className={`${styles.about} ${className}`}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.6 }}
			variants={fadeIn}
		>
			<Container className={styles.container}>
				<div className={styles.image}>
					<motion.div variants={slideUp(0.2)}>
						<Image src={img} alt='user' />
					</motion.div>
					<motion.h4 variants={slideUp(0.4)}>{aboutText.heading}</motion.h4>
				</div>
				<div className={styles.info}>
					<motion.h4 className={styles.text} variants={slideUp(0.6)}>
						{aboutText.info}
					</motion.h4>

					<div className={styles.wrapper}>
						<motion.div className={styles.item} variants={slideUp(0.8)}>
							<h3>{aboutText.items[0].year}</h3>
							<h4>{aboutText.items[0].label}</h4>
						</motion.div>

						<motion.div className={styles.item} variants={starAnimation}>
							<PiStarFourFill size={32} />
						</motion.div>

						<motion.div className={styles.item} variants={slideUp(1)}>
							<h3>{aboutText.items[1].year}</h3>
							<h4>{aboutText.items[1].label}</h4>
						</motion.div>
					</div>
				</div>
			</Container>
		</motion.section>
	)
}

export default About
