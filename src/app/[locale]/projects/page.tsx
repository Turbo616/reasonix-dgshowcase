import { projects } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="container-page section-padding">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-3">
          {locale === "zh" ? "项目案例" : "Our Projects"}
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          {locale === "zh"
            ? "凭借丰富的国际项目经验，DG展示柜确保全球无缝执行——从设计细节、安全包装到海外协调与组装。"
            : "With extensive international project experience, DG Display Showcase ensures seamless global execution—from design detailing and secure packing to overseas coordination and assembly."}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.id} href={`/${locale}/projects/${project.id}`}>
            <Card className="group bg-card border-border overflow-hidden hover:border-gold/50 transition-all h-full flex flex-col">
              {/* Image */}
              <div className="aspect-[16/10] bg-gradient-to-br from-gold/10 to-card overflow-hidden">
                {project.images.length > 0 && (
                  <img
                    src={project.images[0]}
                    alt={locale === "zh" ? project.titleZh : project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex gap-2 mb-3">
                  {project.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {locale === "zh" ? project.titleZh : project.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {locale === "zh"
                    ? project.descriptionZh
                    : project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {project.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    {locale === "zh" ? "查看详情" : "View Details"}
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
