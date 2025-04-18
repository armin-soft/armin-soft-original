
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        to="/"
        className="group flex items-center space-x-2 space-x-reverse font-bold text-xl md:text-2xl"
      >
        <div className="bg-gradient-to-r from-arminred-700 to-arminred-500 text-white px-3 py-1.5 rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-arminred-500/30">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">آرمین</span>
        </div>
        <span className="text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-arminred-600">سافت</span>
      </Link>
    </motion.div>
  );
}
