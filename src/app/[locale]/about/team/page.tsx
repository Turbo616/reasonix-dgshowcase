import { AboutSubPage } from "@/components/about/AboutSubPage";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutSubPage slug="team" locale={locale} />;
}
