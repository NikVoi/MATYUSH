import { catalogImage } from "../lib/catalog-image";
import { defineProduct } from "../lib/define-product";

export const barbie = defineProduct({
  id: "4",
  slug: "barbie",
  title: "Касцюм Barbie",
  tagline: "Топ і штаны з армані-шоўку — фуксія і свабода крою",
  previewImage: catalogImage("collections/barbie.jpg"),
  gridLayout: { rowSpan: 2 },
  specifications: {
    color: "Фуксія (іншы колер — па жаданні)",
    material: "Армані-шоўк",
    params: "95/65/95, рост 168",
  },
  images: [
    catalogImage("details/barbie/1.png"),
    catalogImage("details/barbie/2.png"),
    catalogImage("details/barbie/3.png"),
    catalogImage("details/barbie/4.png"),
    catalogImage("details/barbie/5.png"),
    catalogImage("details/barbie/6.png"),
    catalogImage("details/barbie/7.png"),
    catalogImage("details/barbie/8.png"),
  ],
  details:
    "Касцюм Barbie — яркі, увераны, з характарам. Складаецца з топа і штаноў свабоднага крою, якія не сціскаюць рух.\n\nАрмані-шоўк дае мяккасць і лёгкі бляск — на фота і ў жыцці выглядае даражэй, чым здаецца. Топ і штаны можна замовіць асобна. Колер фуксія можна змяніць на любімы — напішыце, і мы падберем адценне.",
  fabric:
    "Армані-шоўк на топе і штанах — лёгкая, гладкая тканіна, якая прыемна скользіць па скуры і добре трымае насоченне фуксіі.\n\nКрой свабодны, таму тканіна не натягваецца і менш трэскаецца пры руху. Кожны элемент можна носіць асобна — менш прасоў, менш нагрузкі на шво.",
  care: "Каб яркасць колеру жыла доўга, не сушыце на сонцы і не кладзіце на гарачую паверхню.\n\nМыццё: выварочвайце, далікатны рэжым, 30°C, без адбеливателяў. Топ і штаны лепш праць асобна, каб не перацягваць шво.\n\nНе выкручваць — тканіна можа пакінуць зморшкі. Сушыце на вешалцы ў цені. Прасуйце праз вільготную марлю, нізкая тэмпература.",
});
