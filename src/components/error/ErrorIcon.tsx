
import { motion } from "framer-motion";
import { AlertTriangle, Ban, Clock, CreditCard, FileSearch, FileType, Lock, Package, Search, SearchX, Server, ServerCrash, ServerOff, Shield, ShieldOff, ShieldX, XOctagon } from "lucide-react";

interface ErrorIconProps {
  code: number;
  color: string;
}

export function ErrorIcon({ code, color }: ErrorIconProps) {
  const getIcon = () => {
    switch (code) {
      case 400: return <AlertTriangle className="h-16 w-16 text-arminred-400 transition-all" />;
      case 401: return <ShieldOff className="h-16 w-16 text-arminred-400 transition-all" />;
      case 402: return <CreditCard className="h-16 w-16 text-arminred-400 transition-all" />;
      case 403: return <Lock className="h-16 w-16 text-arminred-400 transition-all" />;
      case 404: return <SearchX className="h-16 w-16 text-arminred-400 transition-all" />;
      case 405: return <Ban className="h-16 w-16 text-arminred-400 transition-all" />;
      case 500: return <ServerCrash className="h-16 w-16 text-arminred-400 transition-all" />;
      case 503: return <ServerOff className="h-16 w-16 text-arminred-400 transition-all" />;
      default: return <AlertTriangle className="h-16 w-16 text-arminred-400 transition-all" />;
    }
  };

  return (
    <motion.div variants={iconVariants} animate="pulse">
      {getIcon()}
    </motion.div>
  );
}

const iconVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
