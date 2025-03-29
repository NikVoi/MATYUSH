'use client'

import user from '@/assets/user.webp'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FC, useCallback, useEffect, useRef } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { Button } from '../../shared/ui/button'
import { usePrevNextButtons } from './EmblaCarouselArrowButtons'
import styles from './Review.module.scss'

const numberWithinRange = (number: number, min: number, max: number): number =>
	Math.min(Math.max(number, min), max)

type PropType = {
	slides: number[]
	options?: EmblaOptionsType
}

const Review: FC<PropType> = ({ slides, options }) => {
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
			.map(
				slideNode =>
					slideNode.querySelector(`.${styles.emblaSlide}`) as HTMLElement
			)
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

			const scaleFactor = 0.25 // Можно подбирать под нужный эффект
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
		setTweenNodes(emblaApi)
		setTweenFactor(emblaApi)
		tweenScale(emblaApi)
		emblaApi
			.on('reInit', tweenScale)
			.on('select', tweenScale)
			.on('scroll', tweenScale)
	}, [emblaApi])

	return (
		<section className={styles.review}>
			<div className={styles.embla}>
				<div className={styles.embla__viewport} ref={emblaRef}>
					<div className={styles.embla__container}>
						{slides.map(index => (
							<div className={styles.emblaSlide} key={index}>
								<span className={styles.sim}>&ldquo;</span>
								<h4>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Repellat optio laborum odio excepturi tempora similique
									voluptates numquam quam iusto quod.
								</h4>
								<div className={styles.wrapper}>
									<div className={styles.image}>
										<Image src={user} alt='user' />
									</div>
									<div className={styles.author}>
										<h3>Named Name</h3>
										<h3>Co-founder</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className={styles.wrapperButton}>
					<Button onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
						<FaArrowLeftLong className={styles.arrow} />
					</Button>
					<Button onClick={onNextButtonClick} disabled={nextBtnDisabled}>
						<FaArrowRightLong className={styles.arrow} />
					</Button>
				</div>
			</div>
		</section>
	)
}

export default Review
