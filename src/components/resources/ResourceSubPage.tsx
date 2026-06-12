import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Star, Calendar, BookOpen, Newspaper } from "lucide-react";

export const resourceContent: Record<
  string,
  {
    titleZh: string;
    titleEn: string;
    icon: React.ReactNode;
  }
> = {
  expertise: {
    titleZh: "专业知识",
    titleEn: "Expertise",
    icon: <BookOpen className="h-8 w-8" />,
  },
  testimonial: {
    titleZh: "客户评价",
    titleEn: "Testimonials",
    icon: <Star className="h-8 w-8" />,
  },
  exhibition: {
    titleZh: "展会活动",
    titleEn: "Exhibitions",
    icon: <Calendar className="h-8 w-8" />,
  },
  news: {
    titleZh: "公司新闻",
    titleEn: "Company News",
    icon: <Newspaper className="h-8 w-8" />,
  },
  articles: {
    titleZh: "行业文章",
    titleEn: "Industry Articles",
    icon: <BookOpen className="h-8 w-8" />,
  },
};

const testimonialData = [
  {
    name: "Jean-Pierre L.",
    company: "French Luxury Jewelry Brand",
    zh: "与DG展示柜合作是我们品牌升级过程中的最佳决策之一。他们的设计团队深刻理解奢侈珠宝零售的需求，从灯光设计到材质选择，每个细节都经过精心考量。最终交付的展柜不仅完美呈现了我们的产品，更提升了整个店铺的品牌形象。",
    en: "Working with DG Display Showcase was one of the best decisions in our brand upgrade journey. Their design team deeply understands the needs of luxury jewelry retail — from lighting design to material selection, every detail was carefully considered. The final showcases not only perfectly presented our products but elevated the entire store's brand image.",
    rating: 5,
  },
  {
    name: "Dr. Maria S.",
    company: "European National Museum",
    zh: "作为一家国家博物馆，我们对展柜的技术要求非常高。DG展示柜的恒温恒湿系统精确可靠，光纤照明方案完美满足了我们≤50 lux的文物保护要求。从设计到安装，整个团队都展现出极高的专业素养。",
    en: "As a national museum, our technical requirements for display cases are extremely high. DG's climate control system is precise and reliable, and their fiber optic lighting solution perfectly meets our ≤50 lux conservation requirements. From design to installation, the entire team demonstrated exceptional professionalism.",
    rating: 5,
  },
  {
    name: "Ahmed R.",
    company: "Middle East Luxury Watch Retailer",
    zh: "我们在中东地区有5家门店需要更新展柜。DG展示柜的模块化方案让我们能够统一品牌形象的同时适应不同店铺的布局。RFID安全系统和独立LED射灯让每一只手表都得到最佳展示。",
    en: "We had 5 stores across the Middle East that needed showcase upgrades. DG's modular solution allowed us to unify our brand image while adapting to different store layouts. The RFID security system and individual LED spots ensure every watch receives optimal presentation.",
    rating: 5,
  },
  {
    name: "Sophie C.",
    company: "International Perfume Brand",
    zh: "香水零售是关于感官体验的艺术。DG展示柜的设计团队完美地理解了这一点——他们创造的展示空间不仅仅展示产品，更讲述品牌故事。背光亚克力面板和集成香氛扩散器让我们的香水墙成为店内的视觉焦点。",
    en: "Perfume retail is an art of sensory experience. DG's design team understood this perfectly — the display spaces they created don't just showcase products, they tell brand stories. The backlit acrylic panels and integrated scent diffuser made our perfume wall the visual centerpiece of the store.",
    rating: 5,
  },
];

