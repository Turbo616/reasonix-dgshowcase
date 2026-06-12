import { AboutSubPage } from "@/components/about/AboutSubPage";

export default async function SustainabilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutSubPage slug="sustainability" locale={locale} />;
}
