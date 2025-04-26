import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import { FC } from 'react'
import {
	EMAIL_PLACEHOLDER,
	FIRST_NAME_PLACEHOLDER,
	HEADING,
	LAST_NAME_PLACEHOLDER,
	MESSAGE_PLACEHOLDER,
	PHONE_PLACEHOLDER,
	SUBHEADING,
	SUBMIT_BUTTON_TEXT,
} from '../model/constant'

interface Props {
	className?: string
}

const ContactForm: FC<Props> = ({ className }) => {
	return (
		<section className='border border-solid border-neutral-400 rounded-xl p-5 shadow-xl w-[450px] max-md:w-[350px] ml-5 max-md:ml-0'>
			<div>
				<h2 className='text-4xl font-bold mb-2'>{HEADING}</h2>
				<h3 className='text-base mb-10 max-md:mb-5'>{SUBHEADING}</h3>
			</div>

			<form action=''>
				<div className='flex justify-between mb-3'>
					<Input
						type='text'
						placeholder={FIRST_NAME_PLACEHOLDER}
						className='w-[48%]'
					/>
					<Input
						type='text'
						placeholder={LAST_NAME_PLACEHOLDER}
						className='w-[48%]'
					/>
				</div>

				<Input type='email' placeholder={EMAIL_PLACEHOLDER} className='mb-4' />
				<Input type='tel' placeholder={PHONE_PLACEHOLDER} className='mb-4' />

				<Textarea placeholder={MESSAGE_PLACEHOLDER} className='mb-4' />

				<Button className='w-full bg-main cursor-pointer'>
					{SUBMIT_BUTTON_TEXT}
				</Button>
			</form>
		</section>
	)
}

export default ContactForm
