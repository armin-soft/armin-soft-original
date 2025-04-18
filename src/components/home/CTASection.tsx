
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              آماده همکاری با شما هستم
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              برای مشاوره رایگان و صحبت درباره پروژه‌های خود با من در ارتباط باشید
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800">
                <Link to="/contact" className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  شروع گفتگو
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/service" className="flex items-center gap-2">
                  مشاهده خدمات
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="pt-8 flex flex-col items-center space-y-4">
              <p className="text-gray-500">راه‌های ارتباطی مستقیم</p>
              <div className="flex items-center gap-4">
                <Link 
                  to="tel:+989358983854"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ۰۹۳۵۸۹۸۳۸۵۴
                </Link>
                <span className="text-gray-700">|</span>
                <Link 
                  to="mailto:info@armin-soft.ir"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@armin-soft.ir
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
