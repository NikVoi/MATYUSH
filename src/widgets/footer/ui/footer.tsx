'use client'

import Container from '@/shared/ui/container'
import { motion } from 'framer-motion'
import FooterBrand from './footerBrand'
import FooterContact from './footerContact'
import FooterNav from './footerNav'

const staggerContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.2 } },
}

const Footer = () => {
	return (
		<motion.footer
			className='w-full bg-black text-white'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
		>
			<Container>
				<FooterBrand />
			</Container>

			<hr />

			<Container>
				<motion.div
					className='flex justify-between py-20 max-lg:flex-col max-lg:items-center max-lg:text-center max-md:py-10'
					variants={staggerContainer}
				>
					<FooterNav />
					<FooterContact />
				</motion.div>
			</Container>
		</motion.footer>
	)
}

export default Footer
