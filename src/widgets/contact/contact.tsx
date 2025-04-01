import Container from '@/shared/ui/container'
import ContactForm from '@/widgets/contact/contactForm'
import ContactInfo from '@/widgets/contact/cotactInfo'

export default function Contact() {
	return (
		<section id='contacts'>
			<Container className='flex justify-between flex-1 my-40 max-md:flex-col max-md:text-center max-md:items-center'>
				<ContactInfo />

				<ContactForm />
			</Container>
		</section>
	)
}
