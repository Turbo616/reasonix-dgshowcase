import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FileText, HelpCircle, Newspaper, Star, Calendar } from "lucide-react";

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const sections = [
    {
      icon: <Newspaper className="h-8 w-8" />,
      title: locale === "zh" ? "公司新闻" : "Company News",
      desc:
        locale === "zh"
          ? "了解DG展示柜的最新动态、企业活动和里程碑。"
          : "Stay updated on the latest DG Display Showcase news, events, and milestones.",
      articles: [
        {
          title:
            "Ecological Luxury Initiative: DG's Commitment to Low-Carbon Practices",
          date: "2025-05-20",
        },
        {
          title:
            "DG Display Showcase Q1 Recognition Ceremony Successfully Concluded",
          date: "2025-04-15",
        },
        {
          title:
            "Craftsmanship Beyond Excellence: How DG Creates Luxurious Experiences",
          date: "2025-03-28",
        },
      ],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: locale === "zh" ? "行业文章" : "Industry Articles",
      desc:
        locale === "zh"
          ? "珠宝、香水、博物馆和奢侈零售行业的深度洞察与专业知识。"
          : "In-depth insights and expertise across jewelry, perfume, museum, and luxury retail industries.",
      articles: [
        {
          title: "Jewelry Store Display Design Trends 2025",
          date: "2025-05-10",
        },
        {
          title: "The Art of Perfume Retail: Creating Sensory Experiences",
          date: "2025-04-20",
        },
        {
          title: "Modern Museum Exhibition: Balancing Conservation and Display",
          date: "2025-03-15",
        },
      ],
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: locale === "zh" ? "客户评价" : "Testimonials",
      desc:
        locale === "zh"
          ? "来自全球客户的真实反馈与评价。"
          : "Real feedback and reviews from our global clients.",
      articles: [
        {
          title: "A French Luxury Brand's Journey with DG",
          date: "2025-04-30",
        },
        { title: "Museum Director Praises DG's Conservation Solutions", date: "2025-02-18" },
        { title: "Why Global Retailers Choose DG Display Showcase", date: "2025-01-25" },
      ],
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: locale === "zh" ? "展会活动" : "Exhibitions",
      desc:
        locale === "zh"
          ? "DG展示柜参加的国内外展会和行业活动信息。"
          : "Information on domestic and international exhibitions and industry events attended by DG.",
      articles: [
        { title: "DG at JCK Las Vegas 2025", date: "2025-06-01" },
        { title: "Hong Kong Jewelry & Gem Fair Recap", date: "2025-03-05" },
        { title: "DG Showcase at Milano Design Week", date: "2025-04-10" },
      ],
    },
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: locale === "zh" ? "常见问题" : "FAQ",
      desc:
        locale === "zh"
          ? "关于产品定制、物流、安装和售后服务的常见问题解答。"
          : "Frequently asked questions about product customization, logistics, installation, and after-sales service.",
      href: "/resources/faq",
    },
  ];

  return (
    <div className="container-page section-padding">
      <h1 className="text-3xl font-bold mb-4">
        {locale === "zh" ? "资源中心" : "Resources"}
      </h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        {locale === "zh"
          ? "选择DG展示柜不仅仅是选择一个展柜——更是选择一个理解您的品牌、您的客户以及空间启发力量的合作伙伴。"
          : "To choose DG Display Showcase is to choose more than a display — it's to choose a partner who understands your brand, your customers, and the power of space to inspire."}
      </p>

      <div className="space-y-12">
        {sections.map((section, i) => (
          <div key={i}>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-gold">{section.icon}</div>
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>
            <p className="text-muted-foreground text-sm mb-4">{section.desc}</p>

            {"articles" in section && section.articles && (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {section.articles.map((article, j) => (
                  <Card
                    key={j}
                    className="bg-card/50 border-border p-4 hover:border-gold/50 transition-colors cursor-pointer"
                  >
                    <p className="text-sm font-medium line-clamp-2 mb-2">
                      {article.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {article.date}
                    </p>
                  </Card>
                ))}
              </div>
            )}

            {"href" in section && section.href && (
              <Link
                href={`/${locale}${section.href}`}
                className="inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors"
              >
                {locale === "zh" ? "查看详情 →" : "View Details →"}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
