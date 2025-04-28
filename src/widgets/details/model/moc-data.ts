import bags_1 from '@/assets/details/bags/1.jpg'
import bags_2 from '@/assets/details/bags/2.jpg'
import bags_3 from '@/assets/details/bags/3.jpg'
import bags_4 from '@/assets/details/bags/4.jpg'

import barbie_1 from '@/assets/details/barbie/1.png'
import barbie_2 from '@/assets/details/barbie/2.png'
import barbie_3 from '@/assets/details/barbie/3.png'
import barbie_4 from '@/assets/details/barbie/4.png'
import barbie_5 from '@/assets/details/barbie/5.png'
import barbie_6 from '@/assets/details/barbie/6.png'
import barbie_7 from '@/assets/details/barbie/7.png'
import barbie_8 from '@/assets/details/barbie/8.png'

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

import hoodie_man_1 from '@/assets/details/hoodie-man/1.png'
import hoodie_man_2 from '@/assets/details/hoodie-man/2.png'
import hoodie_man_3 from '@/assets/details/hoodie-man/3.png'
import hoodie_man_4 from '@/assets/details/hoodie-man/4.png'
import hoodie_man_5 from '@/assets/details/hoodie-man/5.png'
import hoodie_man_6 from '@/assets/details/hoodie-man/6.png'
import hoodie_man_7 from '@/assets/details/hoodie-man/7.png'

import long_1 from '@/assets/details/long/1.png'
import long_2 from '@/assets/details/long/2.png'
import long_3 from '@/assets/details/long/3.png'
import long_4 from '@/assets/details/long/4.png'
import long_5 from '@/assets/details/long/5.png'
import long_6 from '@/assets/details/long/6.png'
import long_7 from '@/assets/details/long/7.png'
import long_8 from '@/assets/details/long/8.png'
import long_9 from '@/assets/details/long/9.png'

export const CATEGORIES = [
	{
		id: '1',
		title: 'Сумка',
		specifications: {
			color: 'Сіні',
			material: 'Дэнім',
		},
		images: [bags_1, bags_2, bags_3, bags_4],
		details:
			'Сумка выканана з дэніму і ланцугоў, яны выконваюць не толькі візуальную ролю, але і практычную. Дзякуючы ланцугам ручка не будзе расцягвацца. Магчымы варыянты розных колераў дэніму ',
		fabric: 'Дэнім',
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
			color: 'Чорны. Па вашаму жаданню колер можна зрабіць іншым.',
			material: 'Армані-шоўк',
			params: '85/60/92, рост 168 і 95/65/95, рост 168',
		},

		images: [pajames_1, pajames_2, pajames_3, pajames_4, pajames_5, pajames_6],
		details:
			'Піжам выканана з армані-шоўку. Тканіна харатэрызуецца мяккасьцю і амаль не мнецца. Піжаму можна выкарыстоўваць не толькі для сну, але і як лёгкі касцюм. Шыецца па індывідуальным меркам',
		fabric: 'Армані-шоўк',
		care: 'Ручное ці мыццё ў пранальнай машыне не больш за 30•С',
	},
	{
		id: '4',
		title: 'Касцюм Barbie',
		specifications: {
			color: 'Фуксія. Магчымыя і іншыя колеры па вашаму жаданню ',
			material: 'Армані-шоўк',
			params: '95/65/95, рост 168',
		},
		images: [
			barbie_1,
			barbie_2,
			barbie_3,
			barbie_4,
			barbie_5,
			barbie_6,
			barbie_7,
			barbie_8,
		],
		details:
			'Касюцюм выкананы з армані-шоўку. Складаецца з топа і штаноў свабоднага крою (можна набыць па аддзельнасьці) ',
		fabric: 'Армані-шоўк',
		care: 'Ручное ці мыццё ў пранальнай машыне не больш за 30•С',
	},
	{
		id: '5',
		title: 'Байка RS',
		specifications: {
			color: 'Пяшчотна аліўкавы',
			material: 'Замаўляць байку на размер больш',
			params: '91/81/100, рост 190 і 103/80/98, рост 181',
		},
		images: [
			hoodie_man_1,
			hoodie_man_2,
			hoodie_man_3,
			hoodie_man_4,
			hoodie_man_5,
			hoodie_man_6,
			hoodie_man_7,
		],
		details:
			'RS — rhinestones sparkle. Стразы выкладзеныя ў ручную, вельмі прыгожа пераліваюцца, замацаваны гарачым метадам (жалязкаю)',
		fabric: `Анова — 100% бавоўна Руша — 70% сінтэтыка, 30% бавоўна `,
		care: 'Ручное ці мыццё ў пранальнай машыне не больш за 30•С',
	},
	{
		id: '6',
		title: 'Лонг Каханне',
		specifications: {
			color:
				'малочны з чырвонаю рушаю (яна можа быць зроблена і ў іншым колеры па вашаму жаданню)',
			material: 'Шёлк',
			params: '95/65/95, рост 168 і 91/81/100, рост 190',
		},
		images: [
			long_1,
			long_2,
			long_3,
			long_4,
			long_5,
			long_6,
			long_7,
			long_8,
			long_9,
		],
		details:
			'Лонг Каханне прадстаўлены ў жаночым і мужчынскім размерах. У мужчынскім варыянце больш доўгія рукавы і аснова, чым у жаночым. Вы самі выбіраеце з якога бока павінна быць руша',
		fabric: 'Анова — 100% бавоўна Руша — 70% сінтэтыка, 30% бавоўна ',
		care: 'Ручное ці мыццё ў пранальнай машыне не больш за 30•С',
	},
]
