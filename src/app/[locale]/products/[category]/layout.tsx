import { productCategories } from "@/data/products";

export function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.key }));
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
