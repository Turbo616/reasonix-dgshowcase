import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gem, ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  lang,
  categoryHref,
}: {
  product: Product;
  lang: string;
  categoryHref: string;
}) {
  const name = lang === "zh" ? product.nameZh : product.name;
  const description =
    lang === "zh" ? product.descriptionZh : product.description;
  const features = lang === "zh" ? product.featuresZh : product.features;

  return (
    <Link href={`/${lang}${categoryHref}/${product.id}`}>
      <Card className="group bg-card border-border overflow-hidden hover:border-gold/50 transition-all duration-300 h-full flex flex-col">
        {/* Product Image */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-gold/10 via-card to-card overflow-hidden">
          {product.images.length > 0 ? (
            <img
              src={product.images[0]}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Gem className="h-12 w-12 text-gold/30" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          {/* Tags */}
          <div className="absolute top-3 left-3 flex gap-1.5">
            {product.tags.includes("bestseller") && (
              <Badge className="bg-gold text-black text-[10px]">BEST</Badge>
            )}
            {product.tags.includes("new") && (
              <Badge className="bg-white/10 text-white text-[10px]">NEW</Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-sm mb-1.5 group-hover:text-gold transition-colors line-clamp-2">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">
            {description}
          </p>

          {/* Features preview */}
          <div className="flex flex-wrap gap-1 mb-3">
            {features.slice(0, 3).map((f, i) => (
              <span
                key={i}
                className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">
            <span>{lang === "zh" ? "查看详情" : "View Details"}</span>
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
