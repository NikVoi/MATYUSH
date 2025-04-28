'use client'

import { Button } from '@/shared/ui/button'
import { motion } from 'framer-motion' // 👈 добавляем motion
import Link from 'next/link'
import { FC } from 'react'
import { IDetailsInfoProps } from '../model/types'
import { ProductTabs } from './TabContent'

const DetailsInfo: FC<IDetailsInfoProps> = ({ details }) => {
	if (!details) return <p className='text-center text-xl'>Загрузка...</p>

	return (
		<motion.section
			className='w-full lg:w-[48%] flex flex-col justify-between'
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<div>
				<h2 className='text-4xl lg:text-8xl font-bold mb-4 font-manrope text-right'>
					{details.title}
				</h2>

				<hr className='mb-8' />

				<ProductTabs product={details} />
			</div>

			<Link href={'https://instagram.com/matyush'} target='_blank'>
				<Button
					className={`bg-main w-full text-2xl lg:text-5xl py-4 lg:py-8 font-manrope font-bold cursor-pointer transition rounded-xl mb-24 `}
				>
					Замовіць
				</Button>
			</Link>
		</motion.section>
	)
}

export default DetailsInfo
