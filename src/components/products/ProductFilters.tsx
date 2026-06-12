"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: { key: string; label: string; labelZh: string }[];
  selectedCategory: string | null;
  lang: string;
  basePath: string;
}

export function ProductFilters({
  categories,
  selectedCategory,
  lang,
  basePath,
}: CategoryFilterProps) {
  return (
    <div>
      {/* Category list */}
      <div>
        <h3 className="text-sm font-semibold text-gold mb-3">
          {lang === "zh" ? "产品分类" : "Categories"}
        </h3>
        <ul className="space-y-1">
          <li>
            <Link
              href={`/${lang}${basePath}`}
              className={cn(
                "block text-sm py-1.5 px-3 rounded transition-colors",
                !selectedCategory
                  ? "bg-gold/10 text-gold font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {lang === "zh" ? "全部产品" : "All Products"}
            </Link>
          </li>
          {categories.map((cat) => (
            <li key={cat.key}>
              <Link
                href={`/${lang}${basePath}/${cat.key}`}
                className={cn(
                  "block text-sm py-1.5 px-3 rounded transition-colors",
                  selectedCategory === cat.key
                    ? "bg-gold/10 text-gold font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {lang === "zh" ? cat.labelZh : cat.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
