'use client'

import Title from '@/shared/ui/title'
import Home from '@/widgets/home/home'
import dynamic from 'next/dynamic'

const Bands = dynamic(() => import('@/widgets/bands/bands'), { ssr: false })
const Categories = dynamic(() => import('@/widgets/categories/ui/categories'), {
	ssr: false,
})
const About = dynamic(() => import('@/widgets/about/about'), { ssr: false })
const Contact = dynamic(() => import('@/widgets/contact/ui/contact'), {
	ssr: false,
})
const Review = dynamic(() => import('@/widgets/Review/Review'), { ssr: false })

export default function HomePage() {
	return (
		<main className='w-full relative'>
			<Home />

			<Title title='Работы' id='work' />
			<Bands />
			<Categories />
			<Bands />

			<Title title='Отзывы' id='review' />
			<Review />

			<Title title='О нас' id='about' />
			<About />

			<Title title='Связаться с нами' id='contacts' />
			<Contact />
		</main>
	)
}
