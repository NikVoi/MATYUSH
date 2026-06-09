import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import {
  PRODUCT_SLUGS,
  getProductById,
  getProductBySlug,
} from "@/entities/product";
import { redirect } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Container } from "@/shared/ui/container";
import DetailsInfo from "@/widgets/details/ui/detailsInfo";
import DetailsPicture from "@/widgets/details/ui/detailsPicture";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PRODUCT_SLUGS.map((slug) => ({ locale, slug })),
  );
}

type ProductPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (/^\d+$/.test(slug)) {
    const legacy = getProductById(slug, locale);
    if (legacy) {
      redirect({ href: `/category/${legacy.slug}`, locale });
    }
  }

  const product = getProductBySlug(slug, locale);

  if (!product) {
    notFound();
  }

  return (
    <Container className="my-10 flex flex-col gap-8 max-sm:my-20 max-sm:gap-6 sm:my-20 lg:my-24 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12">
      <DetailsPicture images={product.images} title={product.title} />
      <DetailsInfo product={product} />
    </Container>
  );
}
