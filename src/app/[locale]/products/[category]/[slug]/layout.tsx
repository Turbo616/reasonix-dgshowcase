import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.id }));
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
