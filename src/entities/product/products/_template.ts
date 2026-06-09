/**
 * Шаблон нового товара — скопируйте файл, переименуйте (например `dress-linen.ts),
 * заполните поля и добавьте экспорт в `./index.ts`.
 */
import { catalogImage } from "../lib/catalog-image";
import { defineProduct } from "../lib/define-product";

export const templateProduct = defineProduct({
  id: "1", // уникальный id: '7', '8'…
  slug: "sumka", // латиница для URL: /category/sumka
  title: "Назва тавару",
  tagline: "Кароткі слоган на картцы і старонцы тавару",
  previewImage: catalogImage("collections/bags.jpg"),
  images: [catalogImage("details/bags/1.jpg")],
  specifications: {
    color: "Колер",
    material: "Матэрыял",
  },
  // gridLayout: { rowSpan: 2 }, // опционально для сетки на главной
  details: "Поўнае апісанне…",
  fabric: "Склад тканіны…",
  care: "Догляд…",
});
