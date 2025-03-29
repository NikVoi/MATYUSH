'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import Container from '../container/container'
import styles from './title.module.scss'

interface Props {
	title: string
}

const Title: FC<Props> = ({ title }) => {
	const textVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.05, ease: 'easeOut', duration: 0.6 },
		}),
	}

	return (
		<motion.h2
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
		>
			<Container className={styles.title}>
				{title.split('').map((letter, index) => (
					<motion.span key={index} custom={index} variants={textVariants}>
						{letter}
					</motion.span>
				))}
			</Container>
		</motion.h2>
	)
}

export default Title
