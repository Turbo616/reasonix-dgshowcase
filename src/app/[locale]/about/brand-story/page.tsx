export default async function BrandStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="container-page section-padding max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        {locale === "zh" ? "品牌故事" : "Brand Story"}
      </h1>

      <div className="prose prose-invert max-w-none">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            {locale === "zh"
              ? "DG展示柜的故事始于1999年，中国广州。从一个专注于展示柜制造的小型工坊起步，我们始终怀揣一个简单的信念：每一件展品都值得被以最完美的方式呈现。"
              : "The story of DG Display Showcase began in 1999 in Guangzhou, China. Starting from a small workshop focused on display showcase manufacturing, we have always held a simple belief: every exhibit deserves to be presented in the most perfect way."}
          </p>
          <p>
            {locale === "zh"
              ? "27年来，我们见证了中国制造的崛起，也经历了从OEM代工到自主品牌的蜕变。今天的DG，已经成为全球领先的商业空间展示解决方案提供商，产品遍布世界各地的奢侈珠宝店、高端零售空间和知名博物馆。"
              : "For over 27 years, we have witnessed the rise of Chinese manufacturing and undergone our own transformation from OEM to an independent brand. Today, DG has become a globally leading provider of commercial space display solutions, with products in luxury jewelry stores, high-end retail spaces, and renowned museums around the world."}
          </p>
          <p>
            {locale === "zh"
              ? "我们深知，在奢侈零售的世界里，展柜不仅仅是容器——它是品牌与顾客之间第一个物理接触点，是信任的载体，是品牌故事的舞台。正是这份理解，驱动着我们27年来不断精进工艺、创新设计、完善服务。"
              : "We understand that in the world of luxury retail, a showcase is more than just a container — it is the first physical touchpoint between brand and customer, a carrier of trust, and a stage for brand storytelling. This understanding has driven us for 27 years to continuously refine our craftsmanship, innovate our designs, and perfect our services."}
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-12 space-y-8">
          {[
            {
              year: "1999",
              zh: "DG在广州成立，开始展示柜制造业务。",
              en: "DG founded in Guangzhou, beginning display showcase manufacturing.",
            },
            {
              year: "2005",
              zh: "建立首个独立制造中心，员工突破50人。",
              en: "Established first independent manufacturing center with over 50 employees.",
            },
            {
              year: "2010",
              zh: "通过ISO质量认证，开始拓展海外市场。",
              en: "Obtained ISO quality certification and began expanding into overseas markets.",
            },
            {
              year: "2015",
              zh: "制造中心扩建至190,000平方英尺，引进自动化生产线。",
              en: "Manufacturing center expanded to 190,000 sq ft with automated production lines.",
            },
            {
              year: "2020",
              zh: "建成年产200+定制项目的产能，服务全球品牌客户。",
              en: "Achieved capacity for 200+ custom projects annually, serving global brand clients.",
            },
            {
              year: "2024",
              zh: "全面升级品牌战略，以'精工打造的品牌提升'为核心理念。",
              en: "Comprehensive brand strategy upgrade with 'Precision-Crafted Brand Elevation' as core philosophy.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="text-gold font-bold text-lg w-16 shrink-0">
                {item.year}
              </div>
              <div className="flex-1 border-l-2 border-gold/30 pl-6 pb-4">
                <p className="text-muted-foreground">
                  {locale === "zh" ? item.zh : item.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
