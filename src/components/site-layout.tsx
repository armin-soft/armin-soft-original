
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const { pathname } = useLocation();

  // اسکرول به بالای صفحه در هنگام تغییر مسیر
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}
