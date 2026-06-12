import { ResourceSubPageContent } from "@/components/resources/ResourceSubPage";

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ResourceSubPageContent slug="news" locale={locale} />;
}
