
import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { HomeHero } from "@/components/home/HomeHero";
import { ServiceOverview } from "@/components/home/ServiceOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CTASection } from "@/components/home/CTASection";
import { HomeStats } from "@/components/home/HomeStats";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SkillsShowcase } from "@/components/home/SkillsShowcase";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isLoaded) {
    return <div className="min-h-screen bg-black"></div>;
  }
  
  return (
    <SiteLayout>
      <SEOHead 
        title="برنامه نویس بک اند"
        description="آرمین سافت، متخصص برنامه‌نویسی بک‌اند با تجربه در توسعه API، مدیریت دیتابیس و امنیت سرور"
        canonical="/"
        keywords="برنامه نویس بک اند, توسعه API, پایتون, جاوا, پی اچ پی, مدیریت سرور, امنیت وب, برنامه نویسی سمت سرور"
      />
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-arminred-500 origin-left z-50"
        style={{ scaleX }}
      />
      
      <div className="w-full min-h-screen overflow-visible" ref={sectionsRef}>
        <HomeHero />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <HomeStats />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ServiceOverview />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <ProcessSection />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SkillsShowcase />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <TestimonialsSection />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <FeaturedProjects />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <CTASection />
          </motion.div>
        </motion.div>
      </div>
    </SiteLayout>
  );
};

export default Home;
