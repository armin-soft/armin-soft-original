
import { Link } from "react-router-dom";
import { Shield, Code } from "lucide-react";

export function Logo() {
  return (
    <Link
      to="/"
      className="group flex items-center space-x-2 space-x-reverse font-bold text-xl md:text-2xl"
    >
      <div className="bg-gradient-to-r from-arminred-700 to-arminred-500 text-white p-2 md:p-2.5 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-arminred-500/30 flex items-center justify-center">
        <Shield className="h-6 w-6 text-white" strokeWidth={2.5} />
      </div>
      <span className="text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-arminred-600">آرمین سافت</span>
    </Link>
  );
}
