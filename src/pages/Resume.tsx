
import React, { useEffect } from "react";
import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ResumeHero } from "@/components/resume/ResumeHero";
import { ResumeActionsSection } from "@/components/resume/ResumeActionsSection";
import { ResumeStatsSection } from "@/components/resume/ResumeStatsSection";
import { ResumeRecordsSection } from "@/components/resume/ResumeRecordsSection";
import { ResumeSkillsSection } from "@/components/resume/ResumeSkillsSection";
import { ResumeProjectsSection } from "@/components/resume/ResumeProjectsSection";
import { ResumeContactSection } from "@/components/resume/ResumeContactSection";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SiteLayout>
      <SEOHead 
        title="رزومه"
        description="رزومه حرفه‌ای آرمین سافت - متخصص برنامه‌نویسی بک‌اند با تجربه در توسعه نرم‌افزار، مدیریت سرور و امنیت"
        canonical="/Resume"
        keywords="رزومه برنامه نویس, سوابق کاری, تجربیات برنامه نویسی, مهارت‌های فنی, گواهینامه‌های تخصصی"
      />
      <ResumeHero />
      <main className="relative bg-gradient-to-b from-black to-gray-900 farsi-numbers">
        <ResumeActionsSection />
        <ResumeStatsSection />
        <ResumeRecordsSection />
        <ResumeSkillsSection />
        <ResumeProjectsSection />
        <ResumeContactSection />
      </main>
    </SiteLayout>
  );
};

export default Resume;
