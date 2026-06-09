import { catalogImage } from "../lib/catalog-image";
import { defineProduct } from "../lib/define-product";

export const longKahanne = defineProduct({
  id: "6",
  slug: "long-kahanne",
  title: "Лонг Каханне",
  tagline: "Жаночы і мужчынскі крой — руша на ваш выбар",
  previewImage: catalogImage("collections/long.jpg"),
  gridLayout: { colStart: 2 },
  specifications: {
    color: "Малочны з чырвонай рушай (іншы — па жаданні)",
    material: "Бавоўна + руша",
    params: "95/65/95, рост 168; 91/81/100, рост 190",
  },
  images: [
    catalogImage("details/long/1.png"),
    catalogImage("details/long/2.png"),
    catalogImage("details/long/3.png"),
    catalogImage("details/long/4.png"),
    catalogImage("details/long/5.png"),
    catalogImage("details/long/6.png"),
    catalogImage("details/long/7.png"),
    catalogImage("details/long/8.png"),
    catalogImage("details/long/9.png"),
  ],
  details:
    "Лонг «Каханне» — мадэль, якая выглядае смело і пры гэтым застаецца камфортнай. Даступны жаночы і мужчынскі варыянты: у мужчынскага — даўжэйшыя рукавы і большая даўжыня корпуса.\n\nВы самі выбіраеце, з якога боку будзе руша — гэта ваш лічны акцэнт. Малочны з чырвонай рушай на фота — класіка, але колер можна змяніць пад ваш стыль.",
  fabric:
    "Аснова з 100% бавоўны — мяккая, добра ўтрымлівае цяпло і не паріць. Руша (70% сінтэтыка, 30% бавоўна) дае лёгкасць і бляск, калі рухаецеся.\n\nДоўгі крой і руша на баку — дэталь, якую варта абараняць: не цягніце мокрую тканіну і не сушыце на каліне.",
  care: "Каб лонг доўга трымаў форму і колер, даглядайце асобна за асновай і рушай.\n\nМыццё: выварочвайце, далікатны рэжым, 30°C. Не вымачвайце — бавоўна можа сесці, руша — пакінуць заломы.\n\nСушыце на шырокай вешалцы, не на вузкай скобы — плечы не выцягнуцца. Подалі ад сонца і нагрэву.\n\nПрасуйце праз вільготную тканіну; рушу прасуйце на мінімальнай тэмпературы або пакіньце «адпачыць» пасля сушкі.",
});
