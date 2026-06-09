import { catalogImage } from "../lib/catalog-image";
import { defineProduct } from "../lib/define-product";

export const hoodieChak = defineProduct({
  id: "2",
  slug: "hoodie-chak",
  title: "Байка Chak",
  tagline: "У гонар лепшага сябра — цёпла і з сэнсам",
  previewImage: catalogImage("collections/first.webp"),
  gridLayout: { rowSpan: 2 },
  specifications: {
    color: "Серый",
    material: "Футэр з начосам",
    params: "95/65/95, рост 168",
  },
  images: [
    catalogImage("details/hoodie-girl/1.jpg"),
    catalogImage("details/hoodie-girl/2.jpg"),
    catalogImage("details/hoodie-girl/3.jpg"),
    catalogImage("details/hoodie-girl/4.jpg"),
    catalogImage("details/hoodie-girl/5.jpg"),
    catalogImage("details/hoodie-girl/6.jpg"),
    catalogImage("details/hoodie-girl/7.jpg"),
    catalogImage("details/hoodie-girl/8.jpg"),
    catalogImage("details/hoodie-girl/9.jpg"),
    catalogImage("details/hoodie-girl/10.jpg"),
    catalogImage("details/hoodie-girl/11.jpg"),
  ],
  details:
    "Байка Chak — гэта не проста худзі, а памяць пра чацвяраногага сябра ўладальніцы крамы. 4 лютага ён застаўся ў нашых сэрцах — і ў кожным шве гэтай мадэлі.\n\nМяккі футэр з начосам утульвае ў холадны дзень, капюшон і вольны крой даюць свабоду рухаў. Падыходзіць ад S/XS да L; пры нестандартным памеры шыем па вашых мерках — напішыце ў Instagram.",
  fabric:
    "Футэр з начосам унутры (80% бавоўна, 20% паліэстар) — цёплы, мяккі, прыемны да цела. Внутраны начос не сыплецца пры правільным доглядзе і не «калыхае» пасля першых прасоў.\n\nЗнешняя бавоўна добра ўтрымлівае фарбу; паліэстар дадае форму, каб капюшон і манжэты не расплываліся.",
  care: "Перад першым прасоўваннем выварочвайце навыворот — гэта захоўвае начос і колер.\n\nМыццё: далікатны рэжым, да 30°C, мяккі гель без адбеливателяў. Не выкручваць і не вымачваць доўга — бавоўна можа сесці.\n\nСушыце на вешалцы, не ў сушарцы. Прасуйце праз вільготную тканіну на сярэдняй тэмпературы. Не трымайце на каліне пад прамым сонцам — колер выгарае.",
});
