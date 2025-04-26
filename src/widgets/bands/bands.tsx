'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const BANDS_TITLE =
	' MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ '

const Bands = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })

	return (
		<div
			className='relative w-full overflow-hidden py-20 max-md:py-6 select-none'
			ref={ref}
		>
			<motion.div
				className='relative -rotate-[1deg] max-md:-rotate-[2deg] flex items-center w-full h-[60px] whitespace-nowrap bg-main top-12 max-md:top-2 max-md:h-[30px] '
				initial={{ opacity: 0, filter: 'blur(20px)', y: -50, rotate: -4 }}
				animate={
					isInView ? { opacity: 1, filter: 'blur(0px)', y: 0, rotate: -4 } : {}
				}
				transition={{ duration: 1, ease: 'easeOut' }}
			>
				<div className={`flex whitespace-nowrap animate-marquee `}>
					<p className='text-white text-4xl max-md:text-base font-bold uppercase whitespace-nowrap'>
						{BANDS_TITLE}
					</p>
					<p className='text-white text-4xl max-md:text-base font-bold uppercase whitespace-nowrap'>
						{BANDS_TITLE}
					</p>
				</div>
			</motion.div>

			<motion.div
				className='relative w-full flex items-center h-[60px] bg-main overflow-hidden rotate-[2deg] -top-6 max-md:h-[30px]'
				initial={{ opacity: 0, filter: 'blur(20px)', y: 50, rotate: 4 }}
				animate={
					isInView ? { opacity: 1, filter: 'blur(0px)', y: 0, rotate: 4 } : {}
				}
				transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
			>
				<div
					className={`flex whitespace-nowrap animate-marquee animate-marquee-reverse`}
				>
					<p className='text-white text-4xl max-md:text-base font-bold uppercase whitespace-nowrap'>
						{BANDS_TITLE}
					</p>
					<p className='text-white text-4xl max-md:text-base font-bold uppercase whitespace-nowrap'>
						{BANDS_TITLE}
					</p>
				</div>
			</motion.div>
		</div>
	)
}

export default Bands
