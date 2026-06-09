export type ProductId = "1" | "2" | "3" | "4" | "5" | "6";

export type ProductSlug =
  | "sumka"
  | "hoodie-chak"
  | "pajama-dark"
  | "barbie"
  | "hoodie-rs"
  | "long-kahanne";

export type ProductGridLayout = {
  rowSpan?: 2;
  colStart?: 2;
};

export type ProductSpecifications = {
  color: string;
  material: string;
  params?: string;
};

export type Product = {
  id: ProductId;
  slug: ProductSlug;
  title: string;
  /** Кароткая строка под заголовком и на карточке коллекции */
  tagline: string;
  previewImage: string;
  gridLayout?: ProductGridLayout;
  specifications: ProductSpecifications;
  images: string[];
  details?: string;
  fabric?: string;
  care?: string;
};

export type ProductDetailsProps = {
  product: Product | null;
};

export type ProductGalleryProps = {
  images: string[];
  title: string;
};
