import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { FC } from 'react'

interface Props {
	className?: string
}

const ContactForm: FC<Props> = ({ className }) => {
	return (
		<section className='border border-solid border-neutral-400 rounded-xl p-5 shadow-xl  w-[450px] ml-5'>
			<div>
				<h2 className='text-4xl font-bold mb-2'>Get in Touch</h2>
				<h3 className='text-base mb-10'>You can reach us anytime</h3>
			</div>

			<form action=''>
				<div className='flex justify-between mb-3'>
					<Input type='text' placeholder='First name' className='w-[48%]' />
					<Input type='text' placeholder='Last name' className='w-[48%]' />
				</div>

				<Input type='email' placeholder='Email' className='mb-4' />
				<Input type='tel' placeholder='phone number' className='mb-4' />

				<Textarea placeholder='How can we help?' className='mb-4' />

				<Button className='w-full bg-main cursor-pointer'>Submit</Button>
			</form>
		</section>
	)
}

export default ContactForm
