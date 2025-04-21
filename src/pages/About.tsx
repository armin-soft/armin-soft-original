
import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { getPersonSchema } from "@/components/seo/schemas";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { AboutSkillsSection } from "@/components/about/AboutSkillsSection";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { AboutAnimatedMilestones } from "@/components/about/AboutAnimatedMilestones";

const milestones = [
  { year: "۱۳۹۷", title: "شروع فعالیت", description: "آغاز فعالیت حرفه‌ای در زمینه برنامه‌نویسی و امنیت" },
  { year: "۱۳۹۹", title: "تاسیس آرمین سافت", description: "راه‌اندازی رسمی شرکت آرمین سافت" },
  { year: "۱۴۰۰", title: "گسترش خدمات", description: "توسعه خدمات در زمینه هوش مصنوعی و اتوماسیون" },
  { year: "۱۴۰۲", title: "موفقیت‌های بین‌المللی", description: "همکاری با شرکت‌های خارجی و گسترش فعالیت در سطح بین‌الملل" }
];

export default function About() {
  return (
    <SiteLayout>
      <SEOHead 
        title="درباره من"
        description="آرمین سافت، متخصص امنیت سایبری و برنامه‌نویس، با بیش از 5 سال تجربه در زمینه‌های مختلف فناوری اطلاعات"
        canonical="/About"
        keywords="آرمین سافت, درباره من, امنیت سایبری, هک اخلاقی, برنامه نویسی, متخصص امنیت"
        schema={getPersonSchema()}
      />
      <AboutHeroSection />
      <AboutStorySection milestones={milestones} />
      <AboutSkillsSection />
      <AboutValuesSection />
      <div className="py-16">
        <div className="container px-4 md:px-6">
          <AboutAnimatedMilestones milestones={milestones} />
        </div>
      </div>
    </SiteLayout>
  );
}
