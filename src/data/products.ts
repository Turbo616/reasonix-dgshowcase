export interface Product {
  id: string;
  name: string;
  nameZh: string;
  category: string;
  description: string;
  descriptionZh: string;
  features: string[];
  featuresZh: string[];
  specs: { label: string; labelZh: string; value: string }[];
  images: string[]; // real image URLs from degreefurniture.com CDN
  highlight: boolean;
  tags: string[];
}

export const productCategories = [
  { key: "jewelry", label: "Jewelry Showcase", labelZh: "珠宝展柜" },
  { key: "watch", label: "Watch Showcase", labelZh: "手表展柜" },
  { key: "perfume", label: "Perfume Showcase", labelZh: "香水展柜" },
  { key: "museum", label: "Museum Showcase", labelZh: "博物馆展柜" },
  { key: "luxury", label: "Luxury Showcase", labelZh: "奢侈品展柜" },
  { key: "optical", label: "Optical Showcase", labelZh: "眼镜展柜" },
  { key: "vip-furniture", label: "VIP Room Furniture", labelZh: "贵宾室家具" },
  { key: "display-props", label: "Jewelry Display Props", labelZh: "珠宝陈列道具" },
];

// Image CDN base: https://img.yfisher.com/m43017/
const img = (path: string) => `https://img.yfisher.com/m43017/${path}`;

