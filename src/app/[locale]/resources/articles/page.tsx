import { ResourceSubPageContent } from "@/components/resources/ResourceSubPage";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ResourceSubPageContent slug="articles" locale={locale} />;
}
