import { AboutSubPage } from "@/components/about/AboutSubPage";

export default async function AdvantagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutSubPage slug="advantage" locale={locale} />;
}
