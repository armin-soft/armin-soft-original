
import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { HomeHero } from "@/components/home/HomeHero";
import { ServiceOverview } from "@/components/home/ServiceOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsShowcase } from "@/components/home/SkillsShowcase";
import { CTASection } from "@/components/home/CTASection";

const Home = () => {
  return (
    <SiteLayout>
      <SEOHead 
        title="صفحه اصلی"
        description="آرمین سافت، متخصص برنامه‌نویسی و امنیت وب با تجربه در توسعه نرم‌افزار، هوش مصنوعی و هک اخلاقی"
        canonical="/"
      />
      <HomeHero />
      <ServiceOverview />
      <FeaturedProjects />
      <SkillsShowcase />
      <CTASection />
    </SiteLayout>
  );
};

export default Home;
