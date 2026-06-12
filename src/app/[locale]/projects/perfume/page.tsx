import { ProjectSubPage } from "@/components/projects/ProjectSubPage";

export default async function PerfumeProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ProjectSubPage slug="perfume" locale={locale} />;
}
