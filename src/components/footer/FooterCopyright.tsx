
import { motion } from "framer-motion";
import { Copyright } from "lucide-react";

export function FooterCopyright() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 pt-8 border-t border-gray-800/50"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-arminred-500/10">
              <Copyright className="h-4 w-4 text-arminred-500" />
            </div>
            <p className="farsi-numbers">
              تمامی حقوق این وب‌سایت متعلق به{" "}
              <motion.span 
                className="text-white font-medium bg-clip-text text-transparent bg-gradient-to-r from-arminred-400 to-arminred-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                آرمین سافت
              </motion.span>
              {" "}می‌باشد
            </p>
          </div>
          
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-arminred-500 animate-pulse" />
            <span className="farsi-numbers text-xs text-gray-500">۲۰۲۵</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
