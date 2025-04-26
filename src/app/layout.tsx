import Footer from '@/widgets/footer/ui/footer'
import Header from '@/widgets/header/ui/header'
import type { Metadata } from 'next'
import { Bebas_Neue, Montserrat } from 'next/font/google'
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

export const metadata: Metadata = {
	title: 'Matush',
	description:
		'Matyush — бренд одежды, сочетающий премиальные материалы, современный дизайн и безупречный комфорт. Худи, пижамы, сумки и коллекции для стильных и уверенных в себе. Эстетика в каждой детали.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={`${montserrat.variable}  ${bebasNeue.variable}  flex flex-col justify-between h-screen`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
