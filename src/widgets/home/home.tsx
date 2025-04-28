'use client'

import img from '@/assets/main.jpg'
import { MATYUSH } from '@/shared/config/constant'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Home = () => {
	return (
		//TODO: сделать отдельную картику для мобильника
		<section className='relative flex justify-center items-center h-screen'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, ease: 'easeInOut' }}
			>
				<Image
					src={img}
					alt='das'
					priority
					fill
					className='object-cover object-center'
				/>
			</motion.div>

			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className='flex justify-center text-[200px] text-main relative z-10 max-md:text-[100px] max-sm:text-[70px] font-archivo'
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
