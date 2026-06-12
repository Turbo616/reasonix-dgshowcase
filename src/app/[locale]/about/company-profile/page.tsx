import { Card } from "@/components/ui/card";
import { Users, Factory, Globe, Cog } from "lucide-react";

export default async function CompanyProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="container-page section-padding max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        {locale === "zh" ? "公司简介" : "Company Profile"}
      </h1>

      <div className="space-y-6 text-muted-foreground leading-relaxed mb-12">
        <p>
          {locale === "zh"
            ? "广州鼎贵家具有限公司（DG Display Showcase）是全球领先的展示柜制造商和定制商业环境解决方案供应商之一。我们的行业经验可追溯到1999年。"
            : "Guangzhou DG Furniture Co., Ltd. (DG Display Showcase) is one of the world's leading display showcase manufacturers and solution providers for custom commercial environments. Our industry experience dates back to 1999."}
        </p>
        <p>
          {locale === "zh"
            ? "主要产品包括珠宝展柜、博物馆展柜、奢侈品展柜、手表展柜、香水展柜、眼镜展柜、贵宾室家具和珠宝陈列道具等。我们拥有先进的设备和技术支持，能很好地满足客户的各项要求。"
            : "Our main products include Jewelry Showcase, Museum Showcase, Luxury Showcase, Watch Showcase, Perfume Showcase, Optical Showcase, VIP Room Furniture, and Jewelry Display Props. We have advanced equipment and technical support to meet various customer requirements."}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
        {[
          {
            icon: <Users className="h-6 w-6" />,
            title: locale === "zh" ? "专业服务团队" : "Professional Service Team",
            desc:
              locale === "zh"
                ? "超过300名员工为DG工作。特别是，一些员工在该领域拥有十多年的经验。"
                : "Over 300 employees work for DG. Many team members have more than ten years of experience in this field.",
          },
          {
            icon: <Factory className="h-6 w-6" />,
            title: locale === "zh" ? "生产团队" : "Production Team",
            desc:
              locale === "zh"
                ? "每个类别都有独立的生产团队，专注于生产技术。高级工程师控制并优化流程。"
                : "Each category has an independent production team, specializing in manufacturing. Senior engineers control and optimize the process.",
          },
          {
            icon: <Globe className="h-6 w-6" />,
            title: locale === "zh" ? "设计团队" : "Design Team",
            desc:
              locale === "zh"
                ? "DG拥有独立的设计开发团队，可根据客户要求提供独立、创新、非大众化的设计服务。团队擅长结合客户品牌文化、定位和市场分析来设计专业展柜和整体布局。"
                : "DG has an independent design and development team providing innovative, customized design services. The team excels at combining brand culture, positioning, and market analysis to design professional showcases and overall layouts.",
          },
          {
            icon: <Cog className="h-6 w-6" />,
            title: locale === "zh" ? "销售团队" : "Sales Team",
            desc:
              locale === "zh"
                ? "从客户需求到项目管控、前期沟通、项目设计、工厂制造、维护——每一步都由优秀的客户经理、项目经理、设计师团队和工匠团队为客户服务。"
                : "From customer requirements to project management, communication, design, manufacturing, and maintenance — every step is handled by excellent account managers, project managers, designers, and craftsmen.",
          },
        ].map((item, i) => (
          <Card key={i} className="bg-card/50 border-border p-6">
            <div className="text-gold mb-3">{item.icon}</div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </Card>
        ))}
      </div>

      <div className="bg-card/30 border border-border rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4 text-center">
          {locale === "zh" ? "我们如何定义全球标准" : "How We Define Global Standards"}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          {locale === "zh"
            ? "我们做的第一件事是与客户会面，讨论他们未来项目的目标。在这次会议上，随时沟通您的想法并提出大量问题。"
            : "The first thing we do is meet with our clients and talk through their goals on a future project. During this meeting, feel free to communicate your ideas and ask lots of questions."}
        </p>
      </div>
    </div>
  );
}
