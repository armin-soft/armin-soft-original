
import { motion } from "framer-motion";
import { Handshake, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CollaborationSection = () => {
  return (
    <section
      id="collaboration-section"
      className="relative py-16 px-4 md:py-28 bg-gradient-to-br from-[#1A1F2C] via-[#211f35] to-[#181026] overflow-hidden"
    >
      {/* نور و افکت پس‌زمینه */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 right-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[400px] bg-violet-400/10 rounded-full blur-2xl" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 25, delay: 0.1 }}
          className="flex items-center justify-center mx-auto bg-gradient-to-br from-purple-500 via-arminred-500 to-violet-700 rounded-full w-20 h-20 mb-7 shadow-2xl border border-white/20 animate-fade-in"
        >
          <Handshake className="text-white w-11 h-11" />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-black bg-gradient-to-r from-arminred-400 via-purple-400 to-arminred-600 bg-clip-text text-transparent mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          آماده همکاری با شما هستم
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-medium max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          اگر به دنبال رشد کسب‌وکارتان یا تسریع پروژه‌های نرم‌افزاری هستید، خوشحال می‌شوم در مسیر توسعه، امنیت یا نوآوری همراه شما باشم.
          <span className="block mt-2 text-arminred-400 font-bold">
            بیایید پروژه رو شروع کنیم!
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="flex flex-col gap-6 md:flex-row md:justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="relative px-8 py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-arminred-500 via-purple-500 to-violet-700 hover:from-arminred-600 hover:via-purple-600 hover:to-violet-800 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
          >
            <Link to="/Contact" className="flex items-center gap-3">
              شروع همکاری
              <Send className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
          <a
            href="mailto:info@arminsoft.ir"
            className="text-arminred-300 font-semibold text-base hover:underline underline-offset-4 transition-colors"
            tabIndex={0}
          >
            یا ارسال ایمیل مستقیم
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

