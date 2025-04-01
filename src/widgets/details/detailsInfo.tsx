'use client'

import { Button } from '@/shared/ui/button'
import { StaticImageData } from 'next/image'
import { FC, useState } from 'react'

interface detailsType {
	id: string
	title: string
	description: string
	brand: string
	slug: string
	attributes: {
		color: string
		sizes: string[]
		material: string
		features: string[]
	}
	images: StaticImageData[]
}

interface Props {
	details: detailsType | null
}

const DetailsInfo: FC<Props> = ({ details }) => {
	const [activeSize, setActiveSize] = useState<string | null>(null)

	if (!details) {
		return <p className='text-center text-xl'>Загрузка...</p>
	}

	const handleSizeClick = (size: string) => {
		setActiveSize(size === activeSize ? null : size)
	}

	return (
		<section className='w-full lg:w-[48%]'>
			<h2 className='text-4xl lg:text-9xl font-bold mb-4 font-bebas text-right'>
				{details.title}
			</h2>
			<p className='text-base lg:text-lg mt-2 opacity-70'>
				{details.description}
			</p>

			<div className='mt-4 flex flex-col lg:flex-row'>
				<h3 className='mb-2 lg:mb-0 lg:mr-5'>
					<span>Brand: </span>
					<span className='font-bold'>{details.brand}</span>
				</h3>
			</div>

			<div className='mt-4 flex flex-col lg:flex-row'>
				<h3 className='mb-2 lg:mb-0 lg:mr-5'>
					<span>Color: </span>
					<span className='font-bold'>{details.attributes.color}</span>
				</h3>
				<h3>
					<span>Materials: </span>
					<span className='font-bold'>Пока нету</span>
				</h3>
			</div>

			<div className='flex flex-wrap gap-2 my-2'>
				{details.attributes.sizes?.length ? (
					details.attributes.sizes.map(size => (
						<div
							key={size}
							onClick={() => handleSizeClick(size)}
							className={`border px-6 py-2 rounded cursor-pointer transition text-2xl lg:text-8xl font-bebas ${
								activeSize === size ? 'bg-main text-white' : 'hover:bg-gray-200'
							}`}
						>
							{size}
						</div>
					))
				) : (
					<p className='text-lg opacity-70'>Нет доступных размеров</p>
				)}
			</div>

			<Button
				className={`bg-main w-full text-3xl lg:text-5xl py-4 lg:py-8 font-bebas cursor-pointer transition ${
					activeSize ? '' : 'opacity-50 cursor-not-allowed'
				}`}
				disabled={!activeSize}
			>
				buy
			</Button>
		</section>
	)
}

export default DetailsInfo
