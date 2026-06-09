import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Archivo_Black, Manrope } from "next/font/google";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import ClientShell from "./client-shell";
import "../globals.css";

/** Заголовки, логотип, акценты бренда */
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo",
  display: "swap",
});

/** Основной текст, меню, описания — сочетается с геометрией Archivo */
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${archivoBlack.variable} ${manrope.variable} font-body flex min-h-screen flex-col justify-between antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ClientShell>{children}</ClientShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
