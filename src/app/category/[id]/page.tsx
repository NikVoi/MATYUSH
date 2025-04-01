'use client'
import DetailsInfo from '@/widgets/details/detailsInfo'
import DetailsPicture from '@/widgets/details/detailsPicture'
import { useParams } from 'next/navigation'

import Container from '@/shared/ui/container'
import { categories } from './data'

const CategoryPage = () => {
	const params = useParams()

	const category = categories.find(cat => cat.id === params.id)

	if (!category) {
		return <h1 className='text-center text-xl mt-10'>Category not found</h1>
	}

	return (
		<Container className='flex flex-col lg:flex-row justify-between my-20 lg:my-40 gap-10'>
			<DetailsPicture images={category.images} />
			<DetailsInfo details={category} />
		</Container>
	)
}

export default CategoryPage
