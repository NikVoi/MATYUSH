"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { Link } from "@/i18n/navigation";
import { navItemVariants } from "@/shared/lib/motion-variants";
import { navLinkClassName } from "@/shared/lib/nav-link";
import { LocaleSwitcher } from "@/shared/ui/locale-switcher";

interface NavProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const NAV_ITEMS = [
  { key: "work" as const, hash: "work" },
  { key: "reviews" as const, hash: "review" },
  { key: "about" as const, hash: "about" },
];

const Nav = ({ menuOpen, setMenuOpen }: NavProps) => {
  const t = useTranslations("nav");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setMenuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const renderLinks = (onClick?: () => void) =>
    NAV_ITEMS.map((item, index) => (
      <motion.li
        key={item.hash}
        custom={index}
        variants={navItemVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Link
            href={`/#${item.hash}`}
            className={navLinkClassName}
            onClick={onClick}
          >
            {t(item.key)}
          </Link>
        </motion.div>
      </motion.li>
    ));

  return (
    <>
      <nav
        className="hidden md:flex flex-1 px-20 items-center space-x-6 text-xl"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="flex md:flex-row gap-5">{renderLinks()}</ul>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="fixed top-[calc(3.25rem+env(safe-area-inset-top,0px))] left-0 z-40 flex h-[calc(100dvh-3.25rem-env(safe-area-inset-top,0px))] w-full flex-col items-center justify-center space-y-10 bg-white text-xl shadow-lg max-sm:text-lg md:hidden"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ul className="flex flex-col items-center space-y-8">
              {renderLinks(handleLinkClick)}
            </ul>
            <LocaleSwitcher className="mt-4 md:hidden" />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
