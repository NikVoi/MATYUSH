'use client'

import { Button } from '@/shared/ui/button'
import { FC, useState } from 'react'

interface Props {
	details: {
		title: string
		description: string
		color: string
		materials: string
		sizes: string[]
	}
}

const DetailsInfo: FC<Props> = ({ details }) => {
	const [activeSize, setActiveSize] = useState<string | null>(null)

	const handleSizeClick = (size: string) => {
		setActiveSize(size === activeSize ? null : size)
	}

	return (
		<section className='w-[48%] '>
			<h2 className='text-9xl font-bold mb-4 font-bebas text-right'>
				{details.title}
			</h2>
			<p className='text-lg mt-2 opacity-70'>{details.description}</p>

			<div className='mt-4 flex'>
				<h3 className='mr-5'>
					<span className=''>Color: </span>
					<span className='font-bold'>{details.color}</span>
				</h3>

				<h3>
					<span className=''>Materials: </span>
					<span className='font-bold'>{details.materials}</span>
				</h3>
			</div>

			<div className='flex justify-between gap-2 my-2'>
				{details.sizes.map(size => (
					<div
						key={size}
						onClick={() => handleSizeClick(size)}
						className={`border px-15 py-2 rounded cursor-pointer transition text-8xl font-bebas ${
							activeSize === size ? 'bg-main text-white' : 'hover:bg-gray-200'
						}`}
					>
						{size}
					</div>
				))}
			</div>

			<Button
				className={`bg-main w-full text-5xl py-8 font-bebas cursor-pointer transition ${
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
