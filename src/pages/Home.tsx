
import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { HomeHero } from "@/components/home/HomeHero";
import { ServiceOverview } from "@/components/home/ServiceOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CTASection } from "@/components/home/CTASection";
import { HomeStats } from "@/components/home/HomeStats";
import { ProcessSection } from "@/components/home/ProcessSection";

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
      <HomeStats />
      <ServiceOverview />
      <ProcessSection />
      <FeaturedProjects />
      <CTASection />
    </SiteLayout>
  );
};

export default Home;
