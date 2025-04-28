'use client'

import {
	EmblaCarouselType,
	EmblaEventType,
	EmblaOptionsType,
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FC, useCallback, useEffect, useRef } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Button } from '../../shared/ui/button'
import { usePrevNextButtons } from './EmblaCarouselArrowButtons'

import reviews from './data'
const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max)

const Review: FC = () => {
	const options: EmblaOptionsType = { loop: true }
	const [emblaRef, emblaApi] = useEmblaCarousel(options)
	const tweenNodes = useRef<HTMLElement[]>([])
	const tweenFactor = useRef(0)

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi)

	const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
		tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
			return slideNode.querySelector('.emblaSlide') as HTMLElement
		})
	}, [])

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
	}, [])

	const tweenScale = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = emblaApi.internalEngine()
			const scrollProgress = emblaApi.scrollProgress()
			const selectedSnap = emblaApi.selectedScrollSnap()
			const slidesInView = emblaApi.slidesInView()
			const slides = emblaApi.slideNodes()
			const isScrollEvent = eventName === 'scroll'

			emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress
				const slidesInSnap = engine.slideRegistry[snapIndex]

				slidesInSnap.forEach(slideIndex => {
					if (isScrollEvent && !slidesInView.includes(slideIndex)) return

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach(loopItem => {
							const target = loopItem.target()

							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target)

								if (sign === -1) {
									diffToTarget = scrollSnap - (1 + scrollProgress)
								}
								if (sign === 1) {
									diffToTarget = scrollSnap + (1 - scrollProgress)
								}
							}
						})
					}

					const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
					const scale = numberWithinRange(tweenValue, 0, 1).toString()
					const tweenNode = tweenNodes.current[slideIndex]
					console.log(tweenNode)

					slides.forEach((slide, index) => {
						let diffToTarget = index - selectedSnap

						const scaleFactor = 0.25
						const scale = numberWithinRange(
							1 - Math.abs(diffToTarget) * scaleFactor,
							0.8,
							1
						)

						slide.style.transition = 'transform 0.5s ease'
						slide.style.transform = `scale(${scale})`
						slide.style.transformOrigin = 'center'
					})

					tweenNode.style.transition = 'transform 0.5s ease'
					tweenNode.style.transform = `scale(${scale})`
					tweenNode.style.transformOrigin = 'center'
				})
			})
		},
		[]
	)

	useEffect(() => {
		if (!emblaApi) return

		setTweenNodes(emblaApi)
		setTweenFactor(emblaApi)
		tweenScale(emblaApi)

		emblaApi
			.on('reInit', setTweenNodes)
			.on('reInit', setTweenFactor)
			.on('reInit', tweenScale)
			.on('scroll', tweenScale)
			.on('slideFocus', tweenScale)
	}, [emblaApi, tweenScale])

	return (
		<section className=''>
			<div className='w-full'>
				<div className='overflow-hidden' ref={emblaRef}>
					<div className='flex'>
						{reviews.map(review => (
							<div
								className='flex flex-col justify-between bg-black py-10 px-20 mx-5 text-white border border-solid flex-none basis-1/2   max-md:p-6 max-md:basis-9/12 '
								key={review.id}
							>
								<div>
									<span className='text-6xl font-bold emblaSlide'>&ldquo;</span>
									<h4 className='mb-5 text-xl max-md:text-xs'>{review.text}</h4>
								</div>
								<div className='flex items-center '>
									<div className='flex justify-center items-center rounded-full overflow-hidden mr-4 max-md:size-10'>
										<Image
											src={review.image}
											loading='lazy'
											alt={review.author}
											width={64}
											height={64}
											className='size-16 object-cover'
										/>
									</div>
									<div className='flex flex-col justify-between text-lg py-1 max-md:text-xs'>
										{review.author}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='flex justify-center mt-5'>
					<Button
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
						className='bg-white text-black shadow-none hover:bg-white p-0 mr-8'
					>
						<FaArrowLeftLong />
					</Button>
					<Button
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
						className='bg-white text-black shadow-none hover:bg-white p-0'
					>
						<FaArrowRightLong />
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Review
