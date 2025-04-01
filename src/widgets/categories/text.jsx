// 'use client'

// import { Button } from '@/shared/ui/button'
// import Container from '@/shared/ui/container'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// import { useRouter } from 'next/navigation'
// import { useEffect, useState } from 'react'

// const fadeIn = {
// 	hidden: { opacity: 0 },
// 	visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
// }

// const slideUp = (delay = 0) => ({
// 	hidden: { opacity: 0, y: 60 },
// 	visible: {
// 		opacity: 1,
// 		y: 0,
// 		transition: { duration: 0.8, ease: 'easeOut', delay },
// 	},
// })

// interface CategoryType {
// 	id: number
// 	title: string
// 	subTitle: string
// 	slug: string
// 	img: string
// }

// async function fetchCategories(): Promise<CategoryType[]> {
// 	const res = await fetch(
// 		'http://localhost:1337/api/catalog-categories?populate=image'
// 	)
// 	const data = await res.json()

// 	return data.data.map((item: any) => ({
// 		id: item.id,
// 		title: item.title,
// 		subTitle: item.subTitle,
// 		slug: item.slug,
// 		img: item.image?.url
// 			? `http://localhost:1337${item.image?.url}`
// 			: '/default-image.png',
// 	}))
// }

// const Categories = () => {
// 	const router = useRouter()
// 	const [categories, setCategories] = useState<CategoryType[]>([])

// 	useEffect(() => {
// 		fetchCategories().then(data => {
// 			console.log('Fetched categories:', data)
// 			setCategories(data)
// 		})
// 	}, [])

// 	//TODO: Добавить Lodaer

// 	// if (!categories.length) return <p>Loading...</p>

// 	return (
// 		<motion.section
// 			className={`w-full py-12 max-md:py-0 `}
// 			initial='hidden'
// 			whileInView='visible'
// 			viewport={{ once: true, amount: 0.3 }}
// 			variants={fadeIn}
// 		>
// 			<Container className='grid grid-rows-3 grid-cols-3 gap-3 max-lg:grid-cols-2  '>
// 				{categories.map((category, index) => {
// 					const rowSpanClass =
// 						index === 4
// 							? 'row-span-2 h-full max-md:row-span-1 '
// 							: index === 5
// 							? 'row-span-2 max-md:row-span-1 '
// 							: index % 2 === 1 && index !== 6
// 							? 'row-span-2 h-full max-lg:row-span-2 max-md:row-span-1'
// 							: ''

// 					const colStartClass = index === 6 ? 'max-lg:col-start-2' : ''

// 					const containerClass = `relative flex flex-col justify-center items-center w-full rounded-2xl overflow-hidden text-white h-[250px] duration-300 text-center group max-md:h-[200px]`

// 					return (
// 						<motion.div
// 							key={category.id}
// 							className={`${containerClass} ${rowSpanClass} ${colStartClass}`}
// 							variants={slideUp(category.id * 0.15)}
// 							onClick={() => router.push(`/category/${category.slug}`)}
// 						>
// 							<div className=''>
// 								<Image
// 									width={1000}
// 									height={250}
// 									src={category.img}
// 									alt={category.title}
// 									className={`absolute top-0 left-0 w-full h-full object-cover grayscale transition -z-10 group-hover:grayscale-0 group-hover:scale-110 group-hover:duration-300 `}
// 								/>
// 							</div>
// 							<div className=''>
// 								<h3 className='opacity-100 duration-500 text-4xl font-bebas '>
// 									{category.title}
// 								</h3>
// 								<h4 className='group-hover:opacity-100 opacity-0 duration-500 mb-4 '>
// 									{category.subTitle}
// 								</h4>
// 								<Button className='group-hover:opacity-100 opacity-0 duration-500  rounded-full px-10 font-bold'>
// 									Discover
// 								</Button>
// 							</div>
// 						</motion.div>
// 					)
// 				})}
// 			</Container>
// 		</motion.section>
// 	)
// }

// export default Categories
