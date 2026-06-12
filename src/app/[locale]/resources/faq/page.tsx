import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const zh = locale === "zh";

  const faqs = [
    {
      q: zh
        ? "DG展示柜的最小起订量是多少？"
        : "What is the minimum order quantity?",
      a: zh
        ? "我们支持小批量订单。对于标准化产品系列，您可以先购买2-3件样品查看实际效果，满意后再下大订单。对于完全定制项目，我们根据项目复杂度灵活协商。"
        : "We support small quantity orders. For our standardized product series, you can first purchase 2-3 sample units to see the actual effect, then place a larger order once satisfied. For fully customized projects, we flexibly negotiate based on project complexity.",
    },
    {
      q: zh
        ? "从下单到交货需要多长时间？"
        : "How long does it take from order to delivery?",
      a: zh
        ? "标准化产品系列通常在7-15天内发货。完全定制项目根据复杂程度需要4-8周。紧急订单可安排加急生产。海运时间因目的地而异，通常为15-45天。"
        : "Standardized product series usually ship within 7-15 days. Fully customized projects take 4-8 weeks depending on complexity. Rush orders can be arranged for expedited production. Sea shipping time varies by destination, typically 15-45 days.",
    },
    {
      q: zh
        ? "你们提供免费设计服务吗？"
        : "Do you provide free design services?",
      a: zh
        ? "是的！我们为客户提供免费的概念设计方案。我们的12人专业设计团队会根据您的品牌定位、空间条件和预算提供量身定制的方案。待方案确认后才进入收费的生产阶段。"
        : "Yes! We provide free concept design proposals for our clients. Our 12-person professional design team will provide tailored solutions based on your brand positioning, spatial conditions, and budget. The paid production phase only begins after the proposal is confirmed.",
    },
    {
      q: zh
        ? "产品如何包装和运输？"
        : "How are products packaged and shipped?",
      a: zh
        ? "我们采用国际标准出口包装：EPE棉 → 气泡包装 → 护角 → 牛皮纸 → 木箱。所有木箱均经过熏蒸处理，符合国际进出口标准。运输方式包括海运、空运和铁路运输，根据您的时效和预算需求选择。"
        : "We use international standard export packaging: EPE cotton → bubble wrap → corner protectors → kraft paper → wooden crate. All wooden crates are fumigated and meet international import/export standards. Transportation includes sea, air, and rail, selected based on your timeline and budget needs.",
    },
    {
      q: zh
        ? "你们提供安装服务吗？"
        : "Do you provide installation services?",
      a: zh
        ? "是的！我们提供详细的安装指导手册和视频。对于大型项目，我们可以派遣专业安装团队上门服务。我们的展柜采用模块化设计，拆装方便，大多数客户根据指导即可自行安装。"
        : "Yes! We provide detailed installation manuals and video guides. For large-scale projects, we can dispatch professional installation teams for on-site service. Our showcases feature modular design for easy assembly and disassembly — most clients can self-install following our guidance.",
    },
    {
      q: zh
        ? "产品有保修吗？"
        : "Is there a warranty?",
      a: zh
        ? "所有产品享有5年质量保修。保修范围涵盖材料和工艺缺陷。我们提供终身技术支持，包括LED照明系统的维护和更换服务。"
        : "All products come with a 5-year quality warranty covering material and workmanship defects. We provide lifetime technical support, including maintenance and replacement services for LED lighting systems.",
    },
    {
      q: zh
        ? "可以定制尺寸和颜色吗？"
        : "Can sizes and colors be customized?",
      a: zh
        ? "当然！这是我们最核心的服务。我们提供完全的尺寸定制、材质选择（木材、金属、皮革、大理石等）、颜色匹配（可匹配品牌色）和功能定制（照明系统、安全系统、存储方案等）。我们建议您提供品牌VI手册以便我们精确匹配。"
        : "Absolutely! This is our core service. We offer complete customization in dimensions, material selection (wood, metal, leather, marble, etc.), color matching (can match brand colors), and functional customization (lighting systems, security systems, storage solutions, etc.). We recommend providing your brand VI manual for precise matching.",
    },
    {
      q: zh
        ? "你们服务哪些国家和地区？"
        : "Which countries and regions do you serve?",
      a: zh
        ? "我们的客户遍布全球60+个国家和地区，包括法国、意大利、英国、瑞士、美国、加拿大、澳大利亚、日本、韩国、沙特阿拉伯、阿联酋、新加坡等。我们拥有丰富的国际物流经验和海外项目协调能力。"
        : "Our clients span 60+ countries and regions worldwide, including France, Italy, the UK, Switzerland, the USA, Canada, Australia, Japan, South Korea, Saudi Arabia, UAE, Singapore, and more. We have extensive international logistics experience and overseas project coordination capabilities.",
    },
  ];

  return (
    <div className="container-page section-padding max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        {zh ? "常见问题" : "FAQ"}
      </h1>
      <p className="text-muted-foreground mb-10">
        {zh
          ? "关于产品定制、物流、安装和售后服务的常见问题解答。如未找到您需要的信息，请随时联系我们。"
          : "Frequently asked questions about product customization, logistics, installation, and after-sales service. If you don't find what you need, please contact us anytime."}
      </p>
      <Accordion className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card/50 border border-border rounded-lg px-5 data-[state=open]:border-gold/50"
          >
            <AccordionTrigger className="text-left font-medium hover:text-gold transition-colors">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
