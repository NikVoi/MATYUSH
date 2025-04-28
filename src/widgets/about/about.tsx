'use client'

import ABOUT_IMG from '@/assets/about.jpg'
import Container from '@/shared/ui/container'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ABOUT } from './model/moc-data'

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

const About = () => {
	return (
		<motion.section
			className={`text-[#3d3f43] mb-30`}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.6 }}
			variants={fadeIn}
		>
			<Container className='flex justify-between max-md:flex-col max-md:items-center max-md:text-center'>
				<div className='w-6/12 max-md:w-full'>
					<motion.div variants={slideUp(0.2)}>
						<Image
							src={ABOUT_IMG}
							alt='user'
							loading='lazy'
							className='object-cover mb-4 h-[400px] w-[400px] mx-auto max-md:size-[230px] rounded-full overflow-hidden
							'
						/>
					</motion.div>
				</div>
				<div className='w-5/12 text-xl max-md:w-full max-md:text-base'>
					<motion.h4 className='' variants={slideUp(0.4)}>
						{ABOUT.heading}
					</motion.h4>
				</div>
			</Container>
		</motion.section>
	)
}

export default About
