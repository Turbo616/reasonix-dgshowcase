"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";

interface FooterProps {
  footer: Record<string, any>;
  nav: Record<string, string>;
  common: Record<string, string>;
  lang: string;
}

export function Footer({ footer, nav, common, lang }: FooterProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.content,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Inquiry sent successfully!");
        setFormState({ name: "", email: "", phone: "", content: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
  };

  return (
    <footer className="bg-black border-t border-border">
      {/* Contact Form Section */}
      <div className="container-page section-padding border-b border-border">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gold mb-4">
              {footer.contactForm?.title || footer.howWeDo}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {footer.contactForm?.description || footer.howWeDoDesc}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                placeholder={footer.contactForm?.name || "name"}
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="bg-secondary border-border"
              />
              <Input
                type="email"
                placeholder={footer.contactForm?.email || "email"}
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="bg-secondary border-border"
              />
            </div>
            <Input
              placeholder={footer.contactForm?.phone || "Phone/WhatsApp"}
              value={formState.phone}
              onChange={(e) =>
                setFormState({ ...formState, phone: e.target.value })
              }
              className="bg-secondary border-border"
            />
            <Textarea
              placeholder={footer.contactForm?.content || "content"}
              rows={4}
              value={formState.content}
              onChange={(e) =>
                setFormState({ ...formState, content: e.target.value })
              }
              className="bg-secondary border-border"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center w-full bg-gold text-black hover:bg-gold-light text-sm font-medium px-4 py-2 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? (
                <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              {status === "loading"
                ? "Sending..."
                : footer.contactForm?.submit || "send inquiry now"}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-1 text-emerald-400 text-xs mt-2">
                <CheckCircle className="h-3 w-3" />
                {statusMessage}
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-1 text-rose-400 text-xs mt-2">
                <AlertCircle className="h-3 w-3" />
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* About DG Section */}
      <div className="container-page section-padding border-b border-border">
        <div className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-3xl">
          {footer.aboutStory}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-gold text-sm font-semibold mb-2">
              {footer.serviceTeam}
            </h4>
            <p className="text-sm text-muted-foreground">
              {footer.serviceTeamDesc}
            </p>
          </div>
          <div>
            <h4 className="text-gold text-sm font-semibold mb-2">
              {footer.productionTeam}
            </h4>
            <p className="text-sm text-muted-foreground">
              {footer.productionTeamDesc}
            </p>
          </div>
          <div>
            <h4 className="text-gold text-sm font-semibold mb-2">
              {footer.designTeam}
            </h4>
            <p className="text-sm text-muted-foreground">
              {footer.designTeamDesc}
            </p>
          </div>
          <div>
            <h4 className="text-gold text-sm font-semibold mb-2">
              {footer.salesTeam}
            </h4>
            <p className="text-sm text-muted-foreground">
              {footer.salesTeamDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container-page section-padding">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4">{footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { label: nav.home, href: "/" },
                { label: nav.project, href: "/projects" },
                { label: nav.solution, href: "/solution" },
                { label: nav.products, href: "/products" },
                { label: nav.about, href: "/about" },
                { label: nav.resources, href: "/resources" },
                { label: nav.contact, href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-gold font-semibold mb-4">{nav.products}</h4>
            <ul className="space-y-2">
              {[
                { label: nav.jewelryShowcase, href: "/products/jewelry" },
                { label: nav.watchShowcase, href: "/products/watch" },
                { label: nav.perfumeShowcase, href: "/products/perfume" },
                { label: nav.museumShowcase, href: "/products/museum" },
                { label: nav.luxuryShowcase, href: "/products/luxury" },
                { label: nav.opticalShowcase, href: "/products/optical" },
                { label: nav.vipRoomFurniture, href: "/products/vip-furniture" },
                { label: nav.jewelryDisplayProps, href: "/products/display-props" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-semibold mb-4">{footer.customerService}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs text-gold">{footer.chinaMarketing}</p>
                  <p className="text-xs">{footer.marketingAddress}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <div>
                  <p className="text-xs text-gold">{footer.chinaManufacturing}</p>
                  <p className="text-xs">{footer.manufacturingAddress}</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-xs">{footer.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-xs">{footer.email1}</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-gold font-semibold mb-4">{footer.followUs}</h4>
            <div className="flex gap-3">
              {/* Social icons - placeholder */}
              <div className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors cursor-pointer">
                f
              </div>
              <div className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors cursor-pointer">
                in
              </div>
              <div className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors cursor-pointer">
                YT
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>{footer.copyright}</p>
          <div className="flex gap-4">
            <Link href={`/${lang}/sitemap`} className="hover:text-gold transition-colors">
              {footer.sitemap}
            </Link>
            <Link href={`/${lang}/privacy`} className="hover:text-gold transition-colors">
              {footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
