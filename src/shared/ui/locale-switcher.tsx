"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { Link, usePathname } from "@/i18n/navigation";
import { tapScaleSubtle } from "@/shared/lib/motion-variants";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/shared/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("locale");

  return (
    <div
      className={cn("flex items-center gap-1 text-sm font-medium", className)}
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((loc) => (
        <motion.div key={loc} {...tapScaleSubtle} className="inline-block">
          <Link
            href={pathname}
            locale={loc}
            className={cn(
              "block rounded-md px-2 py-1 transition-colors",
              locale === loc
                ? "bg-main text-white"
                : "text-neutral-600 hover:text-black",
            )}
            aria-current={locale === loc ? "true" : undefined}
          >
            {t(loc)}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
