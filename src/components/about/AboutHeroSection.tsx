
import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { AboutParticlesBackground } from "./AboutParticlesBackground";
import { AboutHeroTags } from "./AboutHeroTags";

export function AboutHeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <AboutParticlesBackground />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ scale: 0.52, opacity: 0, rotate: -12 }}
              animate={{ scale: [0.54, 1, 0.98], opacity: 1, rotate: 0 }}
              transition={{ duration: 0.92, ease: "easeOut" }}
              className="relative mb-8 z-10 drop-shadow-lg"
            >
              <div className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl animate-fade-in">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-arminred-400 via-arminred-600 to-purple-800 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center p-2">
                      <motion.div 
                        whileHover={{ scale: 1.24, rotate: 7 }} 
                        transition={{ type: "spring", stiffness: 180 }}
                        className="text-white drop-shadow-lg"
                      >
                        <BadgeCheck className="w-20 h-20 md:w-32 md:h-32 text-arminred-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.86)] animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="absolute -inset-7 border-2 border-dashed border-arminred-500/30 rounded-full animate-spin-slow"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                aria-hidden="true"
              />
              <div className="absolute -inset-14 border border-arminred-500/10 rounded-full"></div>
            </motion.div>
          </div>
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start lg:text-right space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <Badge className="bg-arminred-600/20 text-arminred-500 text-xs mb-4 py-1 animate-fade-in">بیش از ۵ سال تجربه</Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400 shadow-lg drop-shadow-2xl animate-fade-in">
                آرمین سافت
              </h1>
              <div className="bg-gradient-to-r from-arminred-600 to-arminred-400 h-1 w-32 rounded-full mb-6"></div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed animate-fade-in">
                توسعه‌دهنده نرم‌افزار، متخصص امنیت و هک اخلاقی، با تجربه در زمینه هوش مصنوعی و اتوماسیون
              </p>
            </motion.div>

            <AboutHeroTags tags={["امنیت سایبری", "برنامه‌نویسی وب", "هوش مصنوعی", "اتوماسیون", "مشاوره فنی"]} />

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 border-0 shadow-lg hover:shadow-arminred-500/20">
                <Link to="/contact" className="flex items-center">
                  تماس با من
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Link>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white">
                    <a href="#" className="flex items-center">
                      <Download className="ml-2 h-4 w-4" />
                      دریافت رزومه
                    </a>
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
            </motion.div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <div className="w-5 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-white rounded-full"
              />
            </div>
            <span className="text-white/40 text-xs mt-2">اسکرول کنید</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
