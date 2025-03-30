import Title from '@/shared/ui/title'
import About from '@/widgets/about/about'
import Bands from '@/widgets/bands/bands'
import Categories from '@/widgets/categories/categories'
import Home from '@/widgets/home/home'
import Review from '@/widgets/Review/Review'
import { EmblaOptionsType } from 'embla-carousel'

export default function HomePage() {
	const OPTIONS: EmblaOptionsType = { loop: true }
	const SLIDE_COUNT = 5
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

	return (
		<main className='w-full relative'>
			<Home />

			<Bands />
			<Title title='Feature collections' />
			<Categories />
			<Bands />

			<Title title='Client review' />
			<Review slides={SLIDES} options={OPTIONS} />

			<Title title='About us' />
			<About />
		</main>
	)
}
