import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["be", "ru"],
  defaultLocale: "be",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
