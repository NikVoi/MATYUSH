import { useState } from 'react'
import { IDetailsType } from '../model/types'

const tabs = [
	{ label: 'Детали', value: 'detail' },
	{ label: 'Материалы', value: 'fabric' },
	{ label: 'Уход', value: 'care' },
	{ label: 'Размеры', value: 'size' },
	{ label: 'Характеристики', value: 'specifications' },
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

		case 'size':
			return (
				<div className='overflow-x-auto'>
					<table className='w-full text-left border-collapse min-w-[500px]'>
						<thead className='bg-[var(--white)] text-[var(--text)]'>
							<tr>
								<th className='border-b p-4 font-semibold'>Размер</th>
								<th className='border-b p-4 font-semibold'>Ширина (см)</th>
								<th className='border-b p-4 font-semibold'>Высота (см)</th>
								<th className='border-b p-4 font-semibold'>Глубина (см)</th>
							</tr>
						</thead>
						<tbody>
							{product.sizeGuide && product.sizeGuide.length > 0 ? (
								product.sizeGuide.map((item, index) => (
									<tr
										key={item.size}
										className={`transition hover:bg-[var(--main)] hover:text-[var(--white)] ${
											index % 2 === 0 ? 'bg-[#f9f9f9]' : 'bg-[#f1f1f1]'
										}`}
									>
										<td className='border-b p-4'>{item.size}</td>
										<td className='border-b p-4'>{item.width}</td>
										<td className='border-b p-4'>{item.height}</td>
										<td className='border-b p-4'>{item.depth}</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={4} className='text-center'>
										Размеры не доступны
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			)

		case 'specifications':
			return (
				<div className='text-base space-y-2'>
					<p>
						<b>Бренд:</b> {product.specifications?.brand}
					</p>
					<p>
						<b>Цвет:</b> {product.specifications?.color}
					</p>
					<p>
						<b>Материал:</b> {product.specifications?.material}
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
		<div className='mt-10'>
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
