'use client'

import img from '@/assets/test_2.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'
import styles from './home.module.scss'

interface Props {
	className?: string
}

const text = 'MATYUSH'

const Home: FC<Props> = ({ className }) => {
	return (
		<section className={styles.Home}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: 'easeInOut' }}
			>
				<Image src={img} alt='das' className={styles.pic} />
			</motion.div>

			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			>
				{text.split('').map((letter, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
					>
						{letter}
					</motion.span>
				))}
			</motion.h1>
		</section>
	)
}

export default Home
