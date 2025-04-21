
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const ConsultSection = () => {
  return (
    <section
      className="relative z-20 py-20 px-4 md:px-0"
      id="consult-section"
      dir="rtl"
    >
      <div className="container mx-auto flex justify-center items-center min-h-[320px]">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-br from-[#1A1F2C]/90 via-[#6E59A5]/80 to-[#E5DEFF]/80 
            rounded-[2.2rem] shadow-2xl shadow-arminred-800/15 
            border border-white/20 backdrop-blur-2xl overflow-hidden 
            flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6 py-10 md:px-12 w-full max-w-3xl"
        >
          {/* خطوط نورانی تزئینی */}
          <div className="absolute -top-24 -right-20 w-72 h-60 bg-gradient-to-tr from-[#7E69AB]/40 to-transparent rotate-12 blur-2xl opacity-70 pointer-events-none" />
          <div className="absolute -bottom-20 -left-24 w-60 h-48 bg-gradient-to-br from-[#1EAEDB]/50 to-transparent blur-2xl opacity-70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent opacity-70 pointer-events-none z-0" />

          <div className="flex-shrink-0 relative z-10 mb-4 md:mb-0">
            <span className="inline-flex items-center justify-center bg-gradient-to-tr from-[#9b87f5] to-[#33C3F0] rounded-2xl p-4 shadow-xl">
              <MessageCircle size={48} className="text-[#7E69AB] drop-shadow-glow" />
            </span>
          </div>
          <div className="flex-1 text-center md:text-right relative z-10 max-w-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7E69AB] via-[#9b87f5] to-[#33C3F0] pb-1">
              برای مشاوره رایگان و صحبت درباره پروژه‌های خود
              <span className="block mt-2">با من در ارتباط باشید</span>
            </h3>
            <p className="mt-4 text-base md:text-lg text-gray-300/90 font-light leading-relaxed md:leading-loose">
              فقط کافیست پیام دهید تا جلسه مشاوره آنلاین و رایگان برای شروع همکاری را هماهنگ کنیم.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] text-white shadow-md hover:from-[#7E69AB] hover:to-[#1EAEDB] hover:scale-105 transition-all duration-300 rounded-xl"
              >
                <a href="mailto:arminsoft.ir@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="ml-2" />
                  ارسال ایمیل
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="bg-white/20 border border-[#6E59A5]/30 text-[#6E59A5] hover:bg-[#F97316] hover:text-white hover:border-[#F97316] hover:scale-105 transition-all duration-300 rounded-xl"
              >
                <a
                  href="https://t.me/arminsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="ml-2" />
                  مشاوره تلگرامی
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
