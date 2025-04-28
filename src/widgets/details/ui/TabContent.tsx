import { useState } from 'react'
import { IDetailsType } from '../model/types'

const tabs = [
	{ label: 'Дэталі', value: 'detail' },
	{ label: 'Матэрыялы', value: 'fabric' },
	{ label: 'Сыход', value: 'care' },
	{ label: 'Характарыстыкі', value: 'specifications' },
]

const TabContent = ({
	activeTab,
	product,
}: {
	activeTab: string
	product: IDetailsType
}) => {
	switch (activeTab) {
		case 'detail':
			return <div className='opacity-80'>{product.details}</div>

		case 'fabric':
			return <div className='opacity-80'>{product.fabric}</div>

		case 'care':
			return <div className='opacity-80'>{product.care}</div>

		case 'specifications':
			return (
				<div className='text-base space-y-2'>
					<p>
						<b>Брэнд:</b> {product.specifications?.brand}
					</p>
					<p>
						<b>Колер:</b> {product.specifications?.color}
					</p>
					<p>
						<b>Матэрыял:</b> {product.specifications?.material}
					</p>
				</div>
			)

		default:
			return null
	}
}

export const ProductTabs = ({ product }: { product: IDetailsType }) => {
	const [activeTab, setActiveTab] = useState('detail')

	return (
		<div className='my-10'>
			<div className='flex justify-between gap-6 pb-2 mb-4 overflow-x-auto'>
				{tabs.map(tab => (
					<button
						key={tab.value}
						onClick={() => setActiveTab(tab.value)}
						className={`text-lg font-semibold pb-2 transition ${
							activeTab === tab.value
								? 'border-b-2 border-black text-black'
								: 'text-gray-500 hover:text-black'
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>

			<TabContent activeTab={activeTab} product={product} />
		</div>
	)
}
