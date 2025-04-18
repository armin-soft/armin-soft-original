
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import SmoothScrollbar from "@/components/SmoothScrollbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  // Using try-catch to handle case when SiteLayout is used outside Router context
  let pathname = '/';
  try {
    // Only execute useLocation if we're inside a Router context
    pathname = useLocation().pathname;
  } catch (error) {
    console.log('SiteLayout: useLocation cannot be used outside Router context');
  }
  
  const isMobile = useIsMobile();

  // اسکرول به بالای صفحه در هنگام تغییر مسیر
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-background text-foreground overflow-x-hidden">
      <SiteHeader />
      {isMobile ? (
        <main className="flex-grow w-full pt-24 md:pt-28 animate-fade-in">
          <Breadcrumbs />
          {children}
        </main>
      ) : (
        <SmoothScrollbar>
          <main className="flex-grow w-full pt-24 md:pt-28 animate-fade-in">
            <Breadcrumbs />
            {children}
          </main>
        </SmoothScrollbar>
      )}
      <SiteFooter />
    </div>
  );
}