export const products: Product[] = [
  // ========== JEWELRY SHOWCASE ==========
  {
    id: "custom-luxury-jewelry-front-display",
    name: "DG Custom Luxury Jewelry Front Display Showcase",
    nameZh: "DG定制奢华珠宝前柜展柜",
    category: "jewelry",
    description:
      "DG's asymmetrical luxury jewelry front showcase combines display and consultation in a minimalist French-inspired design with ultra-slim glass framing to enhance visual impact and elevate the brand's in-store experience. Features 'high-low offset' layout — left side for main display, right side extends into a consultation tabletop.",
    descriptionZh:
      "DG非对称奢华珠宝前柜，融合展示与咨询功能，采用极简法式设计，超薄玻璃框架增强视觉冲击力，提升品牌店内体验。采用'高低错落'布局——左侧主展示区，右侧延伸为咨询台面。",
    features: [
      "Asymmetrical high-low offset design",
      "Ultra-slim glass framing for maximum transparency",
      "Built-in LED lighting system",
      "Stainless steel seamless welding",
      "Free design + installation instruction",
    ],
    featuresZh: [
      "非对称高低错落设计",
      "超薄玻璃框架最大化透明度",
      "内置LED照明系统",
      "不锈钢无缝焊接工艺",
      "免费设计+安装指导",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "MDF baking finish, wood veneer, stainless steel, glass, marble" },
      { label: "Brand", labelZh: "品牌", value: "DG Master of Display Showcase" },
      { label: "Design Team", labelZh: "设计团队", value: "12 professional designers (space, R&D, lighting, soft fitting, display)" },
      { label: "Shipping", labelZh: "运输", value: "By sea, air, railway" },
      { label: "Package", labelZh: "包装", value: "International fumigation-free standard export package" },
    ],
    images: [
      img("1777431021382-750-5/jpg100-t3-scale100.webp"),
      img("1777431019869-750-4/jpg100-t3-scale100.webp"),
      img("1777431018355-750-3/jpg100-t3-scale100.webp"),
      img("1777431016829-750-2/jpg100-t3-scale100.webp"),
      img("1777430992841-1200-1/jpg100-t3-scale100.webp"),
    ],
    highlight: true,
    tags: ["bestseller", "new"],
  },
  {
    id: "high-end-jewelry-island-display",
    name: "DG High-End Custom Jewelry Island Display Showcase",
    nameZh: "DG高端定制珠宝岛式展柜",
    category: "jewelry",
    description:
      "A bespoke high-end jewelry island display cabinet with ultra-clear tempered glass and refined detailing, designed to elevate luxury retail presentation. Features a premium baked lacquer finish, stainless steel anti-fingerprint hardware, and a vertical grille base with curved structural elements.",
    descriptionZh:
      "定制高端珠宝岛式展柜，采用超白钢化玻璃和精致细节，提升奢侈零售展示效果。配备高级烤漆饰面、不锈钢防指纹五金件以及带弧形结构元素的垂直格栅底座。",
    features: [
      "Ultra-clear tempered glass for exceptional transparency",
      "Premium baked lacquer finish — durable & refined",
      "Anti-fingerprint stainless steel hardware",
      "Curved structural elements with vertical grille base",
      "Integrated LED lighting system",
    ],
    featuresZh: [
      "超白钢化玻璃，卓越透明度",
      "高级烤漆饰面——耐用精致",
      "防指纹不锈钢五金件",
      "弧形结构+垂直格栅底座",
      "集成LED照明系统",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "MDF baking finish, wood veneer, stainless steel, glass, marble" },
      { label: "Using Places", labelZh: "适用场所", value: "Shopping mall, retail shop, showroom, duty-free shop, hotel, club" },
      { label: "Payment", labelZh: "付款方式", value: "TT, trade assurance, etc." },
      { label: "Service", labelZh: "服务", value: "Free design, installation instruction, after-sale service" },
    ],
    images: [
      img("1777431127791-750-5/jpg100-t3-scale100.webp"),
      img("1777431125935-750-4/jpg100-t3-scale100.webp"),
      img("1777431124430-750-3/jpg100-t3-scale100.webp"),
      img("1777431122937-750-2/jpg100-t3-scale100.webp"),
      img("1777431106601-1200-1/jpg100-t3-scale100.webp"),
    ],
    highlight: true,
    tags: ["bestseller", "featured"],
  },
  {
    id: "french-art-jewelry-watch-wall-cabinet",
    name: "DG French Light Luxury Art-Inspired Jewelry & Watch Display Wall Cabinet",
    nameZh: "DG法式轻奢艺术珠宝手表展示墙柜",
    category: "jewelry",
    description:
      "French-inspired light luxury wall cabinet designed for jewelry and watch display. Combines artistic aesthetics with functional display lighting, creating an elegant gallery-like atmosphere for high-end retail spaces. Perfect for boutiques seeking a distinctive visual identity.",
    descriptionZh:
      "法式轻奢风格墙柜，专为珠宝和手表展示设计。将艺术美学与功能性展示照明相结合，为高端零售空间营造优雅的画廊氛围。适合追求独特视觉标识的精品店。",
    features: [
      "French light luxury artistic design",
      "Integrated display lighting",
      "Wall-mounted space-saving design",
      "Premium materials and finishes",
      "Suitable for jewelry + watch dual display",
    ],
    featuresZh: [
      "法式轻奢艺术设计",
      "集成展示照明",
      "壁挂式节省空间设计",
      "高级材质与饰面",
      "适合珠宝+手表双重展示",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "MDF baking finish, stainless steel, tempered glass" },
      { label: "Design Style", labelZh: "设计风格", value: "French light luxury" },
      { label: "Installation", labelZh: "安装", value: "Wall-mounted" },
    ],
    images: [
      img("1777432231426-750-5/jpg100-t3-scale100.webp"),
      img("1777432224008-750-4/jpg100-t3-scale100.webp"),
      img("1777432215925-750-3/jpg100-t3-scale100.webp"),
      img("1777432201477-750-2/jpg100-t3-scale100.webp"),
      img("1777432182613-1200-1/jpg100-t3-scale100.webp"),
    ],
    highlight: true,
    tags: ["featured"],
  },
  {
    id: "minimalist-modern-jewelry-wall-display",
    name: "DG Minimalist Modern Jewelry Wall Display Showcase",
    nameZh: "DG极简现代珠宝壁挂展柜",
    category: "jewelry",
    description:
      "Clean minimalist wall display showcase designed for modern jewelry retail. Slim profile with maximum visual transparency, allowing products to take center stage. Features frameless glass design for uninterrupted viewing.",
    descriptionZh:
      "为现代珠宝零售设计的极简壁挂展柜。超薄轮廓配以最大视觉透明度，让产品成为视觉焦点。采用无框玻璃设计，实现无遮挡观赏。",
    features: [
      "Minimalist frameless design",
      "Slim wall-mounted profile",
      "Maximum visual transparency",
      "Built-in LED edge lighting",
    ],
    featuresZh: [
      "极简无框设计",
      "超薄壁挂式轮廓",
      "最大视觉透明度",
      "内置LED边缘照明",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Tempered glass + aluminum frame" },
      { label: "Lighting", labelZh: "照明", value: "LED edge-lit" },
    ],
    images: [
      img("1777429174791-750-5/jpg100-t3-scale100.webp"),
      img("1777429172932-750-4/jpg100-t3-scale100.webp"),
      img("1777429171497-750-3/jpg100-t3-scale100.webp"),
      img("1777429170026-750-2/jpg100-t3-scale100.webp"),
      img("1777429184806-1200-1/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: ["new"],
  },
  {
    id: "new-signature-jewelry-wall-display",
    name: "DG New Signature Aesthetic Jewelry Wall Display Showcase",
    nameZh: "DG新标志美学珠宝壁挂展柜",
    category: "jewelry",
    description:
      "DG's new signature aesthetic wall display showcase, featuring a distinctive design language that sets your store apart. Premium material combinations and thoughtful lighting create a unique brand atmosphere for luxury jewelry presentation.",
    descriptionZh:
      "DG全新标志性美学壁挂展柜，以独特设计语言让您的店铺脱颖而出。高级材质组合与精心设计的灯光营造独特的品牌氛围。",
    features: [
      "Signature aesthetic design language",
      "Premium multi-material construction",
      "Thoughtfully designed lighting",
      "Unique brand atmosphere",
    ],
    featuresZh: [
      "标志性美学设计语言",
      "高级多材质结构",
      "精心设计的照明",
      "独特品牌氛围",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Multi-material premium construction" },
      { label: "Style", labelZh: "风格", value: "Signature aesthetic" },
    ],
    images: [
      img("1777429133306-750-5/jpg100-t3-scale100.webp"),
      img("1777429131850-750-4/jpg100-t3-scale100.webp"),
      img("1777429130366-750-3/jpg100-t3-scale100.webp"),
      img("1777429128894-750-2/jpg100-t3-scale100.webp"),
      img("1777429144558-1200-1/jpg100-t3-scale100.webp"),
    ],
    highlight: true,
    tags: ["new", "featured"],
  },
  {
    id: "minimalist-luxury-built-in-jewelry",
    name: "DG Minimalist Luxury Built-in Jewelry Showcase",
    nameZh: "DG极简奢华嵌入式珠宝展柜",
    category: "jewelry",
    description:
      "Built-in luxury jewelry showcase with a minimalist aesthetic. Designed to integrate seamlessly into store interiors, creating a clean and sophisticated display environment. Features recessed lighting and hidden hardware for a floating effect.",
    descriptionZh:
      "嵌入式奢华珠宝展柜，极简美学。设计融入店面内饰，营造干净精致的展示环境。采用嵌入式照明和隐藏五金件，呈现悬浮效果。",
    features: [
      "Built-in seamless integration",
      "Recessed hidden lighting",
      "Hidden hardware — floating effect",
      "Minimalist luxury aesthetic",
      "Custom sizing available",
    ],
    featuresZh: [
      "嵌入无缝集成",
      "嵌入式隐藏照明",
      "隐藏五金——悬浮效果",
      "极简奢华美学",
      "支持定制尺寸",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "MDF baking finish, stainless steel, glass" },
      { label: "Installation", labelZh: "安装", value: "Built-in / recessed" },
    ],
    images: [
      img("1777429070134-750-5/jpg100-t3-scale100.webp"),
      img("1777429068477-750-4/jpg100-t3-scale100.webp"),
      img("1777429066652-750-3/jpg100-t3-scale100.webp"),
      img("1777429065008-750-2/jpg100-t3-scale100.webp"),
      img("1777429085123-1200-1/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: [],
  },
  {
    id: "exquisite-jewelry-watch-front-display",
    name: "DG All-New Exquisite Jewelry & Watch Front Display Showcase",
    nameZh: "DG全新精致珠宝手表前柜展柜",
    category: "jewelry",
    description:
      "DG's latest front display showcase designed for both jewelry and watches. Features refined detailing, premium glass, and smart lighting to present luxury items at their best. Suitable for high-end jewelry and watch boutiques.",
    descriptionZh:
      "DG最新前柜展柜，兼顾珠宝和手表展示。精致细节、高级玻璃和智能照明以最佳方式呈现奢侈品。适合高端珠宝和手表精品店。",
    features: [
      "Dual-purpose jewelry + watch display",
      "Smart adjustable lighting system",
      "Premium ultra-clear glass",
      "Refined craftsmanship detailing",
    ],
    featuresZh: [
      "珠宝+手表双重展示",
      "智能可调照明系统",
      "高级超白玻璃",
      "精致工艺细节",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "MDF baking, stainless steel, ultra-clear tempered glass" },
      { label: "Lighting", labelZh: "照明", value: "Smart adjustable LED" },
    ],
    images: [
      img("1776498166522-750-5/jpg100-t3-scale100.webp"),
      img("1776498163511-750-4/jpg100-t3-scale100.webp"),
      img("1776498160708-750-3/jpg100-t3-scale100.webp"),
      img("1776498158433-750-2/jpg100-t3-scale100.webp"),
      img("1776498180656-1200-1/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: ["new"],
  },
  {
    id: "unique-design-high-end-jewelry-island",
    name: "DG Unique Design High-End Jewelry Island Showcase",
    nameZh: "DG独特设计高端珠宝岛式展柜",
    category: "jewelry",
    description:
      "A uniquely designed high-end jewelry island showcase with distinctive styling. Features curved glass elements and premium material combinations to create a focal point in any luxury retail space.",
    descriptionZh:
      "独特设计的高端珠宝岛式展柜，造型独特。弧形玻璃元素和高级材质组合，在任何奢侈零售空间中都成为视觉焦点。",
    features: [
      "Unique distinctive styling",
      "Curved glass elements",
      "Premium material combinations",
      "360° product visibility",
    ],
    featuresZh: [
      "独特造型设计",
      "弧形玻璃元素",
      "高级材质组合",
      "360°产品可视",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Stainless steel, tempered curved glass, MDF" },
      { label: "Design", labelZh: "设计", value: "Unique signature design" },
    ],
    images: [
      img("1776498116673-750-5/jpg100-t3-scale100.webp"),
      img("1776498114891-750-4/jpg100-t3-scale100.webp"),
      img("1776498113285-750-3/jpg100-t3-scale100.webp"),
      img("1776498111365-750-2/jpg100-t3-scale100.webp"),
      img("1776498128025-1200-1/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: ["featured"],
  },

  // ========== WATCH SHOWCASE ==========
  {
    id: "light-luxury-vintage-watch-counter",
    name: "DG Light Luxury Vintage Jewelry & Watch Display Counter",
    nameZh: "DG轻奢复古珠宝手表展示柜台",
    category: "watch",
    description:
      "Light luxury vintage-style display counter designed for jewelry and watch boutiques. Combines classic vintage aesthetics with modern display technology. Features warm tone lighting and elegant glass cabinetry.",
    descriptionZh:
      "轻奢复古风格展示柜台，专为珠宝手表精品店设计。将经典复古美学与现代展示技术相结合。暖色调照明和优雅玻璃柜体。",
    features: [
      "Vintage light luxury design",
      "Warm tone LED lighting",
      "Dual jewelry + watch display",
      "Elegant glass cabinetry",
      "Ample storage space",
    ],
    featuresZh: [
      "复古轻奢设计",
      "暖色调LED照明",
      "珠宝+手表双重展示",
      "优雅玻璃柜体",
      "充足储物空间",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "MDF baking finish, tempered glass, stainless steel" },
      { label: "Style", labelZh: "风格", value: "Light luxury vintage" },
      { label: "Brand", labelZh: "品牌", value: "DG Master of Display Showcase" },
    ],
    images: [
      img("1779969300753-750-5/jpg100-t3-scale100.webp"),
      img("1779969300437-750-4/jpg100-t3-scale100.webp"),
      img("1779969300109-750-3/jpg100-t3-scale100.webp"),
      img("1779969299728-750-2/jpg100-t3-scale100.webp"),
      img("1779969307838-1200-1/jpg100-t3-scale100.webp"),
    ],
    highlight: true,
    tags: ["bestseller", "new"],
  },

  // ========== DISPLAY PROPS ==========
  {
    id: "black-gold-jewelry-display-series",
    name: "DG Black & Gold Jewelry Display Series — Luxury Display System",
    nameZh: "DG黑金珠宝展示系列——奢华展示系统",
    category: "display-props",
    description:
      "DG's signature black and gold jewelry display series. A complete luxury display system combining black velvet with gold accents, designed to present high-end jewelry with sophistication and elegance. Includes multiple tray configurations.",
    descriptionZh:
      "DG标志性黑金珠宝展示系列。完整的奢华展示系统，将黑色天鹅绒与金色点缀相结合，以精致优雅的方式展示高端珠宝。包含多种托盘配置。",
    features: [
      "Black velvet + gold accent design",
      "Complete display system set",
      "Multiple tray configurations",
      "Anti-tarnish lining",
      "Custom branding available",
    ],
    featuresZh: [
      "黑天鹅绒+金色点缀设计",
      "完整展示系统套装",
      "多种托盘配置",
      "防变色内衬",
      "可定制品牌标识",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Velvet + MDF + gold-plated accents" },
      { label: "Colors", labelZh: "颜色", value: "Black with gold" },
    ],
    images: [
      img("1780048829162-750-5/jpg100-t3-scale100.webp"),
      img("1780048827497-750-4/jpg100-t3-scale100.webp"),
      img("1780048825792-750-3/jpg100-t3-scale100.webp"),
      img("1780049203575-750-1/jpg100-t3-scale100.webp"),
      img("1780048846888-62-2/jpg100-t3-scale100.webp"),
    ],
    highlight: true,
    tags: ["bestseller", "featured"],
  },
  {
    id: "luxury-magnetic-jewelry-display-set",
    name: "DG Luxury Magnetic Jewelry Display Set",
    nameZh: "DG奢华磁吸珠宝展示套装",
    category: "display-props",
    description:
      "Premium magnetic jewelry display set featuring modular magnetic components for flexible arrangement. Elegant velvet finish with strong magnetic bases keeps jewelry securely in place while allowing easy reconfiguration for different collections.",
    descriptionZh:
      "高级磁吸珠宝展示套装，模块化磁吸组件可灵活排列。优雅天鹅绒饰面搭配强力磁性底座，确保珠宝固定牢固，同时方便为不同系列重新配置。",
    features: [
      "Modular magnetic design",
      "Premium velvet finish",
      "Flexible arrangement",
      "Strong magnetic hold",
      "Easy reconfiguration",
    ],
    featuresZh: [
      "模块化磁吸设计",
      "高级天鹅绒饰面",
      "灵活排列",
      "强力磁吸固定",
      "易于重新配置",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Velvet + MDF + magnetic base" },
      { label: "Type", labelZh: "类型", value: "Magnetic modular set" },
    ],
    images: [
      img("1780047203469-750-5/jpg100-t3-scale100.webp"),
      img("1780049824763-750-1/jpg100-t3-scale100.webp"),
      img("1780047200499-750-3/jpg100-t3-scale100.webp"),
      img("1780047198903-750-2/jpg100-t3-scale100.webp"),
      img("1780047179091-61-2/jpg100-t3-scale100.webp"),
    ],
    highlight: true,
    tags: ["new", "bestseller"],
  },
  {
    id: "italian-velvet-luxury-jewelry-display-set",
    name: "DG Italian Velvet Luxury Jewelry Display Set",
    nameZh: "DG意大利天鹅绒奢华珠宝展示套装",
    category: "display-props",
    description:
      "Luxury jewelry display set crafted with premium Italian velvet. Features a complete collection of display pieces for rings, necklaces, bracelets, earrings, and brooches. Elegant and sophisticated presentation for high-end jewelry retail.",
    descriptionZh:
      "采用高级意大利天鹅绒制作的奢华珠宝展示套装。包含戒指、项链、手链、耳环和胸针的完整展示组件。为高端珠宝零售提供优雅精致的展示体验。",
    features: [
      "Premium Italian velvet material",
      "Complete display collection",
      "Ring, necklace, bracelet, earring, brooch pieces",
      "Anti-tarnish suede lining",
      "Multiple color options",
    ],
    featuresZh: [
      "高级意大利天鹅绒材质",
      "完整展示系列",
      "戒指/项链/手链/耳环/胸针组件",
      "防变色麂皮内衬",
      "多色可选",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Italian velvet + MDF + suede" },
      { label: "Colors", labelZh: "颜色", value: "Black, navy, burgundy, cream, grey" },
      { label: "Set Includes", labelZh: "套装包含", value: "Ring, necklace, bracelet, earring, brooch" },
    ],
    images: [
      img("1780046067114-750-5/jpg100-t3-scale100.webp"),
      img("1780046065533-750-4/jpg100-t3-scale100.webp"),
      img("1780046063963-750-3/jpg100-t3-scale100.webp"),
      img("1780046062351-750-2/jpg100-t3-scale100.webp"),
      img("1780046044588-60/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: [],
  },
  {
    id: "new-high-end-luxury-display-props",
    name: "DG New High-End Luxury Jewelry Display Props",
    nameZh: "DG新款高端奢华珠宝陈列道具",
    category: "display-props",
    description:
      "DG's newest high-end luxury jewelry display props collection. Modern designs with premium finishes to showcase jewelry at its finest. Perfect for luxury boutiques and high-end department store displays.",
    descriptionZh:
      "DG最新高端奢华珠宝陈列道具系列。现代设计搭配高级饰面，以最佳方式展示珠宝。适合奢侈精品店和高端百货商场展示。",
    features: [
      "New modern design",
      "Premium luxury finishes",
      "Versatile display configurations",
      "Suitable for all jewelry types",
    ],
    featuresZh: [
      "全新现代设计",
      "高级奢华饰面",
      "多功能展示配置",
      "适合各类珠宝",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Premium velvet + MDF + metal accents" },
      { label: "Type", labelZh: "类型", value: "Display props collection" },
    ],
    images: [
      img("1779969429740-750-5/jpg100-t3-scale100.webp"),
      img("1779969429382-750-4/jpg100-t3-scale100.webp"),
      img("1779969428699-750-2/jpg100-t3-scale100.webp"),
      img("1779969428334-750-1/jpg100-t3-scale100.webp"),
      img("1779969422738-64-2/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: ["new"],
  },
  {
    id: "italian-woven-fabric-display-prop-set",
    name: "DG Italian Woven Fabric Luxury White Gold Jewelry Display Prop Set",
    nameZh: "DG意大利编织面料奢华白金珠宝陈列道具套装",
    category: "display-props",
    description:
      "Exquisite jewelry display prop set featuring Italian woven fabric with white gold accents. The textured fabric surface adds depth and sophistication, making jewelry pieces stand out with elegance.",
    descriptionZh:
      "精致珠宝陈列道具套装，采用意大利编织面料配以白金点缀。纹理面料表面增添层次感和精致感，让珠宝作品优雅出众。",
    features: [
      "Italian woven fabric texture",
      "White gold accent details",
      "Textured sophisticated surface",
      "Premium craftsmanship",
    ],
    featuresZh: [
      "意大利编织面料纹理",
      "白金点缀细节",
      "质感精致表面",
      "高级工艺",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Italian woven fabric + MDF + white gold accents" },
      { label: "Style", labelZh: "风格", value: "Luxury textured" },
    ],
    images: [
      img("1779969448453-750-5/jpg100-t3-scale100.webp"),
      img("1779969448050-750-4/jpg100-t3-scale100.webp"),
      img("1779969447641-750-3/jpg100-t3-scale100.webp"),
      img("1779969446872-750-1/jpg100-t3-scale100.webp"),
      img("1779969441858-65/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: [],
  },
  {
    id: "deep-blue-velvet-display-props",
    name: "DG Luxury Deep Blue Velvet Jewelry Display Props",
    nameZh: "DG奢华深蓝天鹅绒珠宝陈列道具",
    category: "display-props",
    description:
      "Luxury deep blue velvet jewelry display props that create a stunning contrast with gold and diamond jewelry. The rich blue velvet backdrop enhances the brilliance of precious stones and metals for maximum visual impact.",
    descriptionZh:
      "奢华深蓝天鹅绒珠宝陈列道具，与黄金和钻石珠宝形成惊艳对比。浓郁的蓝色天鹅绒背景增强宝石和贵金属的光彩，实现最大视觉冲击力。",
    features: [
      "Rich deep blue velvet",
      "Stunning contrast for gold/diamond jewelry",
      "Premium quality materials",
      "Multiple piece configurations",
    ],
    featuresZh: [
      "浓郁深蓝天鹅绒",
      "与黄金/钻石珠宝惊艳对比",
      "优质材料",
      "多件组合配置",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Deep blue velvet + MDF" },
      { label: "Color", labelZh: "颜色", value: "Deep blue" },
    ],
    images: [
      img("1779969372548-750-4/jpg100-t3-scale100.webp"),
      img("1779969372194-750-3/jpg100-t3-scale100.webp"),
      img("1779969371841-750-2/jpg100-t3-scale100.webp"),
      img("1779969371480-750-1/jpg100-t3-scale100.webp"),
      img("1779969347977-63-1/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: ["new"],
  },
  {
    id: "custom-black-gold-display-stand",
    name: "DG Custom Black & Gold Jewelry Display Stand Prop",
    nameZh: "DG定制黑金珠宝展示架道具",
    category: "display-props",
    description:
      "Custom black and gold jewelry display stand prop. Elegant single-piece display stand with black base and gold accents, perfect for highlighting individual jewelry pieces in luxury retail settings.",
    descriptionZh:
      "定制黑金珠宝展示架道具。优雅单件展示架，黑色底座搭配金色点缀，非常适合在奢侈零售环境中突出展示单件珠宝。",
    features: [
      "Black + gold accent design",
      "Individual piece display",
      "Stable weighted base",
      "Versatile for rings, earrings, pendants",
    ],
    featuresZh: [
      "黑金点缀设计",
      "单件展示",
      "稳定加重底座",
      "适用于戒指、耳环、吊坠",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Velvet + metal + gold plating" },
      { label: "Type", labelZh: "类型", value: "Individual display stand" },
    ],
    images: [
      img("1779959095627-750-2/jpg100-t3-scale100.webp"),
      img("1779959095233-750-1/jpg100-t3-scale100.webp"),
      img("1779959096390-750-4/jpg100-t3-scale100.webp"),
      img("1779959096025-750-3/jpg100-t3-scale100.webp"),
      img("1779958944133-69-2/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: [],
  },
  {
    id: "luxury-modular-display-stand-props",
    name: "DG Luxury Modular Jewelry Display Stand Props",
    nameZh: "DG奢华模块化珠宝展示架道具",
    category: "display-props",
    description:
      "Modular jewelry display stand props that can be combined in various configurations. Features luxurious materials and finishes, with interchangeable components to create custom display layouts for different jewelry collections.",
    descriptionZh:
      "模块化珠宝展示架道具，可多种组合配置。奢华材质和饰面，可互换组件为不同珠宝系列创建定制展示布局。",
    features: [
      "Modular interchangeable design",
      "Luxurious materials",
      "Multiple configuration options",
      "Versatile display layouts",
    ],
    featuresZh: [
      "模块化可互换设计",
      "奢华材质",
      "多种配置选项",
      "多功能展示布局",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Velvet + MDF + metal" },
      { label: "Type", labelZh: "类型", value: "Modular display system" },
    ],
    images: [
      img("1779957748081-750-5/jpg100-t3-scale100.webp"),
      img("1779957747326-750-3/jpg100-t3-scale100.webp"),
      img("1779957746947-750-1/jpg100-t3-scale100.webp"),
      img("1779957747729-750-4/jpg100-t3-scale100.webp"),
      img("1780565708591-68/jpg100-t3-scale100.webp"),
    ],
    highlight: true,
    tags: ["bestseller"],
  },
  {
    id: "display-stand-necklace-earring-ring-set",
    name: "DG Luxury Jewelry Display Stand Props — Necklace, Earring & Ring Set",
    nameZh: "DG奢华珠宝展示架道具——项链耳环戒指套装",
    category: "display-props",
    description:
      "Complete jewelry display stand set including dedicated stands for necklaces, earrings, and rings. Each piece is designed to present its specific jewelry type in the most flattering way. Premium velvet covering with elegant finishing.",
    descriptionZh:
      "完整珠宝展示架套装，包括项链、耳环和戒指专用展示架。每件都针对特定珠宝类型设计最佳展示方式。高级天鹅绒包裹，优雅饰面。",
    features: [
      "Complete necklace + earring + ring set",
      "Type-specific display design",
      "Premium velvet covering",
      "Elegant unified styling",
    ],
    featuresZh: [
      "完整项链+耳环+戒指套装",
      "针对类型的展示设计",
      "高级天鹅绒包裹",
      "优雅统一风格",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Velvet + MDF + metal" },
      { label: "Set Includes", labelZh: "套装包含", value: "Necklace stand, earring stand, ring stand" },
    ],
    images: [
      img("1779956845580-750-3/jpg100-t3-scale100.webp"),
      img("1779956845913-750-4/jpg100-t3-scale100.webp"),
      img("1779956860569-750-1/jpg100-t3-scale100.webp"),
      img("1779956846257-750-5/jpg100-t3-scale100.webp"),
      img("1779956836576-67/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: [],
  },
  {
    id: "custom-black-velvet-display-props",
    name: "DG Custom Black Velvet Jewelry Display Props",
    nameZh: "DG定制黑天鹅绒珠宝陈列道具",
    category: "display-props",
    description:
      "Custom black velvet jewelry display props offering timeless elegance. The deep black velvet creates a dramatic backdrop that makes diamonds, gold, and precious stones vividly stand out. Available in multiple configurations.",
    descriptionZh:
      "定制黑天鹅绒珠宝陈列道具，展现永恒优雅。深黑天鹅绒创造出戏剧性背景，让钻石、黄金和宝石生动突出。多种配置可选。",
    features: [
      "Classic black velvet finish",
      "Timeless elegant design",
      "Dramatic contrast for jewelry",
      "Multiple configurations available",
    ],
    featuresZh: [
      "经典黑天鹅绒饰面",
      "永恒优雅设计",
      "珠宝的戏剧性对比",
      "多种配置可选",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Black velvet + MDF" },
      { label: "Style", labelZh: "风格", value: "Classic black" },
    ],
    images: [
      img("1779953477465-750-5/jpg100-t3-scale100.webp"),
      img("1779953477116-750-4/jpg100-t3-scale100.webp"),
      img("1779953476771-750-3/jpg100-t3-scale100.webp"),
      img("1779953476413-750-2/jpg100-t3-scale100.webp"),
      img("1779953463318-69/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: [],
  },
  {
    id: "custom-top-luxury-jewelry-display-prop",
    name: "DG Custom Top Luxury Jewelry Display Prop",
    nameZh: "DG定制顶级奢华珠宝陈列道具",
    category: "display-props",
    description:
      "Top-tier luxury jewelry display prop with custom design options. Premium materials with exquisite detailing, designed for flagship stores and luxury brand presentations. Fully customizable in size, material, and finish.",
    descriptionZh:
      "顶级奢华珠宝陈列道具，支持定制设计。高级材质配以精美细节，专为旗舰店和奢侈品牌展示设计。尺寸、材质和饰面全面可定制。",
    features: [
      "Top-tier luxury design",
      "Fully customizable",
      "Premium materials",
      "Exquisite detailing",
      "Flagship store quality",
    ],
    featuresZh: [
      "顶级奢华设计",
      "全面可定制",
      "高级材质",
      "精美细节",
      "旗舰店品质",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "Premium custom materials" },
      { label: "Customization", labelZh: "定制", value: "Full custom — size, material, finish" },
    ],
    images: [
      img("1777348032683-750-logo-2/jpg100-t3-scale100.webp"),
      img("1777348056524-750-logo-5/jpg100-t3-scale100.webp"),
      img("1777348050188-750-logo-4/jpg100-t3-scale100.webp"),
      img("1777348038976-750-logo-1/jpg100-t3-scale100.webp"),
      img("1777348078267-1200-logo-3/jpg100-t3-scale100.webp"),
    ],
    highlight: false,
    tags: ["featured"],
  },

  // ========== VIP ROOM FURNITURE ==========
  {
    id: "custom-curved-luxury-consultation-table",
    name: "DG Custom Curved Luxury Jewelry Consultation Table",
    nameZh: "DG定制弧形奢华珠宝咨询桌",
    category: "vip-furniture",
    description:
      "Custom curved luxury consultation table designed for VIP jewelry showrooms. Features an elegant curved design that facilitates comfortable client interactions while showcasing products. Premium materials and finishes throughout.",
    descriptionZh:
      "定制弧形奢华咨询桌，专为VIP珠宝展厅设计。优雅弧形设计便于舒适的客户互动，同时展示产品。整体采用高级材质和饰面。",
    features: [
      "Elegant curved design",
      "Facilitates client interaction",
      "Integrated display area",
      "Premium material construction",
      "VIP room quality",
    ],
    featuresZh: [
      "优雅弧形设计",
      "便于客户互动",
      "集成展示区",
      "高级材质结构",
      "贵宾室品质",
    ],
    specs: [
      { label: "Material", labelZh: "材质", value: "MDF baking finish, leather, stainless steel, marble" },
      { label: "Usage", labelZh: "用途", value: "VIP consultation room" },
      { label: "Brand", labelZh: "品牌", value: "DG Master of Display Showcase" },
    ],
    images: [
      img("1780044803803-750-5/jpg100-t3-scale100.webp"),
      img("1780044802300-750-4/jpg100-t3-scale100.webp"),
      img("1780044800630-750-3/jpg100-t3-scale100.webp"),
      img("1780044799128-750-2/jpg100-t3-scale100.webp"),
      img("1780044766776-1200-1/jpg100-t3-scale100.webp"),
    ],
    highlight: true,
    tags: ["bestseller", "featured"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.nameZh.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.descriptionZh.toLowerCase().includes(q) ||
      p.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}
