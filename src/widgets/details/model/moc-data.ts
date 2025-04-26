import bags_1 from '@/assets/details/bags/1.webp'
import bags_2 from '@/assets/details/bags/2.webp'
import bags_3 from '@/assets/details/bags/3.webp'

import barbie_1 from '@/assets/details/barbie/1.png'
import barbie_2 from '@/assets/details/barbie/2.png'
import barbie_3 from '@/assets/details/barbie/3.png'
import barbie_4 from '@/assets/details/barbie/4.png'
import barbie_5 from '@/assets/details/barbie/5.png'
import barbie_6 from '@/assets/details/barbie/6.png'
import barbie_7 from '@/assets/details/barbie/7.png'

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

export const CATEGORIES = [
	{
		id: '1',
		title: 'Сумки',
		subTitle: 'Стильные и модные сумки для любого случая',
		description:
			'Откройте для себя разнообразие стильных сумок, идеально подходящих для работы, выходных и вечеринок.',
		img: '/images/bags.png',
		slug: 'bags-uid',
		specifications: {
			brand: 'Бренд B',
			color: 'Серый',
			material: 'Хлопковая смесь',
		},
		attributes: {
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
			features: [
				'Регулируемые ремни',
				'Водонепроницаемость',
				'Много отделений',
			],
		},
		images: [bags_1, bags_2, bags_3],
		details:
			'Эта сумка изготовлена из высококачественной кожи и станет стильным дополнением к любому образу.',
		fabric:
			'Материал: 100% натуральная кожа. Прочная и износостойкая поверхность.',
		care: 'Протирайте влажной тканью. Избегайте длительного контакта с водой. Храните в сухом месте.',
		sizeGuide: [
			{ size: 'S', width: 25, height: 20, depth: 10 },
			{ size: 'M', width: 30, height: 25, depth: 12 },
			{ size: 'L', width: 35, height: 28, depth: 15 },
		],
	},
	{
		id: '2',
		title: 'Толстовка',
		subTitle: 'Тёплая и уютная толстовка для максимального комфорта',
		description:
			'Мягкая, тёплая и дышащая. Идеальная толстовка для прогулок и домашнего отдыха.',
		img: '/images/hoodie.png',
		specifications: {
			brand: 'Бренд B',
			color: 'Серый',
			material: 'Хлопковая смесь',
		},
		slug: 'hoodie-uid',
		attributes: {
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
			features: ['Капюшон с завязками', 'Карман кенгуру', 'Манжеты в рубчик'],
		},
		images: [hoodie_girl_1, hoodie_girl_2, hoodie_girl_3],
		details:
			'Толстовка из мягкой хлопковой ткани, идеально подходит для прохладных вечеров и активного отдыха.',
		fabric:
			'Материал: 80% хлопок, 20% полиэстер. Мягкий на ощупь и долговечный материал.',
		care: 'Ручная или машинная стирка при 30°C. Не отбеливать. Сушить на воздухе.',
		sizeGuide: [
			{ size: 'S', width: 50, height: 65, depth: 0 },
			{ size: 'M', width: 55, height: 68, depth: 0 },
			{ size: 'L', width: 60, height: 71, depth: 0 },
		],
	},
	{
		id: '3',
		title: 'Пижама',
		subTitle: 'Уютная пижама для комфортного сна',
		description:
			'Погрузитесь в мир комфорта с нашей пижамой из мягких и дышащих тканей.',
		img: '/images/pajamas.png',
		specifications: {
			brand: 'Бренд С',
			color: 'Голубой',
			material: 'Хлопок',
		},
		slug: 'pajamas-uid',
		attributes: {
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
			features: ['Эластичный пояс', 'Дышащая ткань', 'Легко стирается'],
		},
		images: [pajames_1, pajames_2, pajames_3],
		details:
			'Пижама из натурального хлопка обеспечивает максимальный комфорт и свободу движений во время сна.',
		fabric: 'Материал: 100% хлопок. Мягкий, гипоаллергенный материал.',
		care: 'Машинная стирка при 30°C. Гладить при средней температуре.',
		sizeGuide: [
			{ size: 'S', width: 48, height: 60, depth: 0 },
			{ size: 'M', width: 52, height: 63, depth: 0 },
			{ size: 'L', width: 56, height: 66, depth: 0 },
		],
	},
	{
		id: '4',
		title: 'Барби Коллекция',
		subTitle: 'Эксклюзивная коллекция Барби для ценителей моды',
		description:
			'Гламурная коллекция, вдохновленная культовой куклой Барби. Элегантный и игривый стиль.',
		img: '/images/barbie.png',
		brand: '',
		slug: 'barbie-uid',
		specifications: {
			brand: 'Коллекция Барби',
			color: 'Розовый',
			material: 'Атлас',
		},
		attributes: {
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
			features: ['Яркие цвета', 'Гламурный дизайн', 'Лимитированная серия'],
		},
		images: [
			barbie_1,
			barbie_2,
			barbie_3,
			barbie_4,
			barbie_5,
			barbie_6,
			barbie_7,
		],
		details:
			'Одежда из коллекции Барби сочетает в себе элегантность и игривость, идеально подходящая для особых случаев.',
		fabric: 'Материал: 100% атлас. Лёгкий и блестящий материал.',
		care: 'Только сухая чистка. Хранить в чехле для одежды.',
		sizeGuide: [
			{ size: 'S', width: 45, height: 60, depth: 0 },
			{ size: 'M', width: 50, height: 65, depth: 0 },
			{ size: 'L', width: 55, height: 70, depth: 0 },
		],
	},
	{
		id: '5',
		title: 'Лайм Коллекция',
		subTitle: 'Яркая коллекция в лаймовом цвете для смелых образов',
		description:
			'Выделяйтесь из толпы с нашей коллекцией в насыщенных лаймовых оттенках.',
		img: '/images/lime.png',
		specifications: {
			brand: 'Бренд D',
			color: 'Лаймовый',
			material: 'Полиэстер',
		},
		slug: 'lime-uid',
		attributes: {
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
			features: ['Яркий цвет', 'Привлекательные принты', 'Дышащая ткань'],
		},
		images: [hoodie_man_1, hoodie_man_2, hoodie_man_3],
		details:
			'Элементы лаймовой коллекции созданы для тех, кто не боится быть в центре внимания.',
		fabric: 'Материал: 100% полиэстер. Лёгкий и быстро сохнущий материал.',
		care: 'Стирка при 30°C. Не отбеливать. Гладить на минимальной температуре.',
		sizeGuide: [
			{ size: 'S', width: 50, height: 65, depth: 0 },
			{ size: 'M', width: 55, height: 70, depth: 0 },
			{ size: 'L', width: 60, height: 75, depth: 0 },
		],
	},
	{
		id: '6',
		title: 'Длинные наряды',
		subTitle: 'Элегантные длинные наряды для особых мероприятий',
		description:
			'Произведите впечатление на любом мероприятии с нашими изысканными длинными нарядами.',
		img: '/images/long.png',
		slug: 'long-uid',
		specifications: {
			brand: 'Бренд E',
			color: 'Черный',
			material: 'Шёлк',
		},
		attributes: {
			sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
			features: [
				'Плавный крой',
				'Регулируемая талия',
				'Классический и элегантный стиль',
			],
		},
		images: [long_1, long_2, long_3],
		details:
			'Длинные наряды из шёлка подчеркнут вашу элегантность и изысканный вкус.',
		fabric: 'Материал: 100% шёлк. Натуральный и роскошный материал.',
		care: 'Ручная стирка в холодной воде. Не выкручивать. Сушить в разложенном виде.',
		sizeGuide: [
			{ size: 'S', width: 48, height: 130, depth: 0 },
			{ size: 'M', width: 52, height: 135, depth: 0 },
			{ size: 'L', width: 56, height: 140, depth: 0 },
		],
	},
]
