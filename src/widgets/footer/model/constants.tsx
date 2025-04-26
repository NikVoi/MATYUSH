import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaInstagram, FaPinterest, FaTelegramPlane } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

export const footerColumns = [
	{
		title: 'Компания',
		links: ['Работы', 'Отзывы', 'О нас'],
	},
	// {
	// 	title: 'Catalog',
	// 	links: ['Shirts', 'Bottoms', 'Caps'],
	// },
	// {
	// 	title: 'Terms & Policies',
	// 	links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
	// },
]

export const CONTACT = 'Контакты'

export const contactInfo = [
	{ text: 'contact@matyush.com', icon: <MdEmail /> },
	{ text: '+375 29 747 4332', icon: <BsFillTelephoneFill /> },
	{ text: 'Беларусь, Минск', icon: <IoLocationSharp /> },
]

export const socialLinks = [
	{
		href: 'https://t.me/matyush',
		icon: <FaTelegramPlane />,
		label: 'Telegram',
	},
	{
		href: 'https://instagram.com/matyush',
		icon: <FaInstagram />,
		label: 'Instagram',
	},
	{
		href: 'https://pinterest.com/matyush',
		icon: <FaPinterest />,
		label: 'Pinterest',
	},
]
