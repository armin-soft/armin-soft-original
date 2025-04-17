
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="relative z-10 text-center px-6 max-w-lg">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-arminred-600">404</h1>
          <div className="h-2 w-16 bg-arminred-600 mx-auto my-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">صفحه مورد نظر یافت نشد</h2>
          <p className="text-gray-400 mb-8">
            متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
          </p>
        </div>
        <Button asChild size="lg" className="bg-arminred-600 hover:bg-arminred-700">
          <Link to="/" className="flex items-center">
            <Home className="ml-2 h-5 w-5" />
            بازگشت به صفحه اصلی
          </Link>
        </Button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-arminred-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-arminred-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>
    </div>
  );
};

export default NotFound;
