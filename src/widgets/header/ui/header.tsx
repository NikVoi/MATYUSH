"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { usePathname } from "@/i18n/navigation";
import { headerVariants } from "@/shared/lib/motion-variants";
import { Container } from "@/shared/ui/container";
import { ScrollProgress } from "@/shared/ui/scroll-progress";

import { MATYUSH } from "@/shared/config/constant";
import Link from "next/link";
import Nav from "./nav";

function BurgerButton({
  menuOpen,
  toggleMenu,
  openLabel,
  closeLabel,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
  openLabel: string;
  closeLabel: string;
}) {
  return (
    <button
      type="button"
      className="relative md:hidden w-8 h-8 cursor-pointer"
      onClick={toggleMenu}
      aria-label={menuOpen ? closeLabel : openLabel}
      aria-expanded={menuOpen}
    >
      <span
        className={`absolute left-0 top-1/2 h-1 w-full bg-black transition-all duration-300 ${
          menuOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-3"
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 h-1 w-full bg-black transition-all duration-300 ${
          menuOpen ? "opacity-0" : "-translate-y-1/2 opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 h-1 w-full bg-black transition-all duration-300 ${
          menuOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-2"
        }`}
      />
    </button>
  );
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <motion.header
      className="fixed z-50 w-full bg-white/95 py-3 shadow-md backdrop-blur-sm supports-[padding:max(0px)]:pt-[max(0.75rem,env(safe-area-inset-top))] sm:py-4"
      role="banner"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {isHome && (
        <ScrollProgress className="absolute bottom-0 left-0 right-0 z-10 h-0.5 origin-left bg-main" />
      )}
      <Container className="flex items-center justify-between gap-4">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/"
            className="font-archivo text-xl font-normal max-sm:text-lg sm:text-2xl shrink-0 block tracking-tight"
          >
            {MATYUSH}
          </Link>
        </motion.div>

        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="flex items-center gap-3 shrink-0">
          {/* <LocaleSwitcher className="max-md:hidden" /> */}
          <BurgerButton
            menuOpen={menuOpen}
            toggleMenu={() => setMenuOpen((open) => !open)}
            openLabel={t("openMenu")}
            closeLabel={t("closeMenu")}
          />
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
