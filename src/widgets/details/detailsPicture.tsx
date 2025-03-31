import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

interface Props {
	images: StaticImageData[]
}

const DetailsPicture: FC<Props> = ({ images }) => {
	return (
		<section className='grid grid-cols-3 grid-rows-2 w-[48%]'>
			<Image
				src={images[0]}
				alt='pic'
				className='row-span-2 col-span-3 object-cover h-[800px]'
			/>
			<Image
				src={images[1]}
				alt='pic'
				className='col-start-2 col-end-4 row-start-3 row-end-5 row-span-4 h-[300px] object-cover'
			/>
			<Image
				src={images[2]}
				alt='pic'
				className='col-start-1 object-cover h-[300px]'
			/>
		</section>
	)
}

export default DetailsPicture
