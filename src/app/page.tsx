import Title from '@/shared/ui/title'
import About from '@/widgets/about/about'
import Bands from '@/widgets/bands/bands'
import Categories from '@/widgets/categories/categories'
import Contact from '@/widgets/contact/contact'
import Home from '@/widgets/home/home'
import Review from '@/widgets/Review/Review'

export default function HomePage() {
	return (
		<main className='w-full relative'>
			<Home />

			<Bands />
			<Title title='Feature collections' id='work' />
			<Categories />
			<Bands />

			<Title title='Client review' id='review' />
			<Review />

			<Title title='About us' id='about' />
			<About />

			<Title title='Contact Us' id='contacts' />
			<Contact />
		</main>
	)
}
