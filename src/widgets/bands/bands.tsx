'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './bands.module.scss'

const BANDS_TITLE =
	'MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘'

const Bands = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })

	return (
		<div className={styles.wrapper} ref={ref}>
			<motion.div
				className={styles.line}
				initial={{ opacity: 0, filter: 'blur(20px)', y: -50, rotate: -4 }}
				animate={
					isInView ? { opacity: 1, filter: 'blur(0px)', y: 0, rotate: -4 } : {}
				}
				transition={{ duration: 1, ease: 'easeOut' }}
			>
				<div className={`${styles.marquee} ${styles.forward}`}>
					<p className={styles.text}>{BANDS_TITLE}</p>
					<p className={styles.text}>{BANDS_TITLE}</p>
				</div>
			</motion.div>

			<motion.div
				className={styles.reverseWrapper}
				initial={{ opacity: 0, filter: 'blur(20px)', y: 50, rotate: 4 }}
				animate={
					isInView ? { opacity: 1, filter: 'blur(0px)', y: 0, rotate: 4 } : {}
				}
				transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
			>
				<div className={`${styles.marquee} ${styles.reverse}`}>
					<p className={styles.text}>{BANDS_TITLE}</p>
					<p className={styles.text}>{BANDS_TITLE}</p>
				</div>
			</motion.div>
		</div>
	)
}

export default Bands
