
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function LoadingLogo() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center mb-8"
    >
      <motion.div
        animate={{ 
          rotate: 360,
          borderColor: ["#881337", "#9f1239", "#be123c", "#e11d48", "#f43f5e", "#be123c", "#881337"]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="relative w-24 h-24 rounded-full border-t-4 border-r-4 border-arminred-600 mb-4"
      >
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Shield className="h-10 w-10 text-arminred-500" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="bg-arminred-600 text-white px-2 py-1 rounded">آرمین</span>
          <span>سافت</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          در حال آماده‌سازی...
        </p>
      </motion.div>
    </motion.div>
  );
}
