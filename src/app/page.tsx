import Title from '@/shared/ui/title'
import About from '@/widgets/about/about'
import Bands from '@/widgets/bands/bands'
import Categories from '@/widgets/categories/ui/categories'
import Contact from '@/widgets/contact/ui/contact'
import Home from '@/widgets/home/home'
import Review from '@/widgets/Review/Review'

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

			<Title title='связаться с нами' id='contacts' />
			<Contact />
		</main>
	)
}
