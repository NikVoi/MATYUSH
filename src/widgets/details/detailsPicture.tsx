import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface Props {
	images: StaticImageData[]
}

const DetailsPicture: FC<Props> = ({ images }) => {
	console.log(images)
	return (
		<section className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 w-full lg:w-[48%]'>
			<Image
				width={1000}
				height={250}
				src={images[0]}
				alt='pic'
				className='col-span-1 lg:col-span-3 object-cover h-[300px] lg:h-[800px]'
			/>
			<Image
				width={1000}
				height={250}
				src={images[1]}
				alt='pic'
				className='lg:col-start-1 lg:col-end-2 lg:row-span-2 h-[200px] lg:h-[300px] object-cover'
			/>
			<Image
				width={1000}
				height={250}
				src={images[2]}
				alt='pic'
				className='object-cover h-[200px] lg:h-[300px] lg:col-start-2 lg:col-end-4'
			/>
		</section>
	)
}

export default DetailsPicture
