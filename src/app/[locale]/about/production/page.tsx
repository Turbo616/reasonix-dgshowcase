import { AboutSubPage } from "@/components/about/AboutSubPage";

export default async function ProductionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutSubPage slug="production" locale={locale} />;
}
