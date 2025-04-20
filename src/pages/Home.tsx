
import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { HomeHero } from "@/components/home/HomeHero";
import { ServiceOverview } from "@/components/home/ServiceOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CTASection } from "@/components/home/CTASection";
import { HomeStats } from "@/components/home/HomeStats";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SkillsShowcase } from "@/components/home/SkillsShowcase";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <SiteLayout>
      <SEOHead 
        title="برنامه نویس بک اند"
        description="آرمین سافت، متخصص برنامه‌نویسی بک‌اند با تجربه در توسعه API، مدیریت دیتابیس و امنیت سرور"
        canonical="/"
        keywords="برنامه نویس بک اند, توسعه API, پایتون, جاوا, پی اچ پی, مدیریت سرور, امنیت وب, برنامه نویسی سمت سرور"
      />
      
      {/* Main content container */}
      <div className="w-full min-h-screen overflow-visible">
        <HomeHero />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HomeStats />
          <ServiceOverview />
          <ProcessSection />
          <SkillsShowcase />
          <TestimonialsSection />
          <FeaturedProjects />
          <CTASection />
        </motion.div>
      </div>
    </SiteLayout>
  );
};

export default Home;
