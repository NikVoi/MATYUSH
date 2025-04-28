import type { Metadata } from 'next'
import ClientLayout from './client-layout'

export const metadata: Metadata = {
	title: 'Matush',
	description:
		'Matyush — бренд одежды, сочетающий премиальные материалы, современный дизайн и безупречный комфорт. Худи, пижамы, сумки и коллекции для стильных и уверенных в себе. Эстетика в каждой детали.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <ClientLayout>{children}</ClientLayout>
}
