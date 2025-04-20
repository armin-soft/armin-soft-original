
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useIsMobile } from "@/hooks/use-mobile";

interface SiteLayoutProps {
  children: ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  // Using try-catch to handle case when SiteLayout is used outside Router context
  let pathname = '/';
  try {
    pathname = useLocation().pathname;
  } catch (error) {
    console.log('SiteLayout: useLocation cannot be used outside Router context');
  }
  
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <SiteHeader />
      <main className="flex-grow w-full pt-20 md:pt-24 lg:pt-28 animate-fade-in">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
