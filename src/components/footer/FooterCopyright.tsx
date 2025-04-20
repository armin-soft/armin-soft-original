
import { motion } from "framer-motion";
import { Copyright } from "lucide-react";

export function FooterCopyright() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="relative mt-16 pt-8 overflow-hidden"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-arminred-500/5 via-arminred-500/2 to-transparent"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl border border-white/5 p-6"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center gap-4">
            <motion.div 
              className="p-2.5 rounded-xl bg-gradient-to-br from-arminred-500/20 to-arminred-500/10 border border-arminred-500/20"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Copyright className="h-5 w-5 text-arminred-500" />
            </motion.div>
            
            <p className="farsi-numbers text-base">
              تمامی حقوق این وب‌سایت متعلق به{" "}
              <motion.span 
                className="relative inline-block font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-arminred-400 via-white to-arminred-500">
                  آرمین سافت
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-arminred-500/20 to-arminred-500/10 blur-xl"
                  animate={{
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.span>
              {" "}می‌باشد
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