const exhibitionData = [
  {
    name: "JCK Las Vegas 2025",
    date: "2025-06-06",
    location: "Las Vegas, USA",
    zh: "全球最大的珠宝行业展会之一。DG展示柜在此展示最新的珠宝和手表展柜设计，与来自全球的珠宝品牌和零售商交流合作。",
    en: "One of the largest jewelry industry trade shows globally. DG Display Showcase exhibited the latest jewelry and watch showcase designs, connecting with jewelry brands and retailers from around the world.",
  },
  {
    name: "Hong Kong Jewelry & Gem Fair",
    date: "2025-03-02",
    location: "Hong Kong",
    zh: "亚洲领先的珠宝展会。DG展示了面向亚太市场的定制展柜方案，包括适用于小型精品店的模块化展示系统。",
    en: "Asia's leading jewelry fair. DG presented customized showcase solutions for the Asia-Pacific market, including modular display systems ideal for boutique stores.",
  },
  {
    name: "Vicenzaoro 2025",
    date: "2025-01-17",
    location: "Vicenza, Italy",
    zh: "意大利顶级珠宝展会。DG在展会上发布了全新的意大利风格珠宝展柜系列，受到欧洲高端珠宝品牌的热烈关注。",
    en: "Italy's premier jewelry exhibition. DG launched a new Italian-inspired jewelry showcase collection at the show, receiving enthusiastic attention from European high-end jewelry brands.",
  },
  {
    name: "Milano Design Week 2025",
    date: "2025-04-08",
    location: "Milan, Italy",
    zh: "全球设计界的年度盛事。DG展示柜作为商业空间设计领域的代表参展，展示了将展示柜设计融入整体空间美学的理念。",
    en: "The annual highlight of the global design world. DG Display Showcase exhibited as a representative of commercial space design, showcasing the concept of integrating showcase design into overall spatial aesthetics.",
  },
];

const newsData = [
  {
    title: "Ecological Luxury Initiative: DG's Commitment to Low-Carbon Practices in Sustainable Luxury Retail",
    date: "2025-05-20",
    zh: "DG展示柜正式启动'生态奢华'计划，全面推行低碳生产工艺。该计划涵盖从原材料采购、生产制造到物流运输的全链条碳排放管理。新引入的太阳能供电系统和智能能源管理系统预计每年减少碳排放300吨。",
    en: "DG Display Showcase officially launches the 'Ecological Luxury' initiative, comprehensively implementing low-carbon production processes. The initiative covers full-chain carbon emission management from raw material procurement and manufacturing to logistics. The newly introduced solar power system and smart energy management system are expected to reduce carbon emissions by 300 tons annually.",
  },
  {
    title: "DG Display Showcase Q1 Recognition Ceremony Successfully Concluded",
    date: "2025-04-15",
    zh: "DG展示柜2025年第一季度表彰大会圆满举行。大会表彰了在生产、设计、销售和客户服务方面表现卓越的员工和团队。本季度共完成58个定制项目，客户满意度达到98.5%。",
    en: "DG Display Showcase's Q1 2025 Recognition Ceremony was successfully held. The ceremony honored employees and teams with outstanding performance in production, design, sales, and customer service. A total of 58 custom projects were completed this quarter with a customer satisfaction rate of 98.5%.",
  },
  {
    title: "Craftsmanship Beyond Excellence: How DG Display Showcase Creates Luxurious Experiences",
    date: "2025-03-28",
    zh: "在奢侈零售领域，展柜不仅是功能性的容器，更是品牌价值的延伸。本文深入探讨了DG展示柜如何通过材料工艺、光学设计和空间规划三大维度，为奢侈品牌创造超越期望的展示体验。",
    en: "In the luxury retail sector, a showcase is not merely a functional container but an extension of brand value. This article explores how DG Display Showcase creates display experiences that exceed expectations through three dimensions: material craftsmanship, optical design, and spatial planning.",
  },
  {
    title: "DG Builds Global Secure Delivery System for High-End Showcases",
    date: "2025-02-10",
    zh: "DG展示柜宣布建成全球安全交付体系，覆盖北美、欧洲、中东、东南亚和非洲等主要市场。该体系包括专业包装方案、多式联运物流网络和海外安装团队，确保高端展柜安全、准时地送达全球客户。",
    en: "DG Display Showcase announces the completion of its global secure delivery system, covering major markets in North America, Europe, the Middle East, Southeast Asia, and Africa. The system includes professional packaging solutions, multi-modal logistics networks, and overseas installation teams.",
  },
];

