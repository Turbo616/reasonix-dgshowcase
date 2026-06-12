import { ResourceSubPageContent } from "@/components/resources/ResourceSubPage";

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ResourceSubPageContent slug="expertise" locale={locale} />;
}
