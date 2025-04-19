
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    toast({
      title: "صفحه مورد نظر یافت نشد",
      description: `مسیر "${location.pathname}" در سایت وجود ندارد.`,
      variant: "destructive"
    });
  }, [location.pathname]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6">
      <div className="relative z-10 text-center max-w-lg">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-6 inline-block">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="text-[150px] md:text-[180px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-arminred-400 via-arminred-600 to-arminred-700"
            >
              404
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-arminred-600/20 to-arminred-800/20 rounded-full blur-lg"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-arminred-500/30 rounded-full p-4">
                <Search className="w-8 h-8 text-arminred-500" strokeWidth={1.5} />
              </div>
            </motion.div>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-3xl md:text-4xl font-bold mt-10 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
          >
            صفحه مورد نظر یافت نشد
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-300 mb-8 text-lg"
          >
            متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-br from-arminred-500 to-arminred-700 hover:from-arminred-600 hover:to-arminred-800 border-none text-base">
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
              onClick={() => window.history.back()}
              className="w-full sm:w-auto border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-base"
            >
              <ArrowLeft className="ml-2 h-5 w-5" />
              بازگشت به صفحه قبل
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto hover:bg-white/5 text-base"
            >
              <RefreshCcw className="ml-2 h-5 w-5" />
              تلاش مجدد
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-gray-400 text-sm"
        >
          <p>اگر فکر می‌کنید این خطا اشتباه است، لطفاً با پشتیبانی تماس بگیرید</p>
          <Link to="/contact" className="mt-2 inline-block text-arminred-400 hover:text-arminred-300 underline">
            تماس با پشتیبانی
          </Link>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-[10%] right-[10%] w-20 h-20 bg-arminred-500/10 rounded-full filter blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-[20%] left-[10%] w-40 h-40 bg-arminred-600/5 rounded-full filter blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-purple-500/5 rounded-full filter blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
      </div>
    </div>
  );
};

export default NotFound;
