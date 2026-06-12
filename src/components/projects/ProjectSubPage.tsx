import Link from "next/link";
import { Card } from "@/components/ui/card";
import { projects, type Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";

const categoryMap: Record<string, { zh: string; en: string; filter: string[] }> = {
  "jewelry-watch": {
    zh: "珠宝与钟表项目",
    en: "Jewelry & Watch Projects",
    filter: ["jewelry", "watch"],
  },
  perfume: {
    zh: "香水项目",
    en: "Perfume Projects",
    filter: ["perfume"],
  },
  museum: {
    zh: "博物馆项目",
    en: "Museum Projects",
    filter: ["museum"],
  },
};

export function ProjectSubPage({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  const cat = categoryMap[slug];
  if (!cat) return null;

  const zh = locale === "zh";
  const title = zh ? cat.zh : cat.en;
  const filtered = projects.filter((p) =>
    p.tags.some((tag) => cat.filter.includes(tag))
  );

  return (
    <div className="container-page section-padding">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-center py-20">
          {zh ? "暂无此类项目" : "No projects in this category yet"}
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {filtered.map((project) => (
            <Link key={project.id} href={`/${locale}/projects/${project.id}`}>
              <Card className="group bg-card border-border overflow-hidden hover:border-gold/50 transition-all h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  {project.images.length > 0 && (
                    <img
                      src={project.images[0]}
                      alt={zh ? project.titleZh : project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {zh ? project.titleZh : project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">
                    {zh ? project.descriptionZh : project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      {zh ? "查看详情" : "View Details"}
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
