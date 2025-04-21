
import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { HomeHero } from "@/components/home/HomeHero";
import { ServiceOverview } from "@/components/home/ServiceOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CTASection } from "@/components/home/CTASection";
import { HomeStats } from "@/components/home/HomeStats";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SkillsShowcase } from "@/components/home/SkillsShowcase";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });
  
  const opacitySection1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const opacitySection2 = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const opacitySection3 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const opacitySection4 = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const opacitySection5 = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  
  return (
    <SiteLayout>
      <SEOHead 
        title="برنامه نویس بک اند"
        description="آرمین سافت، متخصص برنامه‌نویسی بک‌اند با تجربه در توسعه API، مدیریت دیتابیس و امنیت سرور"
        canonical="/"
        keywords="برنامه نویس بک اند, توسعه API, پایتون, جاوا, پی اچ پی, مدیریت سرور, امنیت وب, برنامه نویسی سمت سرور"
      />
      
      <div ref={scrollRef} className="w-full min-h-screen overflow-visible perspective-3d">
        <HomeHero />
        
        <div className="relative z-10">
          <motion.div style={{ opacity: opacitySection1 }}>
            <HomeStats />
          </motion.div>
          
          <motion.div style={{ opacity: opacitySection2 }}>
            <ServiceOverview />
          </motion.div>
          
          <motion.div style={{ opacity: opacitySection3 }}>
            <ProcessSection />
          </motion.div>
          
          <motion.div style={{ opacity: opacitySection4 }}>
            <SkillsShowcase />
          </motion.div>
          
          <motion.div style={{ opacity: opacitySection5 }}>
            <FeaturedProjects />
            <CTASection />
          </motion.div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default Home;
