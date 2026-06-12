import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { productCategories } from "@/data/products";

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale } = await params;
  const { q } = await searchParams;

  let filteredProducts = products;

  if (q) {
    const query = q.toLowerCase();
    filteredProducts = products.filter(
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
          {locale === "zh" ? "产品中心" : "Products"}
        </h1>
        <p className="text-muted-foreground mt-2">
          {locale === "zh"
            ? `共 ${filteredProducts.length} 件产品`
            : `${filteredProducts.length} products found`}
          {q && (
            <span>
              {" "}
              {locale === "zh" ? `搜索："${q}"` : `for "${q}"`}
            </span>
          )}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <aside>
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
        </aside>

        {/* Product Grid */}
        <div>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg mb-2">
                {locale === "zh" ? "未找到匹配的产品" : "No products found"}
              </p>
              <p className="text-sm">
                {locale === "zh"
                  ? "请尝试其他搜索词"
                  : "Try a different search term"}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
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
