
import { motion } from "framer-motion";
import { Download, ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ResumeHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute h-full w-full"
        >
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-arminred-500/20 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-arminred-600/20 rounded-full filter blur-[120px]" />
        </motion.div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-3 rounded-full bg-white/5 backdrop-blur border border-white/10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-arminred-400 to-arminred-600 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.2 }} className="text-white">
                    <BadgeCheck className="w-8 h-8" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gradient">
              رزومه حرفه‌ای
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              متخصص برنامه‌نویسی و امنیت با بیش از ۵ سال تجربه در صنعت فناوری اطلاعات
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800">
              <Download className="ml-2 h-4 w-4" />
              دانلود رزومه
            </Button>
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              درخواست همکاری
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
