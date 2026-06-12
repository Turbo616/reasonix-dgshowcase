"use client";

import { useTranslations } from "next-intl";
import { Card } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("home");
  const common = useTranslations("common");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://img.yfisher.com/m43017/1777431058235-1200-1/jpg100-t3-scale100.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />

        <div className="relative z-20 container-page text-center py-20">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
            {t("hero.subtitle")}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("hero.description")}
          </p>
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center gap-2 bg-gold text-black hover:bg-gold-light text-base px-8 py-6 font-medium transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
            {t("hero.cta")}
          </Link>
        </div>
      </section>

      {/* Solution Sections */}
      <SolutionCard
        image="https://img.yfisher.com/m43017/1777431080266-750-5/jpg100-t3-scale100.webp"
        title={t("jewelrySection.title")}
        subtitle={t("jewelrySection.subtitle")}
        description={t("jewelrySection.description")}
        imageSide="right"
      />
      <SolutionCard
        image="https://img.yfisher.com/m43017/1780047203469-750-5/jpg100-t3-scale100.webp"
        title={t("perfumeSection.title")}
        subtitle={t("perfumeSection.subtitle")}
        description={t("perfumeSection.description")}
        imageSide="left"
      />
      <SolutionCard
        image="https://img.yfisher.com/m43017/1780046067114-750-5/jpg100-t3-scale100.webp"
        title={t("museumSection.title")}
        subtitle={t("museumSection.subtitle")}
        description={t("museumSection.description")}
        imageSide="right"
      />
      <SolutionCard
        image="https://img.yfisher.com/m43017/1777429174791-750-5/jpg100-t3-scale100.webp"
        title={t("modularSection.title")}
        subtitle={t("modularSection.subtitle")}
        description={t("modularSection.description")}
        imageSide="left"
      />

      {/* Capabilities */}
      <section className="section-padding bg-card/50">
        <div className="container-page text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4">
            {t("capabilities.title")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t("capabilities.subtitle")}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            {t("capabilities.description")}
          </p>
          <Link
            href="/en/contact"
            className="inline-flex items-center justify-center bg-gold text-black hover:bg-gold-light px-8 py-6 font-medium transition-colors"
          >
            {t("capabilities.cta")}
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {t("features.title")}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { text: t("features.material") },
              { text: t("features.brand") },
              { text: t("features.delivery") },
            ].map((feature, i) => (
              <Card key={i} className="bg-card/50 border-border p-8 text-center">
                <Check className="h-8 w-8 text-gold mx-auto mb-4" />
                <p className="text-foreground font-medium">{feature.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Cases */}
      <section className="section-padding bg-card/50">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            {t("cases.title")}
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            {t("cases.description")}
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                img: "https://img.yfisher.com/m43017/1777431080266-750-5/jpg100-t3-scale100.webp",
                title: "French High End Jewelry And Watch Brand Store Display Design",
                desc: "Customized glass showcases with integrated lighting and discreet anti-theft features for high-end jewelry retail.",
              },
              {
                img: "https://img.yfisher.com/m43017/1780048829162-750-5/jpg100-t3-scale100.webp",
                title: "Old Store Build-Out Design | Custom Modular Showcases",
                desc: "Modular showcases and intelligent lighting systems that redefined the customer experience.",
              },
              {
                img: "https://img.yfisher.com/m43017/1780047203469-750-5/jpg100-t3-scale100.webp",
                title: "High-End Perfume Brand Upgrade Solution",
                desc: "Exclusive showcases aligned with brand identity, using tailored materials and precision lighting.",
              },
            ].map((c, i) => (
              <Card
                key={i}
                className="bg-card border-border overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2 group-hover:text-gold transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {c.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t("about.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("about.description")}
              </p>
              <Link
                href="/en/about"
                className="inline-flex items-center justify-center border border-gold text-gold hover:bg-gold hover:text-black px-6 py-3 font-medium transition-colors"
              >
                {t("about.cta")}
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "21,500", label: t("about.showroom"), unit: t("about.statsUnit1") },
                { value: "190,000", label: t("about.manufacturing"), unit: t("about.statsUnit2") },
                { value: "200", label: t("about.projectsPerYear"), unit: t("about.statsUnit3") },
                { value: "180", label: t("about.team"), unit: t("about.statsUnit4") },
              ].map((stat, i) => (
                <Card
                  key={i}
                  className="bg-card/50 border-border p-6 text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gold">
                    {stat.value}
                    <span className="text-base font-normal">{stat.unit}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding bg-card/50">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            {t("brands.title")}
          </h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {["CARTIER", "TIFFANY", "ROLEX", "DIOR", "CHANEL", "GUCCI"].map(
              (brand) => (
                <span key={brand} className="text-xl font-serif tracking-widest text-muted-foreground">
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-padding">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            {t("news.title")}
          </h2>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            {t("news.description")}
          </p>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                img: "https://img.yfisher.com/m43017/1779969429740-750-5/jpg100-t3-scale100.webp",
                title: "Ecological Luxury Initiative: DG's Commitment to Low-Carbon Practices in Sustainable Luxury Retail",
                date: "2025-05-20",
              },
              {
                img: "https://img.yfisher.com/m43017/1779957748081-750-5/jpg100-t3-scale100.webp",
                title: "Children's Day | Passing Aesthetics to the Next Generation",
                date: "2025-05-01",
              },
              {
                img: "https://img.yfisher.com/m43017/1780044803803-750-5/jpg100-t3-scale100.webp",
                title: "DG Display Showcase Q1 Recognition Ceremony Successfully Concluded",
                date: "2025-04-15",
              },
              {
                img: "https://img.yfisher.com/m43017/1776498166522-750-5/jpg100-t3-scale100.webp",
                title: "Craftsmanship Beyond Excellence: How DG Display Showcase Creates Luxurious Experiences",
                date: "2025-03-28",
              },
            ].map((n, i) => (
              <Card
                key={i}
                className="bg-card/50 border-border overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium group-hover:text-gold transition-colors line-clamp-3">
                    {n.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">{n.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-card/50">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground mb-10">
              {t("contact.description")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* Solution Card Component */
function SolutionCard({
  image,
  title,
  subtitle,
  description,
  imageSide,
}: {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  imageSide: "left" | "right";
}) {
  const t = useTranslations("common");

  return (
    <section className="section-padding border-b border-border">
      <div
        className={`container-page grid gap-12 md:grid-cols-2 items-center ${
          imageSide === "left" ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* Image */}
        <div
          className={`aspect-[4/3] rounded-lg overflow-hidden ${
            imageSide === "left" ? "md:[direction:ltr]" : ""
          }`}
        >
          <img
            src={image}
            alt={subtitle}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className={imageSide === "left" ? "md:[direction:ltr]" : ""}>
          <p className="text-gold text-sm tracking-widest uppercase mb-4">
            {title}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{subtitle}</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {description}
          </p>
          <Link
            href="/en/contact"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
          >
            {t("readMore")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
