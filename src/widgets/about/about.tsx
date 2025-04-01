'use client'

import ABOUT_IMG from '@/assets/about.png'
import Container from '@/shared/ui/container'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PiStarFourFill } from 'react-icons/pi'

const aboutText = {
	heading:
		'​Компания Matyush специализируется на создании индивидуальной одежды, ориентируясь на точное соответствие размеров и предпочтений клиентов. Это подтверждается публикацией в Instagram, где упоминается, что костюм "Barbie" шьется по индивидуальным меркам для идеальной посадки.',
	info: 'Владельцем компании является Любовь, которая в своем профиле указывает на увлечение шитьем и садоводством. В целом, Matyush акцентирует внимание на индивидуальном подходе к каждому клиенту, предлагая одежду, созданную с учетом персональных мерок и предпочтений.',
	items: [
		{ year: '2022', label: 'Компания началась' },
		{ year: '2025', label: 'Выход на рынок' },
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

const About = () => {
	return (
		<motion.section
			className={`text-[#3d3f43] `}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.6 }}
			variants={fadeIn}
		>
			<Container className='flex justify-between pb-20 max-md:flex-col max-md:items-center max-md:text-center'>
				<div className='w-4/12 max-md:w-full'>
					<motion.div variants={slideUp(0.2)}>
						<Image
							src={ABOUT_IMG}
							alt='user'
							className='object-cover mb-4 h-[400px] w-[400px] mx-auto max-md:size-[230px] rounded-full overflow-hidden
							'
						/>
					</motion.div>
					<motion.h4 className='' variants={slideUp(0.4)}>
						{aboutText.heading}
					</motion.h4>
				</div>
				<div className='w-5/12 text-xl max-md:w-full max-md:text-base'>
					<motion.h4 className='mb-5' variants={slideUp(0.6)}>
						{aboutText.info}
					</motion.h4>

					<div className='flex justify-between items-center max-lg:flex-col max-lg:space-y-6'>
						<motion.div className='' variants={slideUp(0.8)}>
							<h3 className='text-3xl font-bold relative max-md:text-2xl'>
								{aboutText.items[0].year}
							</h3>
							<h4 className='text-xl fill-[#3d3f43] max-md:text-4xl'>
								{aboutText.items[0].label}
							</h4>
						</motion.div>

						<motion.div className='' variants={starAnimation}>
							<PiStarFourFill size={32} />
						</motion.div>

						<motion.div className='' variants={slideUp(1)}>
							<h3 className='text-3xl font-bold relative max-md:text-2xl'>
								{aboutText.items[1].year}
							</h3>
							<h4 className='text-xl fill-[#3d3f43] max-md:text-4xl'>
								{aboutText.items[1].label}
							</h4>
						</motion.div>
					</div>
				</div>
			</Container>
		</motion.section>
	)
}

export default About
