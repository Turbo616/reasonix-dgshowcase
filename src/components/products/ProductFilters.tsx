"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
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
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("q") || "";

  return (
    <div className="space-y-6">
      {/* Search */}
      <form method="get" className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          name="q"
          defaultValue={currentSearch}
          placeholder={lang === "zh" ? "搜索产品..." : "Search products..."}
          className="pl-9 bg-secondary border-border"
        />
      </form>

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
