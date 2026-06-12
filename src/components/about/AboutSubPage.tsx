import { Card } from "@/components/ui/card";
import { Users, Factory, Globe, Cog, Leaf } from "lucide-react";

const contentMap: Record<
  string,
  {
    titleZh: string;
    titleEn: string;
    icon: React.ReactNode;
    paragraphsZh: string[];
    paragraphsEn: string[];
  }
> = {
  advantage: {
    titleZh: "我们的优势",
    titleEn: "Our Advantage",
    icon: <Factory className="h-6 w-6" />,
    paragraphsZh: [
      "DG展示柜的核心优势在于我们的一站式服务能力。从最初的概念设计到最终的上门安装，我们提供全流程的无缝服务。",
      "我们的制造中心占地190,000平方英尺，配备500+台自动化设备，年产能超过200个定制项目。每个类别都有独立的生产团队，由高级工程师把控和优化工艺。",
      "我们拥有12人的专业设计团队，涵盖空间设计师、研发设计师、灯光设计师、软装设计师和展示设计师，能够从多维度为客户提供专业的设计方案。",
      "在质量方面，我们拥有ISO、TUV等国际质量认证，采用国际标准出口包装，确保产品在全球运输中的安全。",
      "我们的服务承诺包括：免费设计、增值服务（免费提供解决方案概念）、安装指导、现场测量、专业售后服务。",
    ],
    paragraphsEn: [
      "DG Display Showcase's core advantage lies in our one-stop service capability. From initial concept design to final on-site installation, we provide seamless end-to-end service.",
      "Our manufacturing center spans 190,000 sq ft, equipped with 500+ automated devices, with an annual capacity of over 200 custom projects. Each category has an independent production team, with senior engineers controlling and optimizing processes.",
      "We have a 12-person professional design team covering spatial designers, R&D designers, lighting designers, soft furnishing designers, and display designers — providing multi-dimensional professional design solutions.",
      "In terms of quality, we hold international certifications including ISO and TUV, and use international standard export packaging to ensure product safety during global transportation.",
      "Our service commitments include: free design, value-added services (free solution concept), installation guidance, on-site measurement, and professional after-sales service.",
    ],
  },
  production: {
    titleZh: "生产动态",
    titleEn: "Production Updates",
    icon: <Cog className="h-6 w-6" />,
    paragraphsZh: [
      "DG展示柜的生产中心位于广州从化区太平镇鼎贵工业园，占地面积190,000平方英尺。",
      "我们的生产设施包括先进的自动化生产线和精密加工设备。每个产品类别——珠宝展柜、手表展柜、香水展柜、博物馆展柜等——都有独立的生产团队，确保专业性和效率。",
      "生产工艺涵盖：不锈钢无缝焊接、表面静电喷涂、高端木饰面处理、钢化玻璃精密裁切和组装。我们采用国际免熏蒸标准出口包装，包括EPE棉、气泡包装、护角、牛皮纸和木箱。",
      "常规订单通常在15-25天内完成生产和发货。通过海运、空运或铁路运输，我们能够安全地将产品送达全球任何目的地。",
    ],
    paragraphsEn: [
      "DG Display Showcase's production center is located in Dinggui Industrial Park, Taiping Town, Conghua District, Guangzhou, covering 190,000 sq ft.",
      "Our production facilities include advanced automated production lines and precision processing equipment. Each product category — Jewelry Showcase, Watch Showcase, Perfume Showcase, Museum Showcase, etc. — has an independent production team, ensuring specialization and efficiency.",
      "Production processes include: stainless steel seamless welding, electrostatic surface spraying, premium wood veneer finishing, tempered glass precision cutting and assembly. We use international fumigation-free standard export packaging including EPE cotton, bubble wrap, corner protectors, kraft paper, and wooden crates.",
      "Regular orders are typically completed and shipped within 15-25 days. Through sea, air, or rail transport, we can safely deliver products to any destination worldwide.",
    ],
  },
  sustainability: {
    titleZh: "可持续发展",
    titleEn: "Sustainability",
    icon: <Leaf className="h-6 w-6" />,
    paragraphsZh: [
      "DG展示柜致力于将可持续发展理念融入我们的生产运营和产品设计中。我们相信，奢侈与环保可以并行不悖。",
      "在材料选择方面，我们优先选择来自可持续来源的木材，使用低VOC涂料和环保饰面材料。我们的钢化玻璃和金属部件均可回收利用。",
      "制造中心采用LED照明系统和智能能源管理系统，最大限度地减少能源消耗。我们持续投资于提高生产效率的设备升级。",
      "通过优化包装设计和运输路线，我们不断减少碳足迹。模块化产品设计也减少了运输体积和包装材料的使用。",
      "DG展柜的设计使用寿命超过10年，通过模块化和可更换部件的设计，延长了产品的使用周期，减少了资源浪费。",
    ],
    paragraphsEn: [
      "DG Display Showcase is committed to integrating sustainability into our production operations and product design. We believe that luxury and environmental responsibility can coexist.",
      "In terms of material selection, we prioritize wood from sustainable sources, use low-VOC coatings and eco-friendly finishing materials. Our tempered glass and metal components are recyclable.",
      "The manufacturing center uses LED lighting systems and smart energy management to minimize consumption. We continuously invest in equipment upgrades that improve production efficiency.",
      "Through optimized packaging design and transportation routes, we continuously reduce our carbon footprint. Modular product designs also reduce shipping volume and packaging material usage.",
      "DG showcases are designed for a service life of over 10 years. Through modular and replaceable component designs, we extend product lifecycles and reduce resource waste.",
    ],
  },
  team: {
    titleZh: "团队介绍",
    titleEn: "Our Team",
    icon: <Users className="h-6 w-6" />,
    paragraphsZh: [
      "DG展示柜的成功离不开我们180+人的工匠团队。",
      "专业服务团队：从客户需求的首次沟通开始，我们的客户经理就全程陪伴，确保项目的每个环节无缝衔接。许多团队成员拥有超过十年的行业经验。",
      "生产团队：每个产品类别配备独立的生产团队，专注于各自领域的工艺技术。高级工程师持续监控和优化生产流程，确保每一件产品都达到最高标准。",
      "设计团队：12人的专业设计团队融合空间设计、研发设计、灯光设计、软装设计和展示设计等多个领域，能够从品牌文化、市场定位等多维度为客户提供独特的定制方案。",
      "销售团队：我们的销售团队不仅懂得产品，更懂得客户的需求。从前期沟通、项目设计到工厂制造和售后维护，优秀的客户经理、项目经理和设计师团队全程为客户保驾护航。",
    ],
    paragraphsEn: [
      "DG Display Showcase's success is built on our 180+ artisan team.",
      "Professional Service Team: From the first communication about customer requirements, our account managers accompany clients throughout the entire journey, ensuring seamless coordination at every stage. Many team members have over ten years of industry experience.",
      "Production Team: Each product category is served by an independent production team focused on their specialized craftsmanship. Senior engineers continuously monitor and optimize production processes to ensure every product meets the highest standards.",
      "Design Team: Our 12-person professional design team integrates spatial design, R&D design, lighting design, soft furnishing design, and display design expertise, providing uniquely customized solutions from multiple dimensions including brand culture and market positioning.",
      "Sales Team: Our sales team understands not just products, but customer needs. From initial communication and project design to factory manufacturing and after-sales maintenance, excellent account managers, project managers, and designers safeguard every step for our clients.",
    ],
  },
};

export function AboutSubPage({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  const data = contentMap[slug];
  if (!data) return null;

  const title = locale === "zh" ? data.titleZh : data.titleEn;
  const paragraphs = locale === "zh" ? data.paragraphsZh : data.paragraphsEn;

  return (
    <div className="container-page section-padding max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export { contentMap };
