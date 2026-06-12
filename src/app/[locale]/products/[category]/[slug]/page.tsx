import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import {
  ArrowLeft,
  Check,
  Ruler,
  Shield,
  Truck,
} from "lucide-react";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; slug: string }>;
}) {
  const { locale, category, slug } = await params;
  const product = getProductById(slug);

  if (!product) notFound();

  const name = locale === "zh" ? product.nameZh : product.name;
  const description = locale === "zh" ? product.descriptionZh : product.description;
  const features = locale === "zh" ? product.featuresZh : product.features;

  return (
    <div className="container-page section-padding">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href={`/${locale}/products/${category}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          {locale === "zh" ? "返回产品列表" : "Back to products"}
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="flex gap-1.5">
            {product.tags.includes("bestseller") && (
              <Badge className="bg-gold text-black">BESTSELLER</Badge>
            )}
            {product.tags.includes("new") && (
              <Badge className="bg-white/10 text-white">NEW</Badge>
            )}
            {product.tags.includes("featured") && (
              <Badge variant="secondary">FEATURED</Badge>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Image Gallery */}
        <ProductImageGallery images={product.images} alt={name} />

        {/* Product Info */}
        <div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>

          {/* Features */}
          <h3 className="text-sm font-semibold text-gold mb-3">
            {locale === "zh" ? "产品特性" : "Features"}
          </h3>
          <ul className="grid grid-cols-1 gap-2 mb-8">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <Separator className="bg-border mb-8" />

          {/* Specifications */}
          <h3 className="text-sm font-semibold text-gold mb-4">
            {locale === "zh" ? "规格参数" : "Specifications"}
          </h3>
          <div className="space-y-3 mb-8">
            {product.specs.map((spec, i) => (
              <div
                key={i}
                className="flex justify-between text-sm py-2 border-b border-border/50"
              >
                <span className="text-muted-foreground">
                  {locale === "zh" ? spec.labelZh : spec.label}
                </span>
                <span className="font-medium text-right max-w-[60%]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <Link
              href={`/${locale}/contact`}
              className="flex-1 inline-flex items-center justify-center bg-gold text-black hover:bg-gold-light px-6 py-3 font-medium transition-colors"
            >
              {locale === "zh" ? "立即询盘" : "Send Inquiry"}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="flex-1 inline-flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-black px-6 py-3 font-medium transition-colors"
            >
              {locale === "zh" ? "获取报价" : "Get Quote"}
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              {
                icon: <Ruler className="h-5 w-5" />,
                label: locale === "zh" ? "定制尺寸" : "Custom Size",
              },
              {
                icon: <Shield className="h-5 w-5" />,
                label: locale === "zh" ? "5年质保" : "5yr Warranty",
              },
              {
                icon: <Truck className="h-5 w-5" />,
                label: locale === "zh" ? "全球配送" : "Global Delivery",
              },
            ].map((badge, i) => (
              <Card
                key={i}
                className="bg-card/50 border-border p-4 text-center"
              >
                <div className="text-gold mb-2 flex justify-center">
                  {badge.icon}
                </div>
                <p className="text-xs text-muted-foreground">{badge.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
