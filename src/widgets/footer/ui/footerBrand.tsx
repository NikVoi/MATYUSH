'use client'

import { MATYUSH } from '@/shared/config/constant'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialLinks } from '../model/constants'

const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const FooterBrand = () => {
	return (
		<motion.div
			className='flex justify-center items-center py-10 flex-wrap max-md:flex-col'
			variants={fadeInUp}
		>
			<h2 className='flex-1 text-9xl flex justify-center max-md:text-6xl font-archivo'>
				{MATYUSH}
			</h2>
			<nav className='max-md:mt-4'>
				<ul className='flex items-center gap-4'>
					{socialLinks.map(({ href, icon, label }) => (
						<motion.li key={href} variants={fadeInUp} className='text-4xl '>
							<Link href={href} target='_blank' aria-label={label}>
								{icon}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</motion.div>
	)
}

export default FooterBrand
