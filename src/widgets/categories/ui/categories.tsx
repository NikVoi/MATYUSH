'use client'

import { Button } from '@/shared/ui/button'
import Container from '@/shared/ui/container'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import { CATEGORIES, TEXT_BUTTON } from '../model/moc-data'

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
	const router = useRouter()

	return (
		<motion.section
			className={`w-full my-12 max-md:px-2  `}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.3 }}
			variants={fadeIn}
		>
			<Container className='grid grid-rows-3 grid-cols-3 gap-3 max-lg:grid-cols-2  max-md:grid-cols-1 max-md:grid-rows-6'>
				{CATEGORIES.map(category => {
					let rowSpanClass = ''
					let colStartClass = ''

					if (category.id === 4)
						rowSpanClass = 'row-span-2 h-full max-md:row-span-1'
					if (category.id === 5)
						rowSpanClass = 'row-span-2 h-full  max-md:row-span-1'
					if (category.id % 2 === 0 && category.id !== 6)
						rowSpanClass =
							'row-span-2 h-full max-lg:row-span-2 max-md:row-span-1'
					if (category.id === 6) colStartClass = 'col-start-2'

					const containerClass = `
						relative flex flex-col justify-center items-center 
						w-full rounded-2xl overflow-hidden text-white h-[250px] 
						text-center group cursor-pointer transition-all duration-300 
						${rowSpanClass} ${colStartClass}
						max-md:!row-span-1 max-md:!col-start-auto max-md:h-[300px]
					`

					return (
						<motion.div
							key={category.id}
							className={`${containerClass} ${rowSpanClass} ${colStartClass}`}
							variants={slideUp(category.id * 0.15)}
							onClick={() => router.push(`/category/${category.id}`)}
						>
							<div className=''>
								<Image
									src={category.img}
									loading='lazy'
									quality={80}
									alt={category.title}
									placeholder='blur'
									className={`absolute top-0 left-0 w-full h-full object-cover grayscale transition -z-10 group-hover:grayscale-0 group-hover:scale-110 group-hover:duration-300 `}
								/>
							</div>
							<div className=''>
								<h3 className='opacity-100 duration-500 text-4xl font-bold font-manrope mb-4'>
									{category.title}
								</h3>

								<Button className='group-hover:opacity-100 opacity-0 duration-500  rounded-full px-10 font-bold max-md:opacity-100'>
									{TEXT_BUTTON}
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
