import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { 
  AlertTriangle, Ban, Clock, CreditCard, Database, FileSearch, FileType, 
  FileX, HardDrive, Home, Link2, Lock, Package, Search, SearchX, 
  Server, ServerCrash, ServerOff, Shield, ShieldOff, ShieldX, Undo2, Wrench, XOctagon 
} from "lucide-react";

const errorDetails = {
  400: {
    title: "درخواست نامعتبر",
    icon: <AlertTriangle className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "درخواست شما قابل پردازش نیست. لطفاً اطلاعات ورودی را بررسی کنید.",
    color: "from-amber-400/20 via-amber-500/10 to-amber-600/5"
  },
  401: {
    title: "عدم احراز هویت",
    icon: <ShieldOff className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "شما اجازه دسترسی به این صفحه را ندارید. لطفاً وارد حساب کاربری خود شوید.",
    color: "from-blue-400/20 via-blue-500/10 to-blue-600/5"
  },
  402: {
    title: "نیاز به پرداخت",
    icon: <CreditCard className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "برای دسترسی به این بخش باید هزینه آن را پرداخت کنید.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  403: {
    title: "دسترسی غیر مجاز",
    icon: <Lock className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "شما اجازه دسترسی به این بخش را ندارید.",
    color: "from-red-400/20 via-red-500/10 to-red-600/5"
  },
  404: {
    title: "صفحه یافت نشد",
    icon: <SearchX className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.",
    color: "from-purple-400/20 via-purple-500/10 to-purple-600/5"
  },
  405: {
    title: "روش غیرمجاز",
    icon: <Ban className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "روش درخواست شما برای این آدرس پشتیبانی نمی‌شود.",
    color: "from-yellow-400/20 via-yellow-500/10 to-yellow-600/5"
  },
  406: {
    title: "غیرقابل قبول",
    icon: <XOctagon className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "سرور نمی‌تواند محتوایی که با معیارهای شما مطابقت داشته باشد ارائه دهد.",
    color: "from-pink-400/20 via-pink-500/10 to-pink-600/5"
  },
  407: {
    title: "نیاز به احراز هویت پروکسی",
    icon: <Shield className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "شما باید ابتدا در پروکسی احراز هویت شوید.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  408: {
    title: "زمان درخواست به پایان رسید",
    icon: <Clock className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "سرور در زمان مشخص شده پاسخی دریافت نکرد. لطفاً دوباره تلاش کنید.",
    color: "from-blue-400/20 via-blue-500/10 to-blue-600/5"
  },
  409: {
    title: "تداخل",
    icon: <GitMerge className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "درخواست شما با وضعیت فعلی منبع مورد نظر تداخل دارد.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  410: {
    title: "از بین رفته",
    icon: <Trash2 className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "صفحه مورد نظر دیگر در دسترس نیست و این وضعیت دائمی است.",
    color: "from-red-400/20 via-red-500/10 to-red-600/5"
  },
  411: {
    title: "طول مورد نیاز",
    icon: <FileType className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "سرور نمی‌تواند بدون مشخص شدن طول محتوا، درخواست را پردازش کند.",
    color: "from-yellow-400/20 via-yellow-500/10 to-yellow-600/5"
  },
  412: {
    title: "پیش‌شرط ناموفق",
    icon: <ShieldX className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "یکی از پیش‌شرط‌های مشخص شده در هدر درخواست، نادرست است.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  413: {
    title: "محتوای درخواست بیش از حد بزرگ",
    icon: <Package className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "اندازه درخواست شما بیش از حد مجاز است.",
    color: "from-red-400/20 via-red-500/10 to-red-600/5"
  },
  414: {
    title: "URI بیش از حد طولانی",
    icon: <Link2 className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "آدرس درخواستی بیش از حد طولانی است.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  415: {
    title: "نوع رسانه پشتیبانی نشده",
    icon: <FileType className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "فرمت محتوای درخواستی پشتیبانی نمی‌شود.",
    color: "from-yellow-400/20 via-yellow-500/10 to-yellow-600/5"
  },
  416: {
    title: "محدوده درخواستی غیرقابل تحقق",
    icon: <FileSearch className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "محدوده درخواستی برای این منبع قابل ارائه نیست.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  417: {
    title: "انتظار ناموفق",
    icon: <AlertTriangle className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "سرور نمی‌تواند الزامات مشخص شده در هدر Expect را برآورده کند.",
    color: "from-yellow-400/20 via-yellow-500/10 to-yellow-600/5"
  },
  422: {
    title: "موجودیت غیرقابل پردازش",
    icon: <XOctagon className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "درخواست شما دارای خطای نحوی است و قابل پردازش نیست.",
    color: "from-red-400/20 via-red-500/10 to-red-600/5"
  },
  423: {
    title: "قفل شده",
    icon: <Lock className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "منبع مورد درخواست قفل شده و در حال حاضر در دسترس نیست.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  424: {
    title: "وابستگی ناموفق",
    icon: <GitFork className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "درخواست قبلی ناموفق بود، بنابراین این درخواست نیز ناموفق است.",
    color: "from-red-400/20 via-red-500/10 to-red-600/5"
  },
  500: {
    title: "خطای داخلی سرور",
    icon: <ServerCrash className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "سرور با مشکلی مواجه شده است. لطفاً بعداً دوباره تلاش کنید.",
    color: "from-red-400/20 via-red-500/10 to-red-600/5"
  },
  501: {
    title: "پیاده‌سازی نشده",
    icon: <Wrench className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "سرور قابلیت پاسخگویی به این درخواست را ندارد.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  502: {
    title: "درگاه نامعتبر",
    icon: <ServerCrash className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "سرور در حال عمل به عنوان دروازه یا پروکسی، پاسخ نامعتبری از سرور بالادستی دریافت کرد.",
    color: "from-red-400/20 via-red-500/10 to-red-600/5"
  },
  503: {
    title: "سرویس در دسترس نیست",
    icon: <ServerOff className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "سرور موقتاً در دسترس نیست. لطفاً بعداً دوباره تلاش کنید.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  504: {
    title: "زمان درگاه به پایان رسید",
    icon: <Clock className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "سرور در حال عمل به عنوان دروازه یا پروکسی، به موقع از سرور بالادستی پاسخ دریافت نکرد.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  505: {
    title: "نسخه HTTP پشتیبانی نشده",
    icon: <ServerCrash className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "سرور نسخه پروتکل HTTP درخواستی را پشتیبانی نمی‌کند.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  506: {
    title: "گزینه‌های متناقض",
    icon: <AlertTriangle className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "منبع دارای چندین نمایش است که هر کدام مذاکره داخلی دارند.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  507: {
    title: "فضای ناکافی",
    icon: <HardDrive className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "سرور فضای کافی برای تکمیل درخواست ندارد.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  },
  510: {
    title: "گسترش نیافته",
    icon: <ServerCrash className="h-16 w-16 text-arminred-400 transition-all" />,
    description: "برای پردازش این درخواست به گسترش‌های بیشتری نیاز است.",
    color: "from-green-400/20 via-green-500/10 to-green-600/5"
  }
};

const defaultError = {
  title: "خطای ناشناخته",
  icon: <AlertTriangle className="h-16 w-16 text-arminred-400 transition-all" />,
  description: "یک خطای ناشناخته رخ داده است. لطفاً بعداً دوباره تلاش کنید.",
  color: "from-gray-400/20 via-gray-500/10 to-gray-600/5"
};

const ErrorPage = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const errorCode = code ? parseInt(code) : 404;
  const error = errorDetails[errorCode as keyof typeof errorDetails] || defaultError;
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(() => {
    console.error(`خطای ${errorCode}: کاربر به صفحه با کد خطای ${errorCode} هدایت شد.`);
    
    toast({
      title: error.title,
      description: `خطای ${errorCode}: ${error.description}`,
      variant: "destructive"
    });
  }, [errorCode, error]);

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

  const detailsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

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

  const getErrorDetail = () => {
    switch (errorCode) {
      case 400:
        return "این خطا معمولاً زمانی رخ می‌دهد که سرور نمی‌تواند درخواست ارسال شده را درک کند. بررسی کنید که داده‌های ارسالی صحیح و در قالب مورد انتظار باشند.";
      case 401:
        return "برای دسترسی به این منبع، شما نیاز به احراز هویت دارید. لطفاً وارد حساب کاربری خود شوید یا اگر حساب ندارید، یک حساب جدید ایجاد کنید.";
      case 403:
        return "سرور درخواست شما را فهمید، اما از اجرای آن خودداری می‌کند. این معمولاً به دلیل محدودیت‌های دسترسی است. حتی با ورود به سیستم، شما مجوز لازم را ندارید.";
      case 404:
        return "منبع درخواست شده در سرور یافت نشد. ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه حذف شده باشد. لطفاً آدرس وارد شده را بررسی کنید.";
      case 500:
        return "یک مشکل داخلی در سرور رخ داده است. این خطا معمولاً به دلیل وجود مشکلاتی در سرور است و ارتباطی به درخواست شما ندارد. لطفاً بعداً دوباره تلاش کنید.";
      default:
        return "جزئیات بیشتری برای این کد خطا در دسترس نیست. لطفاً برای اطلاعات بیشتر با پشتیبانی تماس بگیرید.";
    }
  };

  return (
    <SiteLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <motion.div 
              variants={itemVariants} 
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${error.color} rounded-full blur-3xl opacity-20`}></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-full p-8">
                  <motion.div variants={iconVariants} animate="pulse">
                    {error.icon}
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-8xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent"
            >
              {errorCode}
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="h-1 w-24 bg-gradient-to-r from-arminred-400 to-arminred-600 mx-auto my-6 rounded-full"
            ></motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              {error.title}
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 mb-8 text-lg"
            >
              {error.description}
            </motion.p>
            
            <AnimatePresence>
              {showDetails && (
                <motion.div 
                  variants={detailsVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mb-8 text-gray-300"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 text-right">
                    <h3 className="text-xl font-bold mb-3 text-arminred-400">جزئیات خطا</h3>
                    <p className="mb-2">{getErrorDetail()}</p>
                    <div className="mt-4 p-3 bg-black/30 rounded-md text-gray-400 font-mono text-sm overflow-x-auto">
                      <p className="mb-1">کد خطا: {errorCode}</p>
                      <p className="mb-1">زمان: {new Date().toLocaleString('fa-IR')}</p>
                      <p>مسیر: {window.location.pathname}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
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
                  onClick={() => navigate(-1)}
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
                  onClick={() => setShowDetails(!showDetails)}
                  className="hover:bg-white/5"
                >
                  <FileSearch className="ml-2 h-5 w-5" />
                  {showDetails ? "پنهان کردن جزئیات" : "نمایش جزئیات"}
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-16 text-gray-400 text-sm"
            >
              <p>اگر فکر می‌کنید این خطا اشتباه است، لطفاً با پشتیبانی تماس بگیرید</p>
              <Link 
                to="/contact" 
                className="mt-2 inline-block text-arminred-400 hover:text-arminred-300 relative group"
              >
                تماس با پشتیبانی
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-arminred-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-arminred-500/5 to-arminred-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-600/10 rounded-full filter blur-3xl"></div>
          <motion.div 
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8, 
              ease: "easeInOut", 
              repeat: Infinity,
            }}
            className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/5 to-pink-600/10 rounded-full filter blur-3xl"
          ></motion.div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default ErrorPage;
