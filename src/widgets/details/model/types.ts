import { StaticImageData } from 'next/image'

export interface IDetailsType {
	id: string
	title: string
	subTitle: string
	description: string
	slug: string
	specifications: {
		brand: string
		color: string
		material: string
	}
	attributes: {
		sizes: string[]
		features: string[]
	}
	images: StaticImageData[]
	details?: string
	fabric?: string
	care?: string
	sizeGuide?: { size: string; width: number; height: number; depth: number }[]
}

export interface IDetailsInfoProps {
	details: IDetailsType | null
}

export interface IDetailsPictureProps {
	images: StaticImageData[]
}
