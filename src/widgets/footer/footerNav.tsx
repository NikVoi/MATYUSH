'use client'

import { motion } from 'framer-motion'
import { footerColumns } from './constants'

const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const FooterNav = () => {
	return (
		<motion.div
			className='flex max-lg:flex-col max-lg:items-center max-md:hidden'
			variants={fadeInUp}
		>
			{footerColumns.map(({ title, links }) => (
				<motion.div
					key={title}
					className='mr-20 last:mr-0 max-md:mr-0 max-md:mb-6 max-md:text-center'
					variants={fadeInUp}
				>
					<h3 className='font-bold mb-3 text-xl'>{title}</h3>
					<ul>
						{links.map((link, index) => (
							<motion.li key={index} variants={fadeInUp} className='mb-1'>
								{link}
							</motion.li>
						))}
					</ul>
				</motion.div>
			))}
		</motion.div>
	)
}

export default FooterNav
