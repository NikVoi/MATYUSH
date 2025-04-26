'use client'

import { Button } from '@/shared/ui/button'
import { FC, useState } from 'react'
import { IDetailsInfoProps } from '../model/types'
import { ProductTabs } from './TabContent'

const DetailsInfo: FC<IDetailsInfoProps> = ({ details }) => {
	const [activeSize, setActiveSize] = useState<string | null>(null)

	const handleSizeClick = (size: string) => {
		setActiveSize(prevSize => (prevSize === size ? null : size))
	}

	if (!details) return <p className='text-center text-xl'>Загрузка...</p>

	return (
		<section className='w-full lg:w-[48%]'>
			<h2 className='text-4xl lg:text-9xl font-bold mb-4 font-bebas text-right'>
				{details.title}
			</h2>

			<div className='flex justify-between flex-wrap gap-2 my-4'>
				{details.attributes.sizes?.length ? (
					details.attributes.sizes.map(size => (
						<div
							key={size}
							onClick={() => handleSizeClick(size)}
							className={`border px-8 pb-2 pt-3 rounded-lg cursor-pointer transition text-2xl lg:text-3xl font-bebas max-md:px-4 max-md:pb-1 max-md:pt-2 ${
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
				className={`bg-main w-full text-3xl lg:text-5xl py-4 lg:py-8 font-bebas cursor-pointer transition rounded-xl mb-10 ${
					activeSize ? '' : 'opacity-50 cursor-not-allowed'
				}`}
				disabled={!activeSize}
			>
				Buy
			</Button>

			<hr className='mb-8' />

			<ProductTabs product={details} />
		</section>
	)
}

export default DetailsInfo
