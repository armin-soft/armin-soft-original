
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center space-x-2 space-x-reverse font-bold text-xl md:text-2xl"
    >
      <div className="bg-gradient-to-r from-arminred-700 to-arminred-500 text-white px-2 py-1 md:px-3 md:py-1.5 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-arminred-500/30">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">آرمین</span>
      </div>
      <span className="text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-arminred-600">سافت</span>
    </Link>
  );
}
