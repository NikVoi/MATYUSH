import { FC } from 'react'
import { DETAILS, EMAIL, TELEPHONE } from '../model/constant'

interface Props {
	className?: string
}

const ContactInfo: FC<Props> = ({ className }) => {
	return (
		<section className='w-1/2 text-3xl max-md:w-full max-md:mb-10'>
			<h3 className='mb-5 opacity-70'>{DETAILS}</h3>
			<h3 className='mb-5 opacity-70'>{EMAIL}</h3>
			<h3 className='mb-5 opacity-70'>{TELEPHONE}</h3>
		</section>
	)
}

export default ContactInfo
