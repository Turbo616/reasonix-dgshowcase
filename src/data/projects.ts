export interface Project {
  id: string;
  title: string;
  titleZh: string;
  category: string;
  description: string;
  descriptionZh: string;
  challenge: string;
  challengeZh: string;
  solution: string;
  solutionZh: string;
  result: string;
  resultZh: string;
  images: string[];
  tags: string[];
  date: string;
}

export const projects: Project[] = [
  {
    id: "french-jewelry-watch-brand-store",
    title: "French High End Jewelry And Watch Brand Store Display Design",
    titleZh: "法国高端珠宝腕表品牌店面展示设计",
    category: "jewelry",
    description:
      "To address the challenge of balancing luxury ambiance with product security in high-end jewelry retail, we implemented customized glass showcases with integrated lighting and discreet anti-theft features.",
    descriptionZh:
      "为解决高端珠宝零售中奢华氛围与产品安全之间的平衡挑战，我们实施了集成照明和隐蔽防盗功能的定制玻璃展柜方案。",
    challenge:
      "The client needed to maintain an open, luxurious atmosphere while ensuring the security of high-value items. Traditional security measures often detracted from the customer experience.",
    challengeZh:
      "客户需要在保持开放奢华氛围的同时确保高价值物品的安全。传统安保措施往往会削弱客户体验。",
    solution:
      "Customized glass showcases with integrated LED lighting and discreet anti-theft features. Carefully selected materials and brand-aligned color schemes maintain visual harmony, preventing the displays from overshadowing the products themselves.",
    solutionZh:
      "定制玻璃展柜配备集成LED照明和隐蔽防盗功能。精心挑选的材料和与品牌一致的配色方案保持视觉和谐，防止展柜喧宾夺主。",
    result:
      "This display showcase solution creates a trusted environment that attracts high-net-worth clients and increases conversion rates.",
    resultZh:
      "该展示方案创造了值得信赖的环境，吸引高净值客户并提高了转化率。",
    images: [
      "https://img.yfisher.com/m43017/1777431080266-750-5/jpg100-t3-scale100.webp",
      "https://img.yfisher.com/m43017/1777431078763-750-4/jpg100-t3-scale100.webp",
      "https://img.yfisher.com/m43017/1777431077244-750-3/jpg100-t3-scale100.webp",
    ],
    tags: ["jewelry", "watch", "luxury"],
    date: "2024-12",
  },
  {
    id: "old-store-modular-upgrade",
    title: "Old Store Build-Out Design | Custom Modular Showcases For Luxury Retail",
    titleZh: "老店改造设计 | 奢侈零售定制模块化展柜",
    category: "renovation",
    description:
      "Facing outdated stores and declining appeal, this multi-brand jewelry and watch retailer chose DG for a complete transformation. Centered on modular showcases and intelligent lighting systems, we redefined the customer experience.",
    descriptionZh:
      "面对陈旧店铺和不断下降的吸引力，这家多品牌珠宝腕表零售商选择DG进行全面改造。以模块化展柜和智能照明系统为核心，我们重新定义了客户体验。",
    challenge:
      "Multiple stores were outdated with declining foot traffic and conversion rates. The brand needed a unified yet flexible solution across different store sizes and layouts.",
    challengeZh:
      "多家门店陈旧，客流量和转化率持续下降。品牌需要一种在不同门店规模和布局中统一又灵活的解决方案。",
    solution:
      "Modular showcase system with standardized core modules that can be configured for any store layout. Intelligent lighting systems with scene presets for different times of day and product categories.",
    solutionZh:
      "模块化展柜系统，标准化核心模块可适配任何店铺布局。智能照明系统支持不同时段和产品品类的场景预设。",
    result:
      "The renewed space significantly increased shopper dwell time and conversion, elevating the brand from merely 'seen' to truly 'remembered.'",
    resultZh:
      "焕新的空间显著提升了购物者停留时间和转化率，将品牌从仅仅'被看到'提升为真正'被记住'。",
    images: [
      "https://img.yfisher.com/m43017/1780048829162-750-5/jpg100-t3-scale100.webp",
      "https://img.yfisher.com/m43017/1780048827497-750-4/jpg100-t3-scale100.webp",
      "https://img.yfisher.com/m43017/1780048825792-750-3/jpg100-t3-scale100.webp",
    ],
    tags: ["renovation", "modular", "retail"],
    date: "2025-01",
  },
  {
    id: "high-end-perfume-brand-upgrade",
    title: "High-End Perfume Brand Upgrade Solution | Custom Display Cabinet",
    titleZh: "高端香水品牌升级方案 | 定制展示柜",
    category: "perfume",
    description:
      "In a competitive market, traditional displays fell short of this brand's premium image and experience standards. DG created exclusive showcases aligned with the brand's identity, using tailored materials and precision lighting.",
    descriptionZh:
      "在竞争激烈的市场中，传统展示柜无法满足该品牌的高端形象和体验标准。DG打造了与品牌身份一致的专属展柜，采用定制材料和精准照明。",
    challenge:
      "The existing display solutions failed to communicate the brand's luxury positioning. The perfume display area lacked sensory engagement and visual impact.",
    challengeZh:
      "现有展示方案未能传达品牌的奢侈定位。香水展示区缺乏感官互动和视觉冲击力。",
    solution:
      "Exclusive showcases aligned with brand identity, using tailored materials and precision lighting to enhance luxury perception and emotional engagement.",
    solutionZh:
      "与品牌身份一致的专属展柜，运用定制材料和精准照明，增强奢侈感知和情感连接。",
    result:
      "The transformation turned brand storytelling into an immersive visual and sensory experience—strengthening influence and increasing sales conversions.",
    resultZh:
      "这次改造将品牌叙事转化为沉浸式视觉和感官体验——强化了品牌影响力并提升了销售转化。",
    images: [
      "https://img.yfisher.com/m43017/1780047203469-750-5/jpg100-t3-scale100.webp",
      "https://img.yfisher.com/m43017/1780049824763-750-1/jpg100-t3-scale100.webp",
      "https://img.yfisher.com/m43017/1780047200499-750-3/jpg100-t3-scale100.webp",
    ],
    tags: ["perfume", "luxury", "branding"],
    date: "2025-02",
  },
  {
    id: "modular-showcase-system-retail",
    title: "Modular Showcase System Design for Luxury Retail Brands",
    titleZh: "奢侈零售品牌模块化展柜系统设计",
    category: "retail",
    description:
      "Moving beyond traditional displays, our modular systems and scenographic storytelling form dynamic brand spaces that can be continually updated, constantly elevating brand value.",
    descriptionZh:
      "超越传统展示，我们的模块化系统和场景化叙事形成可不断更新的动态品牌空间，持续提升品牌价值。",
    challenge:
      "Luxury retail brands need to refresh their store displays frequently to keep up with seasonal collections and trends, but traditional custom showcases are expensive and time-consuming to replace.",
    challengeZh:
      "奢侈零售品牌需要频繁更新店铺展示以跟上季节性系列和潮流，但传统定制展柜更换成本高、周期长。",
    solution:
      "A modular system with interchangeable components, allowing brands to reconfigure displays without full replacement. Integrated smart lighting can be reprogrammed for different collections.",
    solutionZh:
      "模块化系统配备可互换组件，允许品牌重新配置展示而无需完全更换。集成智能照明可为不同系列重新编程。",
    result:
      "Reduced display update costs by 60% while enabling seasonal refreshes in under 48 hours. Enhanced brand agility and customer engagement.",
    resultZh:
      "展示更新成本降低60%，同时支持48小时内完成季节性更新。提升了品牌敏捷性和客户参与度。",
    images: [
      "https://img.yfisher.com/m43017/1777429174791-750-5/jpg100-t3-scale100.webp",
      "https://img.yfisher.com/m43017/1777429172932-750-4/jpg100-t3-scale100.webp",
    ],
    tags: ["modular", "retail", "innovation"],
    date: "2025-03",
  },
  {
    id: "museum-climate-display-project",
    title: "Museum Climate-Controlled Display Case for Cultural Heritage",
    titleZh: "博物馆文化遗产恒温恒湿展柜项目",
    category: "museum",
    description:
      "A prestigious museum required climate-controlled display cases to preserve delicate artifacts while maintaining an engaging visitor experience. We delivered a solution that balanced conservation and exhibition.",
    descriptionZh:
      "一家知名博物馆需要恒温恒湿展柜来保存珍贵文物，同时保持引人入胜的参观体验。我们提供了兼顾保护与展示的解决方案。",
    challenge:
      "Artifacts required strict temperature (20°C ±0.5°C) and humidity (50% ±3%) control, UV-free lighting below 50 lux, and seismic protection — all while remaining visually stunning.",
    challengeZh:
      "文物需要严格的温度（20°C ±0.5°C）和湿度（50% ±3%）控制、低于50 lux的无紫外照明和抗震保护——同时必须保持视觉震撼。",
    solution:
      "Active climate control system with HEPA filtration, fiber optic lighting below 50 lux, low-iron laminated safety glass, and seismic base isolation — all integrated into minimalist frameless vitrines.",
    solutionZh:
      "主动气候控制系统配备HEPA过滤、低于50 lux的光纤照明、超白夹层安全玻璃和抗震基座隔离——全部整合在极简无框展柜中。",
    result:
      "Successfully preserved over 200 artifacts while increasing visitor engagement scores by 35%. The museum has since commissioned additional cases.",
    resultZh:
      "成功保护200多件文物，同时游客参与度评分提升35%。博物馆随后追加订购了更多展柜。",
    images: [
      "https://img.yfisher.com/m43017/1780046067114-750-5/jpg100-t3-scale100.webp",
      "https://img.yfisher.com/m43017/1780046065533-750-4/jpg100-t3-scale100.webp",
      "https://img.yfisher.com/m43017/1780046063963-750-3/jpg100-t3-scale100.webp",
    ],
    tags: ["museum", "conservation", "innovation"],
    date: "2025-04",
  },
  {
    id: "luxury-watch-boutique-interior",
    title: "Luxury Watch Boutique Full Store Interior & Display Solution",
    titleZh: "奢侈手表精品店全店内装与展示解决方案",
    category: "watch",
    description:
      "A new luxury watch boutique needed a complete store design and display solution that matched the prestige of their timepieces. DG delivered a turnkey project from design to installation.",
    descriptionZh:
      "一家新奢侈手表精品店需要与其手表声望匹配的全面店面设计和展示方案。DG提供了从设计到安装的一站式项目交付。",
    challenge:
      "The 200 sqm flagship store needed to showcase 4 watch brands with distinct identities while maintaining a cohesive luxury atmosphere. Individual watch presentation with security was critical.",
    challengeZh:
      "200平方米旗舰店需要展示4个不同身份的手表品牌，同时保持统一的奢华氛围。每只手表的独立展示与安全保障至关重要。",
    solution:
      "Custom watch front showcases with individual LED spots, RFID security locks, microfiber lining, and humidity control. Brand zones subtly differentiated through material palette and lighting temperature.",
    solutionZh:
      "定制手表前柜展柜配备独立LED射灯、RFID安全锁、超细纤维内衬和湿度控制。通过材质调色板和照明色温微妙区分各品牌区域。",
    result:
      "Grand opening exceeded sales targets by 40%. The store has become the brand's highest-performing location in the region.",
    resultZh:
      "开业首月销售额超出目标40%。该店已成为品牌在该地区表现最佳的门店。",
    images: [
      "https://img.yfisher.com/m43017/1776498166522-750-5/jpg100-t3-scale100.webp",
      "https://img.yfisher.com/m43017/1776498163511-750-4/jpg100-t3-scale100.webp",
    ],
    tags: ["watch", "luxury", "flagship"],
    date: "2025-05",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
