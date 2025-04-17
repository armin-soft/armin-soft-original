
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, Ban, Box, Clock, CreditCard, Database, DollarSign, FileSearch, FileType, 
  FileX, GitCompare, GitFork, GitMerge, HardDrive, Home, Link2, Loader, Lock, Package, 
  Search, SearchX, Server, ServerCrash, ServerOff, Shield, ShieldOff, ShieldX, Trash2, Wrench, XOctagon 
} from "lucide-react";

// Error codes and their details
const errorDetails = {
  400: {
    title: "درخواست نامعتبر",
    icon: <AlertTriangle className="h-16 w-16 text-arminred-500" />,
    description: "درخواست شما قابل پردازش نیست. لطفاً اطلاعات ورودی را بررسی کنید."
  },
  401: {
    title: "عدم احراز هویت",
    icon: <ShieldOff className="h-16 w-16 text-arminred-500" />,
    description: "شما اجازه دسترسی به این صفحه را ندارید. لطفاً وارد حساب کاربری خود شوید."
  },
  402: {
    title: "نیاز به پرداخت",
    icon: <CreditCard className="h-16 w-16 text-arminred-500" />,
    description: "برای دسترسی به این بخش باید هزینه آن را پرداخت کنید."
  },
  403: {
    title: "دسترسی غیر مجاز",
    icon: <Lock className="h-16 w-16 text-arminred-500" />,
    description: "شما اجازه دسترسی به این بخش را ندارید."
  },
  404: {
    title: "صفحه یافت نشد",
    icon: <SearchX className="h-16 w-16 text-arminred-500" />,
    description: "صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است."
  },
  405: {
    title: "روش غیرمجاز",
    icon: <Ban className="h-16 w-16 text-arminred-500" />,
    description: "روش درخواست شما برای این آدرس پشتیبانی نمی‌شود."
  },
  406: {
    title: "غیرقابل قبول",
    icon: <XOctagon className="h-16 w-16 text-arminred-500" />,
    description: "سرور نمی‌تواند محتوایی که با معیارهای شما مطابقت داشته باشد ارائه دهد."
  },
  407: {
    title: "نیاز به احراز هویت پروکسی",
    icon: <Shield className="h-16 w-16 text-arminred-500" />,
    description: "شما باید ابتدا در پروکسی احراز هویت شوید."
  },
  408: {
    title: "زمان درخواست به پایان رسید",
    icon: <Clock className="h-16 w-16 text-arminred-500" />,
    description: "سرور در زمان مشخص شده پاسخی دریافت نکرد. لطفاً دوباره تلاش کنید."
  },
  409: {
    title: "تداخل",
    icon: <GitMerge className="h-16 w-16 text-arminred-500" />,
    description: "درخواست شما با وضعیت فعلی منبع مورد نظر تداخل دارد."
  },
  410: {
    title: "از بین رفته",
    icon: <Trash2 className="h-16 w-16 text-arminred-500" />,
    description: "صفحه مورد نظر دیگر در دسترس نیست و این وضعیت دائمی است."
  },
  411: {
    title: "طول مورد نیاز",
    icon: <FileType className="h-16 w-16 text-arminred-500" />,
    description: "سرور نمی‌تواند بدون مشخص شدن طول محتوا، درخواست را پردازش کند."
  },
  412: {
    title: "پیش‌شرط ناموفق",
    icon: <ShieldX className="h-16 w-16 text-arminred-500" />,
    description: "یکی از پیش‌شرط‌های مشخص شده در هدر درخواست، نادرست است."
  },
  413: {
    title: "محتوای درخواست بیش از حد بزرگ",
    icon: <Package className="h-16 w-16 text-arminred-500" />,
    description: "اندازه درخواست شما بیش از حد مجاز است."
  },
  414: {
    title: "URI بیش از حد طولانی",
    icon: <Link2 className="h-16 w-16 text-arminred-500" />,
    description: "آدرس درخواستی بیش از حد طولانی است."
  },
  415: {
    title: "نوع رسانه پشتیبانی نشده",
    icon: <FileType className="h-16 w-16 text-arminred-500" />,
    description: "فرمت محتوای درخواستی پشتیبانی نمی‌شود."
  },
  416: {
    title: "محدوده درخواستی غیرقابل تحقق",
    icon: <FileSearch className="h-16 w-16 text-arminred-500" />,
    description: "محدوده درخواستی برای این منبع قابل ارائه نیست."
  },
  417: {
    title: "انتظار ناموفق",
    icon: <AlertTriangle className="h-16 w-16 text-arminred-500" />,
    description: "سرور نمی‌تواند الزامات مشخص شده در هدر Expect را برآورده کند."
  },
  422: {
    title: "موجودیت غیرقابل پردازش",
    icon: <XOctagon className="h-16 w-16 text-arminred-500" />,
    description: "درخواست شما دارای خطای نحوی است و قابل پردازش نیست."
  },
  423: {
    title: "قفل شده",
    icon: <Lock className="h-16 w-16 text-arminred-500" />,
    description: "منبع مورد درخواست قفل شده و در حال حاضر در دسترس نیست."
  },
  424: {
    title: "وابستگی ناموفق",
    icon: <GitFork className="h-16 w-16 text-arminred-500" />,
    description: "درخواست قبلی ناموفق بود، بنابراین این درخواست نیز ناموفق است."
  },
  500: {
    title: "خطای داخلی سرور",
    icon: <ServerCrash className="h-16 w-16 text-arminred-500" />,
    description: "سرور با مشکلی مواجه شده است. لطفاً بعداً دوباره تلاش کنید."
  },
  501: {
    title: "پیاده‌سازی نشده",
    icon: <Wrench className="h-16 w-16 text-arminred-500" />,
    description: "سرور قابلیت پاسخگویی به این درخواست را ندارد."
  },
  502: {
    title: "درگاه نامعتبر",
    icon: <ServerCrash className="h-16 w-16 text-arminred-500" />,
    description: "سرور در حال عمل به عنوان دروازه یا پروکسی، پاسخ نامعتبری از سرور بالادستی دریافت کرد."
  },
  503: {
    title: "سرویس در دسترس نیست",
    icon: <ServerOff className="h-16 w-16 text-arminred-500" />,
    description: "سرور موقتاً در دسترس نیست. لطفاً بعداً دوباره تلاش کنید."
  },
  504: {
    title: "زمان درگاه به پایان رسید",
    icon: <Clock className="h-16 w-16 text-arminred-500" />,
    description: "سرور در حال عمل به عنوان دروازه یا پروکسی، به موقع از سرور بالادستی پاسخ دریافت نکرد."
  },
  505: {
    title: "نسخه HTTP پشتیبانی نشده",
    icon: <ServerCrash className="h-16 w-16 text-arminred-500" />,
    description: "سرور نسخه پروتکل HTTP درخواستی را پشتیبانی نمی‌کند."
  },
  506: {
    title: "گزینه‌های متناقض",
    icon: <AlertTriangle className="h-16 w-16 text-arminred-500" />,
    description: "منبع دارای چندین نمایش است که هر کدام مذاکره داخلی دارند."
  },
  507: {
    title: "فضای ناکافی",
    icon: <HardDrive className="h-16 w-16 text-arminred-500" />,
    description: "سرور فضای کافی برای تکمیل درخواست ندارد."
  },
  510: {
    title: "گسترش نیافته",
    icon: <ServerCrash className="h-16 w-16 text-arminred-500" />,
    description: "برای پردازش این درخواست به گسترش‌های بیشتری نیاز است."
  }
};

