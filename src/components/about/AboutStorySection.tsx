import { motion } from "framer-motion";
import { MapPin, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

export function AboutStorySection({ milestones }: { milestones: { year: string; title: string; description: string }[] }) {
  return (
    <motion.section 
      className="py-20 md:py-32 bg-gradient-to-b from-black to-black/95 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:30px_30px]" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8 order-2 lg:order-1"
          >
            <div>
              <div className="inline-flex items-center mb-4">
                <div className="h-1 w-6 bg-arminred-500 rounded-full mr-3"></div>
                <p className="text-arminred-500 font-medium">درباره من</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                داستان و مسیر حرفه‌ای من
              </h2>
              <div className="prose prose-invert max-w-none space-y-6">
                <p className="text-lg leading-relaxed farsi-numbers">
                  من آرمین اسکندری، با نام حرفه‌ای <span className="text-arminred-600 font-semibold">آرمین سافت</span>، متولد ۲۸ خرداد ۱۳۷۸ در تهران، یک توسعه‌دهنده نرم‌افزار و متخصص امنیت سایبری هستم.
                </p>
                <p className="text-lg leading-relaxed farsi-numbers">
                  با بیش از ۵ سال تجربه در زمینه‌های مختلف فناوری اطلاعات، تمرکز اصلی من بر توسعه نرم‌افزارهای تخصصی، امنیت و هک اخلاقی و طراحی سیستم‌های هوشمند است.
                </p>
                <p className="text-lg leading-relaxed">
                  همواره در تلاش بوده‌ام تا با ترکیب دانش تکنیکی و خلاقیت، راهکارهای نوآورانه برای مشکلات پیچیده ارائه دهم. سفر من در دنیای فناوری اطلاعات با علاقه شخصی به کامپیوتر و برنامه‌نویسی آغاز شد و امروز به یک حرفه پویا تبدیل شده است.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4 space-x-reverse bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 transition-all duration-300 hover:border-arminred-500/30 hover:shadow-lg hover:shadow-arminred-500/5">
                <MapPin className="text-arminred-600 h-6 w-6" />
                <div>
                  <h3 className="font-semibold text-lg">محل سکونت</h3>
                  <p className="text-muted-foreground">ایران، تهران، پاکدشت</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 border-0 shadow-lg hover:shadow-arminred-500/20">
                  <Link to="/contact" className="flex items-center">
                    تماس با من
                    <ArrowRight className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white flex items-center">
                      <Download className="ml-2 h-4 w-4" />
                      دریافت رزومه
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>دانلود رزومه</DialogTitle>
                      <DialogDescription>
                        لطفاً فرمت مورد نظر خود را برای دانلود رزومه انتخاب کنید.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4 py-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Download className="ml-2 h-4 w-4" />
                        دانلود PDF
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Download className="ml-2 h-4 w-4" />
                        دانلود Word
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-arminred-600/20 to-purple-600/20 rounded-2xl blur-3xl transform -rotate-6"></div>
              <div className="relative">
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
