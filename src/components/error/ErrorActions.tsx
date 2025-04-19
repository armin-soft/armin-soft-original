
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Undo2, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";

interface ErrorActionsProps {
  showDetails: boolean;
  onToggleDetails: () => void;
  onNavigateBack: () => void;
}

export function ErrorActions({ showDetails, onToggleDetails, onNavigateBack }: ErrorActionsProps) {
  return (
    <motion.div 
      variants={containerVariants}
      className="flex flex-wrap gap-4 justify-center"
    >
      <motion.div variants={itemVariants}>
        <Button 
          asChild 
          size="lg" 
          className="bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 border-none text-white shadow-lg hover:shadow-arminred-600/20"
        >
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            بازگشت به صفحه اصلی
          </Link>
        </Button>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Button 
          variant="outline" 
          size="lg" 
          onClick={onNavigateBack}
          className="border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm"
        >
          <Undo2 className="ml-2 h-5 w-5" />
          بازگشت به صفحه قبلی
        </Button>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Button 
          variant="ghost"
          size="lg"
          onClick={onToggleDetails}
          className="hover:bg-white/5"
        >
          <FileSearch className="ml-2 h-5 w-5" />
          {showDetails ? "پنهان کردن جزئیات" : "نمایش جزئیات"}
        </Button>
      </motion.div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
