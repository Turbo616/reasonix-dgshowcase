import { notFound } from "next/navigation";
import { productCategories, products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; category: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale, category } = await params;
  const { q } = await searchParams;

  const catInfo = productCategories.find((c) => c.key === category);
  if (!catInfo) notFound();

  let filteredProducts = products.filter((p) => p.category === category);

  if (q) {
    const query = q.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.nameZh.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.descriptionZh.toLowerCase().includes(query) ||
        p.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  return (
    <div className="container-page section-padding">
      {/* Breadcrumb */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {locale === "zh" ? catInfo.labelZh : catInfo.label}
        </h1>
        <p className="text-muted-foreground mt-2">
          {locale === "zh"
            ? `共 ${filteredProducts.length} 件产品`
            : `${filteredProducts.length} products`}
          {q && (
            <span>
              {" "}
              {locale === "zh" ? `搜索："${q}"` : `for "${q}"`}
            </span>
          )}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside>
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
        </aside>

        <div>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">
                {locale === "zh" ? "该分类暂无产品" : "No products in this category"}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
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
