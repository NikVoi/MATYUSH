import { catalogImage } from "../lib/catalog-image";
import { defineProduct } from "../lib/define-product";

export const hoodieRs = defineProduct({
  id: "5",
  slug: "hoodie-rs",
  title: "Байка RS",
  tagline: "Rhinestones sparkle — стразы ўручную",
  previewImage: catalogImage("collections/lime.png"),
  gridLayout: { rowSpan: 2 },
  specifications: {
    color: "Пяшчотна аліўкавы",
    material: "Футэр / бавоўна + руша",
    params: "91/81/100, рост 190; 103/80/98, рост 181",
  },
  images: [
    catalogImage("details/hoodie-man/1.png"),
    catalogImage("details/hoodie-man/2.png"),
    catalogImage("details/hoodie-man/3.png"),
    catalogImage("details/hoodie-man/4.png"),
    catalogImage("details/hoodie-man/5.png"),
    catalogImage("details/hoodie-man/6.png"),
    catalogImage("details/hoodie-man/7.png"),
  ],
  details:
    "RS — Rhinestones Sparkle. Байка для тых, хто любіць увагу да дэталей: стразы выкладзеныя ўручную, пераліваюцца на святле і замацаваныя гарачым метадам, каб трымаліся даўжэй.\n\nПяшчотна аліўкавы колер спакойны, але не нудны — добра спалучаецца з базавым гардеробам. Памер можна павялічыць пад ваш запыт. На мадэлях у фота — рост 190 і 181 см.",
  fabric:
    "Аснова — 100% бавоўна: цёплая, дыхаючая, прыемная ў штодзённым ношы. Руша — сумесь сінтэтыкі і бавоўны (70/30): мяккая, не электрызуецца, добра ляжыць на футэры.\n\nСтразы прымацаваныя гарачым метадам уручную — яны пераліваюцца, але патрабуюць далікатнага абыходу: не трэць і не кладзіце ў сушарку.",
  care: "Стразы — галоўнае, што трэба абараняць.\n\nПерад мыццём застегніце ўсе блізкія элементы і выварочвайце навыворот. Толькі далікатны рэжым, 30°C, без адбеливателяў. Не трэць зону са стразамі — дастаткова лёгка прайсці вільготнай губкай па плямах.\n\nНе выкручваць, не сушыць у барабане. Сушыце на вешалцы, подалі ад прасоў і прамога сонца. Прасуйце толькі з вывароту і праз тканіну, не накіроўвайце утюг на стразы.",
});
