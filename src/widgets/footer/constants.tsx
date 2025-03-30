import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaInstagram, FaPinterest, FaTelegramPlane } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

export const footerColumns = [
	{
		title: 'Company',
		links: ['About us', 'Size Guide', 'Shipping & Returns'],
	},
	{
		title: 'Catalog',
		links: ['Shirts', 'Bottoms', 'Caps'],
	},
	{
		title: 'Terms & Policies',
		links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
	},
]

export const contactInfo = [
	{ text: 'contact@matyush.com', icon: <MdEmail /> },
	{ text: '+1 (234) 567-89-00', icon: <BsFillTelephoneFill /> },
	{ text: 'New York, USA', icon: <IoLocationSharp /> },
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
