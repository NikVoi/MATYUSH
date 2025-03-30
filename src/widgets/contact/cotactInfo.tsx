import { FC } from 'react'

interface Props {
	className?: string
}

const ContactInfo: FC<Props> = ({ className }) => {
	return (
		<section className='w-1/2 text-3xl '>
			<h2 className='text-8xl font-bold mb-5 opacity-100 text-black'>
				Contact Us
			</h2>
			<h3 className='mb-5 opacity-70'>
				Email, call, or complete the form to learn how Snappy can solve your
				messaging problem.
			</h3>
			<h3 className='mb-5 opacity-70'>info@matyush.com</h3>
			<h3 className='mb-5 opacity-70'>321-221-231</h3>
		</section>
	)
}

export default ContactInfo
