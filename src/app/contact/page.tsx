import Container from '@/shared/ui/container'
import ContactForm from '@/widgets/contact/contactForm'
import ContactInfo from '@/widgets/contact/cotactInfo'

export default function ContactPage() {
	return (
		<Container className='flex justify-between flex-1 my-40 '>
			<ContactInfo />

			<ContactForm />
		</Container>
	)
}
