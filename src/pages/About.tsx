
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { getPersonSchema } from "@/components/seo/schemas";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutSkillsSection } from "@/components/about/AboutSkillsSection";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { AboutExpertiseSection } from "@/components/about/AboutExpertiseSection";
import { AboutTimelineSection } from "@/components/about/AboutTimelineSection";
import { AboutStatisticsSection } from "@/components/about/AboutStatisticsSection";
import { AboutParallaxBackground } from "@/components/about/AboutParallaxBackground";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  { 
    year: "۱۴۰۲", 
    title: "موفقیت‌های بین‌المللی", 
    description: "همکاری با شرکت‌های خارجی و گسترش فعالیت در سطح بین‌الملل"
  }
];

export default function About() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <SiteLayout>
      <SEOHead 
        title="درباره من"
        description="آرمین سافت، متخصص امنیت سایبری و برنامه‌نویس، با بیش از 5 سال تجربه در زمینه‌های مختلف فناوری اطلاعات"
        canonical="/About"
        keywords="آرمین سافت, درباره من, امنیت سایبری, هک اخلاقی, برنامه نویسی, متخصص امنیت"
        schema={getPersonSchema()}
      />
      <div className="relative">
        <AboutParallaxBackground />
        
        <motion.div style={{ opacity }} className="absolute inset-0 z-10 pointer-events-none">
          <div className="h-screen bg-gradient-to-b from-black/10 to-transparent" />
        </motion.div>
        
        <div className="relative z-20">
          <AboutHeroSection />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <AboutExpertiseSection />
            <AboutTimelineSection />
            <AboutStorySection milestones={milestones} />
            <AboutStatisticsSection />
            <AboutSkillsSection />
            <AboutValuesSection />
          </motion.div>
        </div>
      </div>
    </SiteLayout>
  );
}