const articleData = [
  {
    title: "Jewelry Store Display Design Trends 2025",
    date: "2025-05-10",
    zh: "2025年珠宝店铺展示设计正在经历显著变革。本文分析了六大趋势：可持续材料的广泛应用、智能照明的个性化定制、模块化设计的灵活性、体验式空间的兴起、数字化技术的融合以及极简主义美学的回归。",
    en: "Jewelry store display design in 2025 is undergoing significant transformation. This article analyzes six trends: widespread use of sustainable materials, personalized smart lighting, modular design flexibility, the rise of experiential spaces, digital technology integration, and the return of minimalist aesthetics.",
  },
  {
    title: "The Art of Perfume Retail: Creating Sensory Experiences Through Display Design",
    date: "2025-04-20",
    zh: "香水零售的独特之处在于它关乎嗅觉和视觉的双重体验。本文探讨如何通过展示柜设计将香氛叙事转化为沉浸式的感官旅程，包括色彩心理学在展柜设计中的应用、灯光如何影响香水感知、以及空间动线如何引导客户探索不同香调。",
    en: "The uniqueness of perfume retail lies in its dual olfactory and visual experience. This article explores how to transform fragrance narratives into immersive sensory journeys through showcase design, including color psychology in display design, how lighting affects fragrance perception, and how spatial flow guides customers to explore different scent notes.",
  },
  {
    title: "Modern Museum Exhibition: Balancing Conservation and Display",
    date: "2025-03-15",
    zh: "博物馆展览面临的核心挑战是如何在保护文物的同时提供引人入胜的参观体验。本文讨论了恒温恒湿展柜的技术演进、低光照条件下的展示策略、以及极简设计如何减少展柜本身对文物的视觉干扰。",
    en: "The core challenge facing museum exhibitions is how to provide an engaging visitor experience while protecting artifacts. This article discusses the technological evolution of climate-controlled showcases, display strategies under low-light conditions, and how minimalist design reduces visual interference from the showcase itself.",
  },
  {
    title: "Why Global Luxury Brands Choose Custom Showcase Manufacturers in China",
    date: "2025-02-22",
    zh: "越来越多的国际奢侈品牌选择中国定制展柜制造商作为合作伙伴。本文分析了这一趋势背后的原因：成熟的制造产业链、不断提升的设计能力、快速响应的服务模式以及具有竞争力的成本优势。",
    en: "More and more international luxury brands are choosing Chinese custom showcase manufacturers as partners. This article analyzes the reasons behind this trend: mature manufacturing supply chains, continuously improving design capabilities, rapid response service models, and competitive cost advantages.",
  },
];

const expertiseData = {
  jewelry: {
    zhTitle: "珠宝专业知识",
    enTitle: "Jewelry Expertise",
    zh: "珠宝展示不仅仅是陈列产品，更是讲述品牌故事的艺术。在珠宝零售中，灯光的色温和亮度直接影响钻石的火彩和宝石的色彩表现。我们的设计团队精通4C钻石分级标准和各类宝石的光学特性，能够根据每件珠宝的特点量身定制照明方案。\n\n珠宝展柜的安全性是另一个核心考量。我们采用多层次安全设计，包括防砸钢化玻璃、隐蔽式RFID电子锁和后台监控系统接口，确保高价值珠宝在展示的同时得到充分保护。",
    en: "Jewelry display is not just about showcasing products — it is the art of telling brand stories. In jewelry retail, the color temperature and brightness of lighting directly affect the brilliance of diamonds and the color performance of gemstones. Our design team is well-versed in the 4C diamond grading standards and the optical characteristics of various gemstones.\n\nJewelry showcase security is another core consideration. We employ multi-layered security design, including impact-resistant tempered glass, concealed RFID electronic locks, and backend monitoring system interfaces, ensuring high-value jewelry is fully protected while on display.",
  },
  perfume: {
    zhTitle: "香水专业知识",
    enTitle: "Perfume Expertise",
    zh: "香水零售是一门关于感官营销的科学。研究表明，合适的氛围光线可以将客户停留时间延长40%，而精心设计的展示布局能提升30%的购买转化率。\n\n我们的香水展柜设计融合了色彩心理学和环境行为学原理。背光亚克力面板可以创造出引人注目的品牌视觉焦点，而集成香氛扩散系统则能强化品牌特有的气味标识。我们还特别注重留出足够的试香空间，让客户能够舒适地进行产品体验。",
    en: "Perfume retail is a science of sensory marketing. Research shows that appropriate ambient lighting can extend customer dwell time by 40%, while carefully designed display layouts can increase purchase conversion rates by 30%.\n\nOur perfume showcase design integrates color psychology and environmental behavior principles. Backlit acrylic panels create striking brand visual focal points, while integrated scent diffusion systems reinforce brand-specific olfactory signatures. We also pay special attention to creating ample testing spaces for comfortable product experience.",
  },
  museum: {
    zhTitle: "博物馆专业知识",
    enTitle: "Museum Expertise",
    zh: "博物馆展柜设计与商业展示有着本质的区别。在博物馆环境中，展柜的首要任务是保护文物，其次才是展示。我们严格遵循国际博物馆协会（ICOM）的文物保存标准，提供符合不同文物类型需求的定制化气候控制系统。\n\n我们的博物馆展柜可达到±0.5°C的温度精度和±3%的相对湿度控制，配备HEPA H14级空气过滤系统。照明方面，我们使用低于50 lux的光纤照明和紫外过滤技术，确保对光敏感文物（如纺织品、纸质文献、照片等）的长期安全保存。",
    en: "Museum showcase design is fundamentally different from commercial display. In a museum environment, the primary role of a showcase is artifact preservation, with display being secondary. We strictly follow ICOM (International Council of Museums) conservation standards, providing customized climate control systems tailored to different artifact types.\n\nOur museum showcases achieve ±0.5°C temperature precision and ±3% relative humidity control, equipped with HEPA H14-grade air filtration. For lighting, we use sub-50 lux fiber optic illumination with UV filtration, ensuring long-term preservation of light-sensitive artifacts such as textiles, paper documents, and photographs.",
  },
};

