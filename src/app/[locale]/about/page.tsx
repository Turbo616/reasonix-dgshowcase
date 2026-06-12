import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Award,
  Factory,
  Leaf,
  Users,
  Globe,
} from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const sections = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: locale === "zh" ? "品牌故事" : "Brand Story",
      desc:
        locale === "zh"
          ? "了解DG展示柜自1999年以来的发展历程，从一个小型工坊成长为全球领先的展示柜制造商。"
          : "Discover DG Display Showcase's journey since 1999, from a small workshop to a global leader in display showcase manufacturing.",
      href: "/about/brand-story",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: locale === "zh" ? "公司简介" : "Company Profile",
      desc:
        locale === "zh"
          ? "300+员工，21,500平方英尺展厅，190,000平方英尺制造中心，年均200+定制项目。"
          : "300+ employees, 21,500 sq ft showroom, 190,000 sq ft manufacturing center, 200+ custom projects per year.",
      href: "/about/company-profile",
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: locale === "zh" ? "我们的优势" : "Our Advantage",
      desc:
        locale === "zh"
          ? "从设计到生产到安装的一站式服务，国际质量认证，专业工匠团队，先进自动化设备。"
          : "One-stop service from design to production to installation, international quality certifications, professional artisan team, advanced automated equipment.",
      href: "/about/advantage",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: locale === "zh" ? "生产动态" : "Production Updates",
      desc:
        locale === "zh"
          ? "了解我们最新的生产能力、设备升级和制造工艺创新。"
          : "Stay updated on our latest production capabilities, equipment upgrades, and manufacturing innovations.",
      href: "/about/production",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: locale === "zh" ? "可持续发展" : "Sustainability",
      desc:
        locale === "zh"
          ? "DG展示柜致力于低碳实践和绿色设计理念，为奢侈零售行业的可持续发展贡献力量。"
          : "DG Display Showcase is committed to low-carbon practices and green design, contributing to sustainability in the luxury retail industry.",
      href: "/about/sustainability",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: locale === "zh" ? "团队介绍" : "Our Team",
      desc:
        locale === "zh"
          ? "专业服务团队、生产团队、设计团队和销售团队，全方位保障客户项目成功。"
          : "Professional service team, production team, design team, and sales team — ensuring project success on all fronts.",
      href: "/about/team",
    },
  ];

  return (
    <div className="container-page section-padding">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {locale === "zh" ? "关于DG展示柜" : "About DG Display Showcase"}
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {locale === "zh"
            ? "在高端珠宝、奢侈零售和博物馆的世界里，展柜不仅仅是一个容器——它是品牌故事叙述和客户信任的第一个接触点。27年来，DG展示柜一直致力于一个使命：为客户解决三个关键挑战——展示美学、执行可靠性和信任建立。"
            : "In the world of high-end jewelry, luxury retail, and museums, a display is more than just a container — it's the first touch point of brand storytelling and customer trust. For over 27 years, DG has been committed to solving three critical challenges: display aesthetics, execution reliability, and trust-building."}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
        {[
          { value: "21,500", label: locale === "zh" ? "展厅面积" : "Showroom", unit: "sq ft" },
          { value: "190,000", label: locale === "zh" ? "制造中心" : "Manufacturing", unit: "sq ft" },
          { value: "200+", label: locale === "zh" ? "年度项目" : "Projects/Year", unit: "" },
          { value: "180+", label: locale === "zh" ? "工匠团队" : "Artisan Team", unit: "" },
          { value: "500+", label: locale === "zh" ? "自动化设备" : "Equipment", unit: "" },
        ].map((stat, i) => (
          <Card key={i} className="bg-card/50 border-border p-4 text-center">
            <p className="text-xl md:text-2xl font-bold text-gold">
              {stat.value}
              <span className="text-sm font-normal text-muted-foreground">
                {" "}{stat.unit}
              </span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Section links */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, i) => (
          <Link key={i} href={`/${locale}${section.href}`}>
            <Card className="group bg-card/50 border-border p-6 hover:border-gold/50 transition-all h-full">
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h3 className="font-bold mb-2 group-hover:text-gold transition-colors">
                {section.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {section.desc}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
