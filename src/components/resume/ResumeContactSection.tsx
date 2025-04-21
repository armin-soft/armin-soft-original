
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

export function ResumeContactSection() {
  return (
    <section className="relative z-10 py-24 bg-gradient-to-b from-black to-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block mb-3">
            <span className="bg-arminred-500/10 text-arminred-500 text-xs font-medium px-2.5 py-1 rounded">همکاری</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            برای پروژه بعدی خود با من تماس بگیرید
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            برای مشاوره رایگان و صحبت درباره پروژه‌های خود می‌توانید از طریق فرم تماس با من در ارتباط باشید
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg shadow-arminred-600/20 group">
              <Link to="/contact" className="flex items-center gap-2 relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-arminred-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">تماس با من</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-700 hover:border-arminred-500/50 hover:bg-arminred-500/5 transition-all duration-300">
              <a href="#" className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                دانلود رزومه
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
