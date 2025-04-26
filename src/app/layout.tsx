'use client'

import Loader from '@/shared/ui/loader'
import Footer from '@/widgets/footer/ui/footer'
import Header from '@/widgets/header/ui/header'
import { AnimatePresence, motion } from 'framer-motion'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import { useEffect, useState } from 'react'
import './globals.css'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-montserrat',
})
const bebasNeue = Bebas_Neue({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-bebas',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false)
		}, 1000)

		return () => clearTimeout(timeout)
	}, [])

	return (
		<html lang='ru'>
			<body
				className={`${montserrat.variable} ${bebasNeue.variable} flex flex-col justify-between min-h-screen`}
			>
				<AnimatePresence mode='wait'>
					{isLoading ? (
						<motion.div
							key='loader'
							className='flex items-center justify-center w-full h-screen bg-white'
							initial={{ opacity: 1 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.8 }}
						>
							<Loader />
						</motion.div>
					) : (
						<motion.div
							key='content'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.8 }}
							className='flex flex-col min-h-screen'
						>
							<Header />
							<main className='flex-1'>{children}</main>
							<Footer />
						</motion.div>
					)}
				</AnimatePresence>
			</body>
		</html>
	)
}
