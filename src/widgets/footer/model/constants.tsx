import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

export const footerColumns = [
	{
		title: 'Кампанія',
		links: ['Працы', 'водгукі', 'пра нас'],
	},
]

export const CONTACT = 'Кантакт'

export const contactInfo = [
	{ text: '+375 29 747 4332', icon: <BsFillTelephoneFill /> },
	{ text: 'Беларусь, Мінск', icon: <IoLocationSharp /> },
]

export const socialLinks = [
	{
		href: 'https://t.me/matyushbrand',
		icon: <FaTelegramPlane />,
		label: 'Telegram',
	},
	{
		href: 'https://www.instagram.com/matyush.krama?igsh=OTRvbDE3djZyNTVO',
		icon: <FaInstagram />,
		label: 'Instagram',
	},
]
