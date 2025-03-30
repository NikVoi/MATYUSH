'use client'

import { motion } from 'framer-motion'
import { contactInfo } from './constants'

const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const FooterContact = () => {
	return (
		<motion.div variants={fadeInUp}>
			<h3 className='font-bold mb-3 text-xl text-right max-lg:text-center'>
				Contact
			</h3>
			<ul>
				{contactInfo.map(({ text, icon }) => (
					<motion.li
						key={text}
						variants={fadeInUp}
						className='flex justify-between mb-2  max-md:gap-2'
					>
						<span className='max-md:flex-1 text-right'>{text}</span>{' '}
						<span className='ml-4 text-xl'>{icon}</span>
					</motion.li>
				))}
			</ul>
		</motion.div>
	)
}

export default FooterContact
