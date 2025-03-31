'use client'
import DetailsInfo from '@/widgets/details/detailsInfo'
import DetailsPicture from '@/widgets/details/detailsPicture'
import { useParams } from 'next/navigation'

import hoodie_1 from '@/assets/details/first.png'
import hoodie_2 from '@/assets/details/second.png'
import hoodie_3 from '@/assets/details/third.png'
import Container from '@/shared/ui/container'

const categories = [
	{
		id: '1',
		title: 'Bags',
		description: 'Stylish bags',
		img: '/images/bags.png',
	},
	{
		id: '2',
		title: 'Hoodie',
		description: 'Warm and cozy hoodie',
		img: '/images/hoodie.png',
	},
	{
		id: '3',
		title: 'Pajamas',
		description: 'Comfortable pajamas',
		img: '/images/pajamas.png',
	},
	{
		id: '4',
		title: 'Barbie',
		description: 'Exclusive Barbie collection',
		img: '/images/barbie.png',
	},
	{
		id: '5',
		title: 'Lime',
		description: 'Vibrant lime fashion',
		img: '/images/lime.png',
	},
	{
		id: '6',
		title: 'Long',
		description: 'Elegant long outfits',
		img: '/images/long.png',
	},
]

const array = [hoodie_3, hoodie_2, hoodie_1]

const categoryDetails = {
	title: 'Hoodie',
	description: 'Warm and cozy hoodie',
	color: 'Pink',
	materials: 'Cotton, Polyester',
	sizes: ['S', 'M', 'L', 'XL'],
}

const CategoryPage = () => {
	const params = useParams()

	console.log(params)
	const category = categories.find(cat => cat.id === params.id)
	console.log(category)
	if (!category) {
		return <h1 className='text-center text-xl mt-10'>Category not found</h1>
	}

	return (
		<Container className='flex justify-between my-40'>
			<DetailsPicture images={array} />
			<DetailsInfo details={categoryDetails} />

			{/* <h1 className='text-3xl font-bold mb-4'>{category.title}</h1>
			<Image src={category.img} alt={category.title} width={400} height={400} />
			<p className='text-lg mt-2'>{category.description}</p> */}
		</Container>
	)
}

export default CategoryPage
