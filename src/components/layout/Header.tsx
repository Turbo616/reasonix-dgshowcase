"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ChevronDown, Globe } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export function Header({
  nav,
  lang,
}: {
  nav: Record<string, string>;
  lang: string;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: nav.home, href: "/" },
    {
      label: nav.project,
      href: "/projects",
      children: [
        { label: nav.jewelryWatchProjects, href: "/projects/jewelry-watch" },
        { label: nav.perfumeProjects, href: "/projects/perfume" },
        { label: nav.museumProjects, href: "/projects/museum" },
      ],
    },
    { label: nav.solution, href: "/solution" },
    {
      label: nav.products,
      href: "/products",
      children: [
        { label: nav.jewelryShowcase, href: "/products/jewelry" },
        { label: nav.watchShowcase, href: "/products/watch" },
        { label: nav.perfumeShowcase, href: "/products/perfume" },
        { label: nav.museumShowcase, href: "/products/museum" },
        { label: nav.luxuryShowcase, href: "/products/luxury" },
        { label: nav.opticalShowcase, href: "/products/optical" },
        { label: nav.vipRoomFurniture, href: "/products/vip-furniture" },
        { label: nav.jewelryDisplayProps, href: "/products/display-props" },
      ],
    },
    {
      label: nav.about,
      href: "/about",
      children: [
        { label: nav.brandStory, href: "/about/brand-story" },
        { label: nav.companyProfile, href: "/about/company-profile" },
        { label: nav.advantage, href: "/about/advantage" },
        { label: nav.productionUpdates, href: "/about/production" },
        { label: nav.sustainability, href: "/about/sustainability" },
      ],
    },
    {
      label: nav.resources,
      href: "/resources",
      children: [
        { label: nav.expertise, href: "/resources/expertise" },
        { label: nav.testimonial, href: "/resources/testimonial" },
        { label: nav.exhibition, href: "/resources/exhibition" },
        { label: nav.companyNews, href: "/resources/news" },
        { label: nav.industryArticles, href: "/resources/articles" },
        { label: nav.faq, href: "/resources/faq" },
      ],
    },
    { label: nav.contact, href: "/contact" },
  ];

  const switchLocale = lang === "en" ? "zh" : "en";

  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 text-lg font-bold tracking-wider text-gold"
        >
          <span className="text-xl">◆</span>
          <span className="hidden sm:inline">DG DISPLAY</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger className="bg-transparent text-sm text-foreground/80 hover:text-gold data-[state=open]:text-gold">
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={`/${lang}${child.href}`}
                            className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-gold"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={`/${lang}${item.href}`}
                    className={cn(
                      "inline-flex items-center px-3 py-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors",
                      pathname === `/${lang}${item.href}` && "text-gold"
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side: language + CTA */}
        <div className="flex items-center gap-3">
          <Link
            href={`/${switchLocale}${pathname.replace(`/${lang}`, "")}`}
            className="flex items-center gap-1 text-sm text-foreground/60 hover:text-gold transition-colors"
          >
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">{switchLocale === "zh" ? "中文" : "EN"}</span>
          </Link>

          <Link
            href={`/${lang}/contact`}
            className="hidden sm:inline-flex items-center justify-center bg-gold text-black hover:bg-gold-light text-sm font-medium px-3 py-1.5 transition-colors"
          >
            {nav.contact}
          </Link>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="inline-flex items-center justify-center h-8 w-8 lg:hidden text-foreground hover:text-gold transition-colors">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pt-12">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) =>
                  item.children ? (
                    <MobileNavGroup
                      key={item.href}
                      label={item.label}
                      items={item.children}
                      lang={lang}
                      onClose={() => setMobileOpen(false)}
                    />
                  ) : (
                    <Link
                      key={item.href}
                      href={`/${lang}${item.href}`}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md px-3 py-2.5 text-sm hover:bg-accent hover:text-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <Link
                  href={`/${lang}/contact`}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center bg-gold text-black hover:bg-gold-light text-sm font-medium px-3 py-1.5 mt-4 transition-colors"
                >
                  {nav.contact}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileNavGroup({
  label,
  items,
  lang,
  onClose,
}: {
  label: string;
  items: { label: string; href: string }[];
  lang: string;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm hover:bg-accent hover:text-gold transition-colors"
      >
        {label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="ml-4 border-l border-border">
          {items.map((child) => (
            <Link
              key={child.href}
              href={`/${lang}${child.href}`}
              onClick={onClose}
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
