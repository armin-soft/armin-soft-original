
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Download, ArrowRight } from "lucide-react";

export const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute h-full w-full"
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-arminred-500/20 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-arminred-600/20 rounded-full filter blur-[120px]" />
        </motion.div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-3 rounded-full bg-white/5 backdrop-blur border border-white/10 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-arminred-400 to-arminred-600 flex items-center justify-center">
                  <motion.div whileHover={{ scale: 1.2 }} className="text-3xl font-bold text-white">
                    AS
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
            <h1 className="text-4xl md:text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              آرمین سافت
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              متخصص توسعه نرم‌افزار، امنیت وب و هوش مصنوعی با بیش از ۵ سال تجربه در صنعت فناوری اطلاعات
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800">
              <Link to="/service" className="flex items-center gap-2">
                مشاوره رایگان
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/resume" className="flex items-center gap-2">
                دانلود رزومه
                <Download className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/50 flex flex-col items-center gap-2"
            >
              <span className="text-sm">برای دیدن بیشتر اسکرول کنید</span>
              <ChevronLeft className="h-6 w-6 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
