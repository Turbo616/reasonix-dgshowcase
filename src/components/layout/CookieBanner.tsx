"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CookieBannerProps {
  cookie: Record<string, string>;
}

export function CookieBanner({ cookie }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-2xl">
      <div className="container-page py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{cookie.title}: </span>
            {cookie.description}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={reject}
              className="text-xs"
            >
              {cookie.reject}
            </Button>
            <Button
              size="sm"
              onClick={accept}
              className="bg-gold text-black hover:bg-gold-light text-xs"
            >
              {cookie.agree}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
