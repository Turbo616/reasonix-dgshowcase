import { ResourceSubPageContent } from "@/components/resources/ResourceSubPage";

export default async function TestimonialPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ResourceSubPageContent slug="testimonial" locale={locale} />;
}
