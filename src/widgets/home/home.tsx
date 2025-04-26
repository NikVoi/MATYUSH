'use client'

import img from '@/assets/test_2.png'
import { MATYUSH } from '@/shared/config/constant'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Home = () => {
	return (
		<section className='relative flex justify-center items-center h-screen'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: 'easeInOut' }}
			>
				<Image
					src={img}
					alt='das'
					loading='lazy'
					className='absolute top-0 left-0 w-full h-full object-cover'
				/>
			</motion.div>

			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className='flex justify-center text-[300px] text-main relative z-10 max-md:text-[150px] max-sm:text-[100px] font-bebas'
			>
				{MATYUSH.split('').map((letter, index) => (
					<motion.span
						key={index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
						className='select-none'
					>
						{letter}
					</motion.span>
				))}
			</motion.h1>
		</section>
	)
}

export default Home
