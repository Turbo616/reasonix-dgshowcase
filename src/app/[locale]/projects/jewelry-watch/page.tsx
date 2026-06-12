import { ProjectSubPage } from "@/components/projects/ProjectSubPage";

export default async function JewelryWatchProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ProjectSubPage slug="jewelry-watch" locale={locale} />;
}
