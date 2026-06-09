export type FooterIcon = "phone" | "location" | "telegram" | "instagram";

export const footerColumns = [
  {
    title: "Кампанія",
    links: [
      { label: "Працы", href: "/#work" },
      { label: "Водгукі", href: "/#review" },
      { label: "Пра нас", href: "/#about" },
    ],
  },
];

export const CONTACT_TITLE = "Кантакт";

export const contactInfo: { text: string; icon: FooterIcon }[] = [
  { text: "+375 29 747 4332", icon: "phone" },
  { text: "Беларусь, Мінск", icon: "location" },
];

export const socialLinks: { href: string; icon: FooterIcon; label: string }[] =
  [
    {
      href: "https://t.me/matyushbrand",
      icon: "telegram",
      label: "Telegram",
    },
    {
      href: "https://www.instagram.com/matyush.krama?igsh=OTRvbDE3djZyNTVO",
      icon: "instagram",
      label: "Instagram",
    },
  ];
