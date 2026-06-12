import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "DG Display Showcase - Custom Showcase Manufacturers & Suppliers",
    template: "%s | DG Display Showcase",
  },
  description:
    "For over 27 years, DG Display Showcase has crafted custom showcase display for luxury jewelry, perfume, watches, retail, and museums. End-to-end solutions from design to installation.",
  keywords: [
    "display showcase",
    "jewelry showcase",
    "watch showcase",
    "perfume showcase",
    "museum showcase",
    "luxury showcase",
    "custom showcase",
    "retail display",
    "showcase manufacturer",
    "DG Display Showcase",
  ],
  authors: [{ name: "DG Display Showcase" }],
  creator: "DG Display Showcase",
  metadataBase: new URL("https://www.degreefurniture.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "DG Display Showcase",
    title: "DG Display Showcase - Custom Showcase Manufacturers & Suppliers",
    description:
      "For over 27 years, DG Display Showcase has crafted custom showcase display for luxury jewelry, perfume, watches, retail, and museums.",
    images: [
      {
        url: "https://img.yfisher.com/m43017/1777431058235-1200-1/jpg100-t3-scale100.webp",
        width: 1200,
        height: 630,
        alt: "DG Display Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DG Display Showcase - Custom Showcase Manufacturers & Suppliers",
    description:
      "For over 27 years, DG Display Showcase has crafted custom showcase display for luxury jewelry, perfume, watches, retail, and museums.",
    images: [
      "https://img.yfisher.com/m43017/1777431058235-1200-1/jpg100-t3-scale100.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Header
            nav={messages.nav as Record<string, string>}
            lang={locale}
          />
          <main className="flex-1 pt-16">{children}</main>
          <Footer
            footer={messages.footer as Record<string, any>}
            nav={messages.nav as Record<string, string>}
            common={messages.common as Record<string, string>}
            lang={locale}
          />
          <CookieBanner
            cookie={messages.cookie as Record<string, string>}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
