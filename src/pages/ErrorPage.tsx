import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { SiteLayout } from "@/components/site-layout";
import { motion } from "framer-motion";
import { toPersianNumbers } from "@/utils/numberUtils";
import { ErrorBackground } from "@/components/error/ErrorBackground";
import { ErrorIcon } from "@/components/error/ErrorIcon";
import { ErrorActions } from "@/components/error/ErrorActions";
import { ErrorDetails } from "@/components/error/ErrorDetails";

const errorDetails = {
  400: {
    title: "درخواست نامعتبر",
    color: "from-amber-400/20 via-amber-500/10 to-amber-600/5",
    description: "این خطا معمولاً زمانی رخ می‌دهد که سرور نمی‌تواند درخواست ارسال شده را درک کند."
  },
  401: {
    title: "عدم احراز هویت",
    color: "from-blue-400/20 via-blue-500/10 to-blue-600/5",
    description: "برای دسترسی به این منبع، شما نیاز به احراز هویت دارید."
  },
  402: {
    title: "نیاز به پرداخت",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "دسترسی به این منبع نیازمند پرداخت است."
  },
  403: {
    title: "دسترسی غیر مجاز",
    color: "from-red-400/20 via-red-500/10 to-red-600/5",
    description: "سرور درخواست شما را فهمید، اما از اجرای آن خودداری می‌کند."
  },
  404: {
    title: "صفحه یافت نشد",
    color: "from-purple-400/20 via-purple-500/10 to-purple-600/5",
    description: "منبع درخواست شده در سرور یافت نشد."
  },
  405: {
    title: "روش غیرمجاز",
    color: "from-yellow-400/20 via-yellow-500/10 to-yellow-600/5",
    description: "روش استفاده شده برای دسترسی به منبع مجاز نیست."
  },
  406: {
    title: "غیرقابل قبول",
    color: "from-pink-400/20 via-pink-500/10 to-pink-600/5",
    description: "سرور نمی‌تواند به درخواست شما با محتوایی که قابل قبول باشد، پاسخ دهد."
  },
  407: {
    title: "نیاز به احراز هویت پروکسی",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "برای دسترسی به منبع، باید از طریق یک پروکسی احراز هویت کنید."
  },
  408: {
    title: "زمان درخواست به پایان رسید",
    color: "from-blue-400/20 via-blue-500/10 to-blue-600/5",
    description: "سرور منتظر درخواست کامل از سوی شما بود، اما زمان به پایان رسید."
  },
  409: {
    title: "تداخل",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "درخواست شما با وضعیت فعلی منبع در تضاد است."
  },
  410: {
    title: "از بین رفته",
    color: "from-red-400/20 via-red-500/10 to-red-600/5",
    description: "منبع مور�� نظر قبلاً وجود داشته اما دیگر در دسترس نیست."
  },
  411: {
    title: "طول مورد نیاز",
    color: "from-yellow-400/20 via-yellow-500/10 to-yellow-600/5",
    description: "درخواست شما بیش از حد طولانی است."
  },
  412: {
    title: "پیش‌شرط ناموفق",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "پیش‌شرطی برای اجرای درخواست شما ناموفق بود."
  },
  413: {
    title: "محتوای درخواست بیش از حد بزرگ",
    color: "from-red-400/20 via-red-500/10 to-red-600/5",
    description: "محتوای درخواست شما بیش از حد بزرگ است."
  },
  414: {
    title: "URI بیش از حد طولانی",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "URI درخواست شما بیش از حد طولانی است."
  },
  415: {
    title: "نوع رسانه پشتیبانی نشده",
    color: "from-yellow-400/20 via-yellow-500/10 to-yellow-600/5",
    description: "نوع رسانه درخواست شما پشتیبانی نمی‌شود."
  },
  416: {
    title: "محدوده درخواستی غیرقابل تحقق",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "محدوده درخواستی شما غیرقابل تحقق است."
  },
  417: {
    title: "انتظار ناموفق",
    color: "from-yellow-400/20 via-yellow-500/10 to-yellow-600/5",
    description: "انتظاری برای اجرای درخواست شما ناموفق بود."
  },
  422: {
    title: "موجودیت غیرقابل پردازش",
    color: "from-red-400/20 via-red-500/10 to-red-600/5",
    description: "موجودیت درخواست شما غیرقابل پردازش است."
  },
  423: {
    title: "قفل شده",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "درخواست شما قفل شده است."
  },
  424: {
    title: "وابستگی ناموفق",
    color: "from-red-400/20 via-red-500/10 to-red-600/5",
    description: "وابستگی درخواست شما ناموفق بود."
  },
  500: {
    title: "خطای داخلی سرور",
    color: "from-red-400/20 via-red-500/10 to-red-600/5",
    description: "یک مشکل داخلی در سرور رخ داده است."
  },
  501: {
    title: "پیاده‌سازی نشده",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "سرور قادر به پردازش این نوع درخواست نیست."
  },
  502: {
    title: "درگاه نامعتبر",
    color: "from-red-400/20 via-red-500/10 to-red-600/5",
    description: "سرور در حالت عملکرد به عنوان یک درگاه یا پروکسی، پاسخ نامعتبری دریافت کرد."
  },
  503: {
    title: "سرویس در دسترس نیست",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "سرور موقتاً در دسترس نیست. ممکن است بعداً دوباره در دسترس قرار گیرد."
  },
  504: {
    title: "زمان درگاه به پایان رسید",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "زمان درگاه به پایان رسید."
  },
  505: {
    title: "نسخه HTTP پشتیبانی نشده",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "نسخه HTTP درخواست شما پشتیبانی نمی‌شود."
  },
  506: {
    title: "گزینه‌های متناقض",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "گزینه‌های درخواست شما متناقض هستند."
  },
  507: {
    title: "فضای ناکافی",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "فضای درخواست شما ناکافی است."
  },
  510: {
    title: "گسترش نیافته",
    color: "from-green-400/20 via-green-500/10 to-green-600/5",
    description: "گسترش درخواست شما نیافته است."
  }
};

const defaultError = {
  title: "خطای ناشناخته",
  color: "from-gray-400/20 via-gray-500/10 to-gray-600/5",
  description: "جزئیات بیشتری برای این خطا در دسترس نیست. لطفاً با پشتیبانی تماس بگیرید."
};

const ErrorPage = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const errorCode = code ? parseInt(code) : 404;
  const error = errorDetails[errorCode as keyof typeof errorDetails] || defaultError;
  const [showDetails, setShowDetails] = useState(false);
  
  useEffect(() => {
    console.error(`خطای ${errorCode}: کاربر به صفحه با کد خطای ${errorCode} هدایت شد.`);
  }, [errorCode]);

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
                  <ErrorIcon code={errorCode} color={error.color} />
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-8xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent"
            >
              {toPersianNumbers(errorCode)}
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="h-1 w-24 bg-gradient-to-r from-arminred-400 to-arminred-600 mx-auto my-6 rounded-full"
            />
            
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
            
            <ErrorDetails 
              showDetails={showDetails} 
              errorCode={errorCode} 
            />
            
            <ErrorActions
              showDetails={showDetails}
              onToggleDetails={() => setShowDetails(!showDetails)}
              onNavigateBack={() => navigate(-1)}
            />

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
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-arminred-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <ErrorBackground />
      </div>
    </SiteLayout>
  );
};

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

export default ErrorPage;
