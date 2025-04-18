import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HomeIcon, ChevronLeft } from "lucide-react";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  
  // Get base URL dynamically
  const baseUrl = window.location.origin;

  // تعریف عناوین فارسی برای هر مسیر
  const pathTitles: Record<string, string> = {
    "About": "درباره من",
    "Resume": "رزومه",
    "Service": "خدمات",
    "Work-Sample": "نمونه کارها",
    "Contact": "تماس با من"
  };

  // ساختار داده برای Schema.org
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "صفحه اصلی",
        "item": baseUrl
      }
    ]
  };

  // اضافه کردن آیتم‌های مسیر به ساختار Schema.org
  pathnames.forEach((name, index) => {
    schemaData.itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": pathTitles[name] || name,
      "item": `${baseUrl}/${pathnames.slice(0, index + 1).join("/")}`
    });
  });

  // اگر در صفحه اصلی هستیم breadcrumb نمایش داده نشود
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 pt-2 md:pt-4">
      <nav aria-label="breadcrumb" className="flex items-center text-sm text-muted-foreground mb-4">
        <Link to="/" className="flex items-center hover:text-arminred-500 transition-colors">
          <HomeIcon className="h-4 w-4 ml-1" />
          <span>صفحه اصلی</span>
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <React.Fragment key={name}>
              <ChevronLeft className="h-4 w-4 mx-1" />
              {isLast ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {pathTitles[name] || name}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-arminred-500 transition-colors">
                  {pathTitles[name] || name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
        
        {/* برای موتورهای جستجو Schema.org Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </nav>
    </div>
  );
};