export function ResourceSubPageContent({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  const meta = resourceContent[slug];
  if (!meta) return null;

  const zh = locale === "zh";
  const title = zh ? meta.titleZh : meta.titleEn;

  return (
    <div className="container-page section-padding max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="text-muted-foreground leading-relaxed">
        {slug === "expertise" && <ExpertiseContent zh={zh} />}
        {slug === "testimonial" && <TestimonialContent zh={zh} />}
        {slug === "exhibition" && <ExhibitionContent zh={zh} />}
        {slug === "news" && <NewsContent zh={zh} />}
        {slug === "articles" && <ArticleContent zh={zh} />}
      </div>
    </div>
  );
}

function ExpertiseContent({ zh }: { zh: boolean }) {
  return (
    <div className="space-y-10">
      {(["jewelry", "perfume", "museum"] as const).map((key) => (
        <Card key={key} className="bg-card/50 border-border p-6">
          <h2 className="text-xl font-bold text-gold mb-4">
            {zh ? expertiseData[key].zhTitle : expertiseData[key].enTitle}
          </h2>
          {(zh ? expertiseData[key].zh : expertiseData[key].en)
            .split("\n\n")
            .filter(Boolean)
            .map((p, i) => (
              <p key={i} className="mb-3">
                {p}
              </p>
            ))}
        </Card>
      ))}
    </div>
  );
}

function TestimonialContent({ zh }: { zh: boolean }) {
  return (
    <div className="space-y-6">
      {testimonialData.map((t, i) => (
        <Card key={i} className="bg-card/50 border-border p-6">
          <div className="flex items-center gap-2 mb-3">
            {Array.from({ length: t.rating }).map((_, j) => (
              <Star key={j} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-muted-foreground mb-4">{zh ? t.zh : t.en}</p>
          <div className="border-t border-border pt-3">
            <p className="font-semibold text-sm">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.company}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

function ExhibitionContent({ zh }: { zh: boolean }) {
  return (
    <div className="space-y-4">
      {exhibitionData.map((e, i) => (
        <Card key={i} className="bg-card/50 border-border p-5 flex gap-4">
          <div className="w-20 shrink-0 text-center">
            <p className="text-gold font-bold text-lg">
              {new Date(e.date).getDate()}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(e.date).toLocaleDateString("en", { month: "short", year: "numeric" })}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">{e.name}</h3>
            <p className="text-xs text-gold mb-2">{e.location}</p>
            <p className="text-sm text-muted-foreground">{zh ? e.zh : e.en}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}

function NewsContent({ zh }: { zh: boolean }) {
  return (
    <div className="space-y-6">
      {newsData.map((n, i) => (
        <Card key={i} className="bg-card/50 border-border p-6">
          <p className="text-xs text-gold mb-2">{n.date}</p>
          <h2 className="text-lg font-bold mb-3">{n.title}</h2>
          <p className="text-muted-foreground text-sm">{zh ? n.zh : n.en}</p>
        </Card>
      ))}
    </div>
  );
}

function ArticleContent({ zh }: { zh: boolean }) {
  return (
    <div className="space-y-6">
      {articleData.map((a, i) => (
        <Card key={i} className="bg-card/50 border-border p-6">
          <p className="text-xs text-gold mb-2">{a.date}</p>
          <h2 className="text-lg font-bold mb-3">{a.title}</h2>
          <p className="text-muted-foreground text-sm">{zh ? a.zh : a.en}</p>
        </Card>
      ))}
    </div>
  );
}
