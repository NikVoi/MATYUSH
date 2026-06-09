import { getTranslations, setRequestLocale } from "next-intl/server";

import Title from "@/shared/ui/title";
import { About } from "@/widgets/about";
import { Bands } from "@/widgets/bands";
import { Categories } from "@/widgets/categories";
import { Home } from "@/widgets/home";
import { Review } from "@/widgets/review";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("sections");

  return (
    <div className="relative w-full">
      <Home />

      <Title title={t("work")} id="work" />
      <Bands />
      <Categories />
      <Bands />

      <Title title={t("reviews")} id="review" />
      <Review />

      <Title title={t("about")} id="about" />
      <About />
    </div>
  );
}
