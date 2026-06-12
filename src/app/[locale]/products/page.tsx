"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { products, productCategories } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function ProductsPage() {
  const { locale } = useParams<{ locale: string }>();
  const zh = locale === "zh";
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return products;
    const q = search.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.nameZh.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.descriptionZh.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <div className="container-page section-padding">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {zh ? "产品中心" : "Products"}
        </h1>
        <p className="text-muted-foreground mt-2">
          {zh
            ? `共 ${filtered.length} 件产品`
            : `${filtered.length} products found`}
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
                selectedCategory={null}
                lang={locale}
                basePath="/products"
              />
            </div>
          </div>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg mb-2">
                {zh ? "未找到匹配的产品" : "No products found"}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  lang={locale}
                  categoryHref={`/products/${product.category}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
