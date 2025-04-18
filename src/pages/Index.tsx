
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteLayout } from "@/components/site-layout";

const Index = () => {
  return (
    <SiteLayout>
      <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-enhanced-dark text-center">
            به آرمین سافت خوش آمدید
          </h1>
          <p className="text-xl text-enhanced-muted mb-12 text-center">
            مرکز خدمات نرم‌افزاری، طراحی سایت و امنیت وب
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-enhanced-card">
              <CardHeader>
                <CardTitle className="text-enhanced-dark">طراحی سایت</CardTitle>
                <CardDescription className="text-enhanced-muted">سایت‌های مدرن و پاسخگو</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-enhanced-muted">
                  طراحی و توسعه انواع وب‌سایت با جدیدترین تکنولوژی‌های روز دنیا
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-enhanced-card">
              <CardHeader>
                <CardTitle className="text-enhanced-dark">امنیت وب</CardTitle>
                <CardDescription className="text-enhanced-muted">تست نفوذ و ارزیابی امنیتی</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-enhanced-muted">
                  خدمات امنیت سایبری و محافظت از داده‌های حساس شما
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-enhanced-card">
              <CardHeader>
                <CardTitle className="text-enhanced-dark">هوش مصنوعی</CardTitle>
                <CardDescription className="text-enhanced-muted">راهکارهای هوشمند کسب و کار</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-enhanced-muted">
                  پیاده‌سازی راهکارهای مبتنی بر هوش مصنوعی برای کسب و کار شما
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export default Index;
