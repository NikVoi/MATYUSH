'use client'

import { useParams } from 'next/navigation'

import Container from '@/shared/ui/container'
import { CATEGORIES } from '@/widgets/details/model/moc-data'
import DetailsInfo from '@/widgets/details/ui/detailsInfo'
import DetailsPicture from '@/widgets/details/ui/detailsPicture'

const CategoryPage = () => {
	const { id } = useParams()
	const category = CATEGORIES.find(cat => cat.id === id)

	if (!category)
		return <h1 className='text-center text-xl mt-10'>Category not found</h1>

	return (
		<Container className='flex flex-col lg:flex-row justify-between my-24 lg:my-40 gap-10 px-2'>
			<DetailsPicture images={category.images} />
			<DetailsInfo details={category} />
		</Container>
	)
}

export default CategoryPage
