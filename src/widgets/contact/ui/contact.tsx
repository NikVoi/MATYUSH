'use client'

import Container from '@/shared/ui/container'
import ContactForm from '@/widgets/contact/ui/contactForm'
import ContactInfo from '@/widgets/contact/ui/cotactInfo'
import { motion } from 'framer-motion'

const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

const slideUp = (delay = 0) => ({
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut', delay },
	},
})

export default function Contact() {
	return (
		<motion.section
			id='contacts'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.5 }}
			variants={fadeIn}
		>
			<Container className='flex justify-between flex-1 mb-20 max-md:flex-col max-md:text-center max-md:items-center'>
				<motion.div variants={slideUp(0.2)}>
					<ContactInfo />
				</motion.div>

				<motion.div variants={slideUp(0.4)}>
					<ContactForm />
				</motion.div>
			</Container>
		</motion.section>
	)
}
