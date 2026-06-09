import type { Locale } from "@/i18n/routing";

import { products } from "./products";
import { productRuOverrides } from "./locale/ru-overrides";
import type { Product, ProductId, ProductSlug } from "./types";

export function getProductCatalog(locale: string): Product[] {
  if (locale === "ru") {
    return products.map((product) => ({
      ...product,
      ...productRuOverrides[product.slug],
    }));
  }
  return products;
}

export function getProductBySlug(
  slug: string,
  locale: string,
): Product | undefined {
  return getProductCatalog(locale).find((product) => product.slug === slug);
}

export function getProductById(
  id: string,
  locale: string,
): Product | undefined {
  return getProductCatalog(locale).find((product) => product.id === id);
}

export function getProductGridClasses(layout?: Product["gridLayout"]) {
  let rowSpanClass = "";
  let colStartClass = "";

  if (layout?.rowSpan === 2) {
    rowSpanClass =
      "lg:row-span-2 lg:min-h-full max-lg:row-span-1 max-lg:min-h-[250px]";
  }
  if (layout?.colStart === 2) {
    colStartClass = "lg:col-start-2 max-lg:col-start-auto";
  }

  return { rowSpanClass, colStartClass };
}

export const PRODUCT_SLUGS = products.map((p) => p.slug);
export const PRODUCT_IDS = products.map((p) => p.id) as ProductId[];

export const PRODUCT_ID_TO_SLUG = Object.fromEntries(
  products.map((p) => [p.id, p.slug]),
) as Record<ProductId, ProductSlug>;
