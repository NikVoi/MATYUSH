'use client'

import user from '@/assets/collections/first.png'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FC, useCallback, useEffect, useRef } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Button } from '../../shared/ui/button'
import { usePrevNextButtons } from './EmblaCarouselArrowButtons'

import reviews from './data'

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max)

const Review: FC = () => {
	const options: EmblaOptionsType = { loop: true }
	const [emblaRef, emblaApi] = useEmblaCarousel(options)
	const tweenFactor = useRef(0)
	const tweenNodes = useRef<HTMLElement[]>([])

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	const setTweenNodes = useCallback((emblaApi: EmblaCarouselType) => {
		tweenNodes.current = emblaApi
			.slideNodes()
			.map(slideNode => slideNode.querySelector(`.emblaSlide`) as HTMLElement)
	}, [])

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = emblaApi.scrollSnapList().length
	}, [])

	const tweenScale = useCallback((emblaApi: EmblaCarouselType) => {
		if (!emblaApi) return
		const engine = emblaApi.internalEngine()
		const selectedSnap = emblaApi.selectedScrollSnap()
		const slides = emblaApi.slideNodes()

		slides.forEach((slide, index) => {
			let diffToTarget = index - selectedSnap

			if (engine.options.loop) {
				engine.slideLooper.loopPoints.forEach(loopItem => {
					if (loopItem.index === index) {
						const target = loopItem.target()
						const sign = Math.sign(target)

						if (sign === -1) {
							diffToTarget = index - (selectedSnap + slides.length)
						} else if (sign === 1) {
							diffToTarget = index - (selectedSnap - slides.length)
						}
					}
				})
			}

			const scaleFactor = 0.25
			const scale = numberWithinRange(
				1 - Math.pow(Math.abs(diffToTarget), 1.2) * scaleFactor,
				0.8,
				1
			)
			const isLoopTeleport = Math.abs(diffToTarget) > slides.length * 0.5
			slide.style.transition = isLoopTeleport
				? 'none'
				: 'transform 1s ease-in-out'
			slide.style.transform = `scale(${scale})`
			slide.style.transformOrigin = 'center'
		})
	}, [])

	useEffect(() => {
		if (!emblaApi) return

		emblaApi.scrollTo(1)

		tweenScale(emblaApi)
		emblaApi
			.on('reInit', tweenScale)
			.on('select', tweenScale)
			.on('scroll', tweenScale)
	}, [emblaApi])

	return (
		<section className=''>
			<div className='w-full duration-100'>
				<div className='overflow-hidden duration-100' ref={emblaRef}>
					<div className='flex duration-200'>
						{reviews.map((review, index) => (
							<div
								className='bg-black py-10 px-20 mx-5 text-white border border-solid flex-none basis-1/2 transition-transform duration-500 ease-in-out emblaSlide max-md:p-6 max-md:basis-9/12 max-md:'
								key={review.id}
							>
								<span className='text-6xl font-bold'>&ldquo;</span>
								<h4 className='mb-5 text-xl max-md:text-xs'>{review.text}</h4>
								<div className='flex items-center'>
									<div className='flex justify-center items-center rounded-full overflow-hidden mr-4 max-md:size-10'>
										<Image
											src={user}
											loading='lazy'
											alt='user'
											className='size-16 object-cover'
										/>
									</div>
									<div className='flex flex-col justify-between text-lg py-1 max-md:text-xs'>
										<h3>{review.author}</h3>
										<h3>{review.role}</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='flex justify-center mt-5 '>
					<Button
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
						className='bg-white text-black shadow-none hover:bg-white p-0 mr-8'
					>
						<FaArrowLeftLong />
					</Button>
					<Button
						className='bg-white text-black shadow-none hover:bg-white p-0'
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					>
						<FaArrowRightLong className='' />
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Review
