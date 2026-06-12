"use client";

import { useState, useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import { productCategories, products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CategoryPage() {
  const params = useParams<{ locale: string; category: string }>();
  const { locale, category } = params;
  const zh = locale === "zh";
  const [search, setSearch] = useState("");

  const catInfo = productCategories.find((c) => c.key === category);
  if (!catInfo) notFound();

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.category === category);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.nameZh.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.descriptionZh.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }
    return list;
  }, [search, category]);

  return (
    <div className="container-page section-padding">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {zh ? catInfo.labelZh : catInfo.label}
        </h1>
        <p className="text-muted-foreground mt-2">
          {zh ? `共 ${filtered.length} 件产品` : `${filtered.length} products`}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside>
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={zh ? "搜索产品..." : "Search products..."}
                className="pl-9 bg-secondary border-border"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gold mb-3">
                {zh ? "产品分类" : "Categories"}
              </h3>
              <ProductFilters
                categories={productCategories.map((c) => ({
                  key: c.key,
                  label: c.label,
                  labelZh: c.labelZh,
                }))}
                selectedCategory={category}
                lang={locale}
                basePath="/products"
              />
            </div>
          </div>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">
                {zh ? "该分类暂无产品" : "No products in this category"}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  lang={locale}
                  categoryHref={`/products/${category}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
