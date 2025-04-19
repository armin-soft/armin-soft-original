
import { motion, AnimatePresence } from "framer-motion";

interface ErrorDetailsProps {
  showDetails: boolean;
  errorCode: number;
}

export function ErrorDetails({ showDetails, errorCode }: ErrorDetailsProps) {
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const detailsVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: "auto", 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};
