"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { Link, useRouter } from "@/i18n/navigation";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";

export default function NotFound() {
  const router = useRouter();
  const t = useTranslations("notFound");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      router.replace("/");
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <h1 className="font-archivo mb-4 text-6xl font-normal text-main md:text-8xl">
        {t("title")}
      </h1>
      <h2 className="mb-3 text-2xl font-semibold">{t("heading")}</h2>
      <p className="mb-8 max-w-md text-neutral-600">{t("description")}</p>
      <Button asChild className="bg-main">
        <Link href="/">{t("home")}</Link>
      </Button>
    </Container>
  );
}
