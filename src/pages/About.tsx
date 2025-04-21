import { SiteLayout } from "@/components/site-layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { getPersonSchema } from "@/components/seo/schemas";
import { useRef, useState } from "react";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutStorySection } from "@/components/about/AboutStorySection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Timeline, TimelineItem } from "@/components/ui/timeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  MapPin,
  Star,
  Code,
  Shield,
  Bot,
  Server,
  Database,
  Cpu,
  ArrowRight,
  Download,
  ExternalLink,
  BadgeCheck,
  Award,
  Heart,
  Coffee,
  Lightbulb,
  Clock,
  BookOpen,
  Anchor,
  Compass,
  Github,
  Globe,
  Terminal,
  Mail,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { AboutParticlesBackground } from "@/components/about/AboutParticlesBackground";
import { AboutAnimatedMilestones } from "@/components/about/AboutAnimatedMilestones";
import { AboutHeroTags } from "@/components/about/AboutHeroTags";

const skills = [
  { name: "برنامه‌نویسی", level: 95, icon: <Code className="h-5 w-5 text-arminred-600" />, description: "تسلط به زبان‌های PHP، JavaScript، Python و فریمورک‌های مختلف" },
  { name: "هک و امنیت", level: 90, icon: <Shield className="h-5 w-5 text-arminred-600" />, description: "تست نفوذ، امنیت وب و شبکه، مهندسی معکوس" },
  { name: "هوش مصنوعی", level: 85, icon: <Bot className="h-5 w-5 text-arminred-600" />, description: "یادگیری ماشین، پردازش زبان طبیعی و سیستم‌های خبره" },
  { name: "طراحی API", level: 88, icon: <Server className="h-5 w-5 text-arminred-600" />, description: "طراحی و پیاده‌سازی RESTful و GraphQL APIs" },
  { name: "مدیریت دیتابیس", level: 92, icon: <Database className="h-5 w-5 text-arminred-600" />, description: "تسلط به SQL و NoSQL و بهینه‌سازی عملکرد" },
  { name: "اتوماسیون", level: 87, icon: <Cpu className="h-5 w-5 text-arminred-600" />, description: "سیستم‌های اتوماسیون هوشمند و اسکریپت‌نویسی" },
];

const containerRef = useRef(null);
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"]
});

const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

const [tab, setTab] = useState("skills");
const [isOpen, setIsOpen] = useState(false);

const valuesData = [
  {
    icon: <Star className="h-10 w-10 text-arminred-600" />,
    title: "کیفیت",
    description: "تعهد به ارائه کار با بالاترین سطح کیفیت و استاندارد"
  },
  {
    icon: <Code className="h-10 w-10 text-arminred-600" />,
    title: "نوآوری",
    description: "استفاده از فناوری‌های جدید و راهکارهای خلاقانه برای حل مشکلات"
  },
  {
    icon: <Shield className="h-10 w-10 text-arminred-600" />,
    title: "امنیت",
    description: "اولویت دادن به امنیت در تمامی مراحل طراحی و توسعه نرم افزار"
  },
  {
    icon: <Heart className="h-10 w-10 text-arminred-600" />,
    title: "اشتیاق",
    description: "انجام هر پروژه با عشق و تعهد به نتیجه نهایی"
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-arminred-600" />,
    title: "خلاقیت",
    description: "ارائه راه‌حل‌های خلاقانه و منحصربه‌فرد برای چالش‌های پیچیده"
  },
  {
    icon: <Clock className="h-10 w-10 text-arminred-600" />,
    title: "تعهد",
    description: "پایبندی به زمان‌بندی پروژه‌ها و تحویل به موقع"
  }
];

const milestones = [
  { year: "۱۳۹۷", title: "شروع فعالیت", description: "آغاز فعالیت حرفه‌ای در زمینه برنامه‌نویسی و امنیت" },
  { year: "۱۳۹۹", title: "تاسیس آرمین سافت", description: "راه‌اندازی رسمی شرکت آرمین سافت" },
  { year: "۱۴۰۰", title: "گسترش خدمات", description: "توسعه خدمات در زمینه هوش مصنوعی و اتوماسیون" },
  { year: "۱۴۰۲", title: "موفقیت‌های بین‌المللی", description: "همکاری با شرکت‌های خارجی و گسترش فعالیت در سطح بین‌الملل" }
];

const About = () => {
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
    </SiteLayout>
  );
};

export default About;
