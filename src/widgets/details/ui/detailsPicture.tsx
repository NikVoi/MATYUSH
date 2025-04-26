'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { FC, useCallback, useState } from 'react'
import { IDetailsPictureProps } from '../model/types'

const DetailsPicture: FC<IDetailsPictureProps> = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState<StaticImageData>(images[0])
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleImageClick = useCallback(() => {
		setIsModalOpen(true)
	}, [])

	const handleThumbnailClick = useCallback((image: StaticImageData) => {
		setSelectedImage(image)
	}, [])

	return (
		<>
			<section className='flex flex-col gap-4 w-full lg:w-[60%]'>
				<motion.div
					className='w-full h-[800px] max-lg:h-[700px] overflow-hidden rounded-xl cursor-zoom-in relative'
					onClick={handleImageClick}
					key={selectedImage.src}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.7, ease: 'easeInOut' }}
				>
					<Image
						src={selectedImage}
						alt='Selected pic'
						className='object-cover w-full h-full'
						width={1000}
						height={800}
						priority
					/>
				</motion.div>

				<div className='flex gap-2 overflow-x-auto'>
					{images.map((img, index) => (
						<button
							key={index}
							onClick={() => handleThumbnailClick(img)}
							className={`min-w-[80px] h-[80px] rounded-lg overflow-hidden border-2 cursor-pointer ${
								selectedImage === img
									? 'border-[#fa216a]'
									: 'border-transparent'
							}`}
						>
							<Image
								src={img}
								alt={`Thumbnail ${index}`}
								className='object-cover w-full h-full'
								width={80}
								height={80}
							/>
						</button>
					))}
				</div>
			</section>

			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						className='fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsModalOpen(false)}
					>
						<motion.div
							className='max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-xl'
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
							onClick={e => e.stopPropagation()}
						>
							<Image
								src={selectedImage}
								alt='Full screen'
								className='object-contain w-full h-full'
								width={1600}
								height={1200}
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default DetailsPicture
