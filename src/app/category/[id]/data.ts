interface detailsType {
	id: string
	title: string
	subTitle: string
	description: string
	brand: string
	slug: string
	attributes: {
		color: string
		sizes: string[]
		material: string
		features: string[]
	}
	images: string[]
}

import bags_1 from '@/assets/details/bags/1.webp'
import bags_2 from '@/assets/details/bags/2.webp'
import bags_3 from '@/assets/details/bags/3.webp'

import barbie_1 from '@/assets/details/barbie/1.webp'
import barbie_2 from '@/assets/details/barbie/2.webp'
import barbie_3 from '@/assets/details/barbie/3.webp'

import hoodie_girl_1 from '@/assets/details/hoodie-girl/1.webp'
import hoodie_girl_2 from '@/assets/details/hoodie-girl/2.webp'
import hoodie_girl_3 from '@/assets/details/hoodie-girl/3.webp'

import pajames_1 from '@/assets/details/pajames/1.webp'
import pajames_2 from '@/assets/details/pajames/2.webp'
import pajames_3 from '@/assets/details/pajames/3.webp'

import hoodie_man_1 from '@/assets/details/hoodie-man/1.webp'
import hoodie_man_2 from '@/assets/details/hoodie-man/2.webp'
import hoodie_man_3 from '@/assets/details/hoodie-man/3.webp'

import long_1 from '@/assets/details/long/1.webp'
import long_2 from '@/assets/details/long/2.webp'
import long_3 from '@/assets/details/long/3.webp'

export const categories = [
	{
		id: '1',
		title: 'Bags',
		subTitle: 'Stylish and fashionable bags for every occasion',
		description:
			'Discover a variety of stylish bags designed to complement your look. Perfect for work, weekends, and nights out.',
		img: '/images/bags.png',
		brand: 'Brand A',
		slug: 'bags-uid',
		attributes: {
			color: 'Pink',
			sizes: ['S', 'M', 'L', 'XL'],
			material: 'Leather',
			features: ['Adjustable straps', 'Waterproof', 'Multiple compartments'],
		},
		images: [bags_1, bags_2, bags_3],
	},
	{
		id: '2',
		title: 'Hoodie',
		subTitle: 'Warm and cozy hoodie for ultimate comfort',
		description:
			'Soft, warm, and breathable. The perfect hoodie for casual outings or lounging at home.',
		img: '/images/hoodie.png',
		brand: 'Brand B',
		slug: 'hoodie-uid',
		attributes: {
			color: 'Gray',
			sizes: ['S', 'M', 'L', 'XL'],
			material: 'Cotton blend',
			features: ['Drawstring hood', 'Kangaroo pocket', 'Ribbed cuffs'],
		},
		images: [hoodie_girl_1, hoodie_girl_2, hoodie_girl_3],
	},
	{
		id: '3',
		title: 'Pajamas',
		subTitle: "Comfortable pajamas for a good night's sleep",
		description:
			'Snuggle up in our cozy pajamas made from soft fabrics. Stay comfortable throughout the night.',
		img: '/images/pajamas.png',
		brand: 'Brand C',
		slug: 'pajamas-uid',
		attributes: {
			color: 'Blue',
			sizes: ['S', 'M', 'L', 'XL'],
			material: 'Cotton',
			features: ['Elastic waistband', 'Breathable fabric', 'Machine washable'],
		},
		images: [pajames_1, pajames_2, pajames_3],
	},
	{
		id: '4',
		title: 'Barbie',
		subTitle: 'Exclusive Barbie collection for fashion lovers',
		description:
			'A glamorous collection inspired by the iconic Barbie doll. Fashion-forward designs that embrace elegance and fun.',
		img: '/images/barbie.png',
		brand: 'Barbie Collection',
		slug: 'barbie-uid',
		attributes: {
			color: 'Pink',
			sizes: ['S', 'M', 'L', 'XL'],
			material: 'Satin',
			features: ['Vibrant colors', 'Glamorous design', 'Limited edition'],
		},
		images: [barbie_1, barbie_2, barbie_3],
	},
	{
		id: '5',
		title: 'Lime',
		subTitle: 'Vibrant lime fashion pieces for a bold statement',
		description:
			'Stand out with our bold lime collection. Perfect for those who love bright colors and making a statement.',
		img: '/images/lime.png',
		brand: 'Brand D',
		slug: 'lime-uid',
		attributes: {
			color: 'Lime Green',
			sizes: ['S', 'M', 'L', 'XL'],
			material: 'Polyester',
			features: ['Vibrant color', 'Eye-catching patterns', 'Breathable fabric'],
		},
		images: [hoodie_man_1, hoodie_man_2, hoodie_man_3],
	},
	{
		id: '6',
		title: 'Long',
		subTitle: 'Elegant long outfits for formal occasions',
		description:
			'Dress to impress with our elegant long outfits, designed for weddings, galas, or any formal event.',
		img: '/images/long.png',
		brand: 'Brand E',
		slug: 'long-uid',
		attributes: {
			color: 'Black',
			sizes: ['S', 'M', 'L', 'XL'],
			material: 'Silk',
			features: ['Flowing design', 'Adjustable waist', 'Classic and elegant'],
		},
		images: [long_1, long_2, long_3],
	},
]
