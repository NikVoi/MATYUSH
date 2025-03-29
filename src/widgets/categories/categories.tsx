'use client'

import photo from '@/assets/test.png'
import Container from '@/shared/ui/container/container'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from '../../shared/ui/button'
import styles from './categories.module.scss'

interface Props {
	className?: string
}

const categories = [
	{ title: 'Footwear', subTitle: 'lorem for a month' },
	{ title: 'Jacket', subTitle: 'lorem for a month' },
	{ title: 'Accessories', subTitle: 'lorem for a month' },
	{ title: 'Headwear', subTitle: 'lorem for a month' },
	{ title: 'Bags', subTitle: 'lorem for a month' },
	{ title: 'Bottoms', subTitle: 'lorem for a month' },
]

// Анимация для секции
const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

// Анимация карточек (плавный выезд вверх)
const slideUp = (delay = 0) => ({
	hidden: { opacity: 0, y: 60 }, // Начальное положение (чуть ниже и прозрачное)
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut', delay }, // Дольше для плавности
	},
})

const Categories: FC<Props> = ({ className }) => {
	return (
		<motion.section
			className={`${styles.categories} ${className}`}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }} // Анимация запускается при 30% видимости секции
			variants={fadeIn}
		>
			<Container className={styles.container}>
				{categories.map((category, index) => (
					<motion.div
						key={index}
						className={styles.item}
						variants={slideUp(index * 0.15)} // Увеличенная задержка для плавности
					>
						<div className={styles.imageWrapper}>
							<Image
								src={photo}
								alt={category.title}
								className={styles.image}
							/>
						</div>
						<div className={styles.wrapper}>
							<h3 className={styles.title}>{category.title}</h3>
							<h4 className={styles.subTitle}>{category.subTitle}</h4>
							<Button variant='secondary'>Discover</Button>
						</div>
					</motion.div>
				))}
			</Container>
		</motion.section>
	)
}

export default Categories