// Default error for unknown status codes
const defaultError = {
  title: "خطای ناشناخته",
  icon: <AlertTriangle className="h-16 w-16 text-arminred-500" />,
  description: "یک خطای ناشناخته رخ داده است. لطفاً بعداً دوباره تلاش کنید."
};

const ErrorPage = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const errorCode = code ? parseInt(code) : 404;
  const error = errorDetails[errorCode as keyof typeof errorDetails] || defaultError;
  
  useEffect(() => {
    console.error(`خطای ${errorCode}: کاربر به صفحه با کد خطای ${errorCode} هدایت شد.`);
  }, [errorCode]);

  return (
    <SiteLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              {error.icon}
            </div>
            <h1 className="text-8xl font-bold text-arminred-600">{errorCode}</h1>
            <div className="h-1 w-24 bg-arminred-600 mx-auto my-6"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{error.title}</h2>
            <p className="text-gray-300 mb-8 text-lg">
              {error.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700">
                <Link to="/" className="flex items-center">
                  <Home className="ml-2 h-5 w-5" />
                  بازگشت به صفحه اصلی
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate(-1)}>
                بازگشت به صفحه قبلی
              </Button>
            </div>
          </div>

          <div className="mt-16 text-gray-400 text-sm">
            <p>اگر فکر می‌کنید این خطا اشتباه است، لطفاً با پشتیبانی تماس بگیرید.</p>
            <p className="mt-2">
              <Link to="/contact" className="text-arminred-400 hover:text-arminred-300 underline">
                تماس با پشتیبانی
              </Link>
            </p>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-arminred-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-arminred-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default ErrorPage;
