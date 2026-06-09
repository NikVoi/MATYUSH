import { getTranslations } from "next-intl/server";

import { Container } from "@/shared/ui/container";
import { ProductPageSkeleton } from "@/widgets/details/ui/product-page-skeleton";

export default async function ProductLoading() {
  const t = await getTranslations("product");

  return (
    <Container className="my-10 max-sm:my-8 sm:my-16 lg:my-24">
      <ProductPageSkeleton loadingLabel={t("loading")} />
    </Container>
  );
}
