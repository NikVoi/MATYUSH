import bags_1 from '@/assets/details/bags/1.jpg'
import bags_2 from '@/assets/details/bags/2.jpg'
import bags_3 from '@/assets/details/bags/3.jpg'
import bags_4 from '@/assets/details/bags/4.jpg'

import barbie_1 from '@/assets/details/barbie/1.jpg'
import barbie_2 from '@/assets/details/barbie/2.jpg'
import barbie_3 from '@/assets/details/barbie/3.jpg'
import barbie_4 from '@/assets/details/barbie/4.jpg'
import barbie_5 from '@/assets/details/barbie/5.jpg'
import barbie_6 from '@/assets/details/barbie/6.jpg'
import barbie_7 from '@/assets/details/barbie/7.jpg'

import hoodie_girl_1 from '@/assets/details/hoodie-girl/1.jpg'
import hoodie_girl_10 from '@/assets/details/hoodie-girl/10.jpg'
import hoodie_girl_11 from '@/assets/details/hoodie-girl/11.jpg'
import hoodie_girl_2 from '@/assets/details/hoodie-girl/2.jpg'
import hoodie_girl_3 from '@/assets/details/hoodie-girl/3.jpg'
import hoodie_girl_4 from '@/assets/details/hoodie-girl/4.jpg'
import hoodie_girl_5 from '@/assets/details/hoodie-girl/5.jpg'
import hoodie_girl_6 from '@/assets/details/hoodie-girl/6.jpg'
import hoodie_girl_7 from '@/assets/details/hoodie-girl/7.jpg'
import hoodie_girl_8 from '@/assets/details/hoodie-girl/8.jpg'
import hoodie_girl_9 from '@/assets/details/hoodie-girl/9.jpg'

import pajames_1 from '@/assets/details/pajames/1.jpg'
import pajames_2 from '@/assets/details/pajames/2.jpg'
import pajames_3 from '@/assets/details/pajames/3.jpg'
import pajames_4 from '@/assets/details/pajames/4.jpg'
import pajames_5 from '@/assets/details/pajames/5.jpg'
import pajames_6 from '@/assets/details/pajames/6.jpg'

import hoodie_man_1 from '@/assets/details/hoodie-man/1.webp'
import hoodie_man_2 from '@/assets/details/hoodie-man/2.webp'
import hoodie_man_3 from '@/assets/details/hoodie-man/3.webp'

import long_1 from '@/assets/details/long/1.webp'
import long_2 from '@/assets/details/long/2.webp'
import long_3 from '@/assets/details/long/3.webp'

export const CATEGORIES = [
	{
		id: '1',
		title: 'Сумка',
		specifications: {
			color: 'Сіні',
			material: 'Дэнім',
			params: '95/65/95, рост 168',
		},
		images: [bags_1, bags_2, bags_3, bags_4],
		details:
			'Сумка выканана з дэніму і ланцугоў, яны выконваюць не толькі візуальную ролю, але і практычную. Дзякуючы ланцугам ручка не будзе расцягвацца. Магчымы варыянты розных колераў дэніму ',
		fabric:
			'Материал: 100% натуральная кожа. Прочная и износостойкая поверхность.',
		care: 'Сумка не прызначана для пранання ў пранальнай машыне. Дапушчальна ручное мыццё, кропкава, у месцах загразнення ',
	},
	{
		id: '2',
		title: 'Байка Chak',
		specifications: {
			color: 'Серый',
			material: 'футэр',
			params: '95/65/95, рост 168',
		},
		slug: 'hoodie-uid',
		images: [
			hoodie_girl_1,
			hoodie_girl_2,
			hoodie_girl_3,
			hoodie_girl_4,
			hoodie_girl_5,
			hoodie_girl_6,
			hoodie_girl_7,
			hoodie_girl_8,
			hoodie_girl_9,
			hoodie_girl_10,
			hoodie_girl_11,
		],
		details:
			'Байка зшыта ў гонар лепшага чацвяраногага сябра уладальніцы крамы — Чака. 4 лютага Бог забраў яго да сябе. Цяпер ён не толькі ў сэрцах любімых яго людзей, але і ў вырабах Matyush /n Байка падыдзе на размер ад s/xs да l (калі вам патрэбен іншы размео, байка шыецца абапіраючыся на вашыя параметры)',
		fabric: 'Футэр з начосам (80% бавоўна, 20% паліэстар)',
		care: 'Ручное ці мыццё ў пранальнай машыне не больш за 30•С',
	},
	{
		id: '3',
		title: 'Піжама Dark',
		specifications: {
			brand: 'Бренд С',
			color: 'Голубой',
			material: 'Хлопок',
		},

		images: [pajames_1, pajames_2, pajames_3, pajames_4, pajames_5, pajames_6],
		details:
			'Пижама из натурального хлопка обеспечивает максимальный комфорт и свободу движений во время сна.',
		fabric: 'Материал: 100% хлопок. Мягкий, гипоаллергенный материал.',
		care: 'Машинная стирка при 30°C. Гладить при средней температуре.',
	},
	{
		id: '4',
		title: 'Касцюм Barbie',
		specifications: {
			color: 'Розовый',
			material: 'Атлас',
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
	},
	{
		id: '5',
		title: 'Лайм Коллекция',
		specifications: {
			color: 'Лаймовый',
			material: 'Полиэстер',
		},
		images: [hoodie_man_1, hoodie_man_2, hoodie_man_3],
		details:
			'Элементы лаймовой коллекции созданы для тех, кто не боится быть в центре внимания.',
		fabric: 'Материал: 100% полиэстер. Лёгкий и быстро сохнущий материал.',
		care: 'Стирка при 30°C. Не отбеливать. Гладить на минимальной температуре.',
	},
	{
		id: '6',
		title: 'Длинные наряды',
		specifications: {
			color: 'Черный',
			material: 'Шёлк',
		},
		images: [long_1, long_2, long_3],
		details:
			'Длинные наряды из шёлка подчеркнут вашу элегантность и изысканный вкус.',
		fabric: 'Материал: 100% шёлк. Натуральный и роскошный материал.',
		care: 'Ручная стирка в холодной воде. Не выкручивать. Сушить в разложенном виде.',
	},
]
