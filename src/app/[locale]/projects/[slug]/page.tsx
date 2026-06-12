import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectById } from "@/data/projects";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Target, Lightbulb, Trophy } from "lucide-react";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProjectById(slug);

  if (!project) notFound();

  const title = locale === "zh" ? project.titleZh : project.title;
  const description = locale === "zh" ? project.descriptionZh : project.description;
  const challenge = locale === "zh" ? project.challengeZh : project.challenge;
  const solution = locale === "zh" ? project.solutionZh : project.solution;
  const result = locale === "zh" ? project.resultZh : project.result;

  const sections = [
    {
      icon: <Target className="h-6 w-6" />,
      label: locale === "zh" ? "挑战" : "Challenge",
      content: challenge,
      color: "text-rose-400",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      label: locale === "zh" ? "解决方案" : "Solution",
      content: solution,
      color: "text-gold",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      label: locale === "zh" ? "成果" : "Result",
      content: result,
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="container-page section-padding">
      <Link
        href={`/${locale}/projects`}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        {locale === "zh" ? "返回案例列表" : "Back to projects"}
      </Link>

      <div className="grid gap-12 lg:grid-cols-2 mb-16">
        <ProductImageGallery images={project.images} alt={title} />

        <div>
          <div className="flex gap-2 mb-3">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>

          <Separator className="bg-border" />
        </div>
      </div>

      {/* Challenge / Solution / Result */}
      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {sections.map((section, i) => (
          <Card
            key={i}
            className="bg-card/50 border-border p-6"
          >
            <div className={`flex items-center gap-3 mb-4 ${section.color}`}>
              {section.icon}
              <h3 className="font-bold text-lg">{section.label}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {section.content}
            </p>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-card/30 border border-border rounded-lg p-10">
        <h2 className="text-2xl font-bold mb-3">
          {locale === "zh" ? "开启您的定制项目" : "Start Your Custom Project"}
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          {locale === "zh"
            ? "无论您是需要新店开业的全套展柜方案，还是现有店铺的升级改造，DG展示柜都能为您提供一站式解决方案。"
            : "Whether you need a complete showcase solution for a new store opening or an upgrade for an existing location, DG Display Showcase provides end-to-end solutions."}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center justify-center bg-gold text-black hover:bg-gold-light px-8 py-3 font-medium transition-colors"
        >
          {locale === "zh" ? "立即咨询" : "Contact Us Now"}
        </Link>
      </div>
    </div>
  );
}
