"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import type { Product } from "@/entities/product";
import { cn } from "@/shared/lib/utils";

type TabValue = "detail" | "fabric" | "care" | "specifications";

function formatParagraphs(text?: string) {
  if (!text) return null;
  return text.split("\n\n").map((paragraph, i) => (
    <p key={i} className="mb-4 last:mb-0">
      {paragraph}
    </p>
  ));
}

function TabPanel({
  activeTab,
  product,
  specLabels,
}: {
  activeTab: TabValue;
  product: Product;
  specLabels: { color: string; material: string; params: string };
}) {
  switch (activeTab) {
    case "detail":
      return (
        <div className="font-body text-[15px] leading-[1.75] tracking-wide text-neutral-600 md:text-base">
          {formatParagraphs(product.details)}
        </div>
      );
    case "fabric":
      return (
        <div className="font-body text-[15px] leading-[1.75] tracking-wide text-neutral-600 md:text-base">
          {formatParagraphs(product.fabric)}
        </div>
      );
    case "care":
      return (
        <div className="font-body text-[15px] leading-[1.75] tracking-wide text-neutral-600 md:text-base">
          {formatParagraphs(product.care)}
        </div>
      );
    case "specifications": {
      const { specifications } = product;
      return (
        <dl className="font-body space-y-3 text-[15px] leading-[1.75] tracking-wide text-neutral-600 md:text-base">
          {specifications?.color && (
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                {specLabels.color}
              </dt>
              <dd className="mt-1 text-neutral-800">{specifications.color}</dd>
            </div>
          )}
          {specifications?.material && (
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                {specLabels.material}
              </dt>
              <dd className="mt-1 text-neutral-800">
                {specifications.material}
              </dd>
            </div>
          )}
          {specifications?.params && (
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                {specLabels.params}
              </dt>
              <dd className="mt-1 text-neutral-800">{specifications.params}</dd>
            </div>
          )}
        </dl>
      );
    }
    default:
      return null;
  }
}

export function ProductTabs({ product }: { product: Product }) {
  const t = useTranslations("product");
  const [activeTab, setActiveTab] = useState<TabValue>("detail");

  const tabs = useMemo(
    () => [
      { label: t("tabs.details"), value: "detail" as const },
      { label: t("tabs.fabric"), value: "fabric" as const },
      { label: t("tabs.care"), value: "care" as const },
      { label: t("tabs.specs"), value: "specifications" as const },
    ],
    [t],
  );

  const specLabels = {
    color: t("specs.color"),
    material: t("specs.material"),
    params: t("specs.params"),
  };

  return (
    <div className="border-t border-neutral-100 pt-6">
      <div
        className="flex gap-6 overflow-x-auto border-b border-neutral-200"
        role="tablist"
        aria-label={t("tabs.aria")}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={cn(
              "-mb-px shrink-0 border-b-2 pb-3 text-sm font-medium transition-colors duration-200",
              activeTab === tab.value
                ? "border-black text-black"
                : "border-transparent text-neutral-400 hover:text-neutral-700",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="relative mt-6 min-h-[220px] lg:min-h-[240px]"
        role="tabpanel"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <TabPanel
              activeTab={activeTab}
              product={product}
              specLabels={specLabels}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
