import { ProjectSubPage } from "@/components/projects/ProjectSubPage";

export default async function MuseumProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ProjectSubPage slug="museum" locale={locale} />;
}
