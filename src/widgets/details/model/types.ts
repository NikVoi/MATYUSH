import { StaticImageData } from 'next/image'

export interface IDetailsType {
	id: string
	title: string
	specifications: {
		color: string
		params?: string
		material: string
	}

	images: StaticImageData[]
	details?: string
	fabric?: string
	care?: string
}

export interface IDetailsInfoProps {
	details: IDetailsType | null
}

export interface IDetailsPictureProps {
	images: StaticImageData[]
}
