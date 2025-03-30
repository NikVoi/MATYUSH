'use client'

import photo from '@/assets/collections/first.png'
import { Button } from '@/shared/ui/button'
import Container from '@/shared/ui/container'
import { motion } from 'framer-motion'
import Image from 'next/image'

const categories = [
	{ id: 1, title: 'Footwear', subTitle: 'lorem for a month' },
	{ id: 2, title: 'Jacket', subTitle: 'lorem for a month' },
	{ id: 3, title: 'Accessories', subTitle: 'lorem for a month' },
	{ id: 4, title: 'Headwear', subTitle: 'lorem for a month' },
	{ id: 5, title: 'Bags', subTitle: 'lorem for a month' },
	{ id: 6, title: 'Bottoms', subTitle: 'lorem for a month' },
]

const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

const slideUp = (delay = 0) => ({
	hidden: { opacity: 0, y: 60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut', delay },
	},
})

const Categories = () => {
	return (
		<motion.section
			className={`w-full py-12 max-md:py-0 `}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			variants={fadeIn}
		>
			<Container className='grid grid-rows-3 grid-cols-3 gap-3 max-lg:grid-cols-2  '>
				{categories.map(category => {
					const rowSpanClass =
						category.id === 4
							? 'row-span-2 h-full max-md:row-span-1 '
							: category.id === 5
							? 'row-span-2 h-full  max-md:row-span-1 '
							: category.id % 2 === 0 && category.id !== 6
							? 'row-span-2 h-full max-lg:row-span-2 max-md:row-span-1'
							: ''

					const colStartClass = category.id === 6 ? 'max-lg:col-start-2' : ''

					const containerClass = `relative flex flex-col justify-center items-center w-full rounded-2xl overflow-hidden text-white h-[250px] duration-300 text-center group max-md:h-[200px]`

					return (
						<motion.div
							key={category.id}
							className={`${containerClass} ${rowSpanClass} ${colStartClass}`}
							variants={slideUp(category.id * 0.15)}
						>
							<div className=''>
								<Image
									src={photo}
									alt={category.title}
									className={`absolute top-0 left-0 w-full h-full object-cover grayscale transition -z-10 group-hover:grayscale-0 group-hover:scale-110 group-hover:duration-300 `}
								/>
							</div>
							<div className=''>
								<h3 className='opacity-100 duration-500 text-4xl font-bebas'>
									{category.title}
								</h3>
								<h4 className='group-hover:opacity-100 opacity-0 duration-500 mb-4 '>
									{category.subTitle}
								</h4>
								<Button
									variant='secondary'
									className='group-hover:opacity-100 opacity-0 duration-500  rounded-full px-10 font-bold'
								>
									Discover
								</Button>
							</div>
						</motion.div>
					)
				})}
			</Container>
		</motion.section>
	)
}

export default Categories
