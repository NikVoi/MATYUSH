'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'

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

const CategoryPage = () => {
	const params = useParams()

	console.log(params)
	const category = categories.find(cat => cat.id === params.id)
	console.log(category)
	if (!category) {
		return <h1 className='text-center text-xl mt-10'>Category not found</h1>
	}

	return (
		<div className='container mx-auto p-4 text-center'>
			<h1 className='text-3xl font-bold mb-4'>{category.title}</h1>
			<Image src={category.img} alt={category.title} width={400} height={400} />
			<p className='text-lg mt-2'>{category.description}</p>
		</div>
	)
}

export default CategoryPage
