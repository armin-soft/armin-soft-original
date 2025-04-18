
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
        title="برنامه نویس بک اند"
        description="آرمین سافت، متخصص برنامه‌نویسی بک‌اند با تجربه در توسعه API، مدیریت دیتابیس و امنیت سرور"
        canonical="/"
        keywords="برنامه نویس بک اند, توسعه API, پایتون, جاوا, پی اچ پی, مدیریت سرور, امنیت وب, برنامه نویسی سمت سرور"
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
