import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Gem, Droplets, Landmark, Palette, ArrowRight } from "lucide-react";

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const solutions = [
    {
      icon: <Gem className="h-10 w-10" />,
      title: locale === "zh" ? "珠宝展柜解决方案" : "Jewelry Showcase Solutions",
      desc:
        locale === "zh"
          ? "为奢侈珠宝品牌提供定制展柜方案，包括前柜、岛柜、壁挂柜和展示桌。精密光学工程和空间设计，将每件珠宝呈现于最佳光线之中。"
          : "Custom showcase solutions for luxury jewelry brands, including front showcases, island cabinets, wall-mounted cases, and display tables. Precision optical engineering and spatial design present each piece in its best light.",
      href: "/products/jewelry",
    },
    {
      icon: <Droplets className="h-10 w-10" />,
      title: locale === "zh" ? "香水展柜解决方案" : "Perfume Showcase Solutions",
      desc:
        locale === "zh"
          ? "将香氛叙事与视觉故事相融合的沉浸式品牌氛围设计。通过环境艺术、灯光和空间动线，打造令人难忘的感官画廊。"
          : "Immersive brand atmosphere design that fuses scent narrative with visual storytelling. Through environmental artistry, lighting, and spatial flow, we create unforgettable sensory galleries.",
      href: "/products/perfume",
    },
    {
      icon: <Landmark className="h-10 w-10" />,
      title: locale === "zh" ? "博物馆展柜解决方案" : "Museum Showcase Solutions",
      desc:
        locale === "zh"
          ? "专注于文物保护的展柜设计。集成气候控制、先进防眩光系统和叙事设计，在遗产保护与现代展览之间取得平衡。"
          : "Showcase design focused on artifact preservation. Integrating climate control, advanced anti-glare systems, and narrative design to balance heritage conservation with modern exhibition.",
      href: "/products/museum",
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: locale === "zh" ? "模块化零售解决方案" : "Modular Retail Solutions",
      desc:
        locale === "zh"
          ? "为奢侈零售品牌提供的模块化展柜系统。灵活动态的品牌空间，可不断更新配置，持续提升品牌价值。"
          : "Modular showcase systems for luxury retail brands. Flexible, dynamic brand spaces that can be continuously reconfigured, constantly elevating brand value.",
      href: "/products/luxury",
    },
  ];

  return (
    <div className="container-page section-padding">
      <h1 className="text-3xl font-bold mb-4">
        {locale === "zh" ? "解决方案" : "Solutions"}
      </h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        {locale === "zh"
          ? "我们提供从设计、生产到安装的端到端解决方案，打造沉浸式体验，提升品牌价值，深化客户互动。"
          : "We deliver end-to-end solutions—from design and production to installation—crafting immersive experiences that elevate brand value and deepen customer engagement."}
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {solutions.map((sol, i) => (
          <Link key={i} href={`/${locale}${sol.href}`}>
            <Card className="group bg-card/50 border-border p-8 hover:border-gold/50 transition-all h-full">
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                {sol.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {sol.desc}
              </p>
              <span className="flex items-center gap-2 text-sm text-gold">
                {locale === "zh" ? "了解更多" : "Learn More"}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
