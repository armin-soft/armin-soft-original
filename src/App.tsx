import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { GTMPageTracker, initGTM } from "./components/seo/GTM";

// Pages
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Service from "./pages/Service";
import WorkSample from "./pages/WorkSample";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import Khaneh from "./pages/Khaneh";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // راه‌اندازی Google Tag Manager
  useEffect(() => {
    initGTM('GTM-XXXXXXX'); // جایگزین کردن با ID واقعی GTM
  }, []);

  // Force dark mode on document element
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  }, []);

  // Force the loading screen to be shown for at least a small amount of time
  useEffect(() => {
    document.documentElement.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <GTMPageTracker />
        
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        
        {!isLoading && (
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Khaneh />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Work-Sample" element={<WorkSample />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            
            {/* Error Pages */}
            <Route path="/error/:code" element={<ErrorPage />} />
            
            {/* Error Routes (Redirects to ErrorPage) */}
            {/* 4xx Client Errors */}
            <Route path="/400" element={<Navigate to="/error/400" replace />} />
            <Route path="/401" element={<Navigate to="/error/401" replace />} />
            <Route path="/402" element={<Navigate to="/error/402" replace />} />
            <Route path="/403" element={<Navigate to="/error/403" replace />} />
            <Route path="/404" element={<Navigate to="/error/404" replace />} />
            <Route path="/405" element={<Navigate to="/error/405" replace />} />
            <Route path="/406" element={<Navigate to="/error/406" replace />} />
            <Route path="/407" element={<Navigate to="/error/407" replace />} />
            <Route path="/408" element={<Navigate to="/error/408" replace />} />
            <Route path="/409" element={<Navigate to="/error/409" replace />} />
            <Route path="/410" element={<Navigate to="/error/410" replace />} />
            <Route path="/411" element={<Navigate to="/error/411" replace />} />
            <Route path="/412" element={<Navigate to="/error/412" replace />} />
            <Route path="/413" element={<Navigate to="/error/413" replace />} />
            <Route path="/414" element={<Navigate to="/error/414" replace />} />
            <Route path="/415" element={<Navigate to="/error/415" replace />} />
            <Route path="/416" element={<Navigate to="/error/416" replace />} />
            <Route path="/417" element={<Navigate to="/error/417" replace />} />
            <Route path="/422" element={<Navigate to="/error/422" replace />} />
            <Route path="/423" element={<Navigate to="/error/423" replace />} />
            <Route path="/424" element={<Navigate to="/error/424" replace />} />
            
            {/* 5xx Server Errors */}
            <Route path="/500" element={<Navigate to="/error/500" replace />} />
            <Route path="/501" element={<Navigate to="/error/501" replace />} />
            <Route path="/502" element={<Navigate to="/error/502" replace />} />
            <Route path="/503" element={<Navigate to="/error/503" replace />} />
            <Route path="/504" element={<Navigate to="/error/504" replace />} />
            <Route path="/505" element={<Navigate to="/error/505" replace />} />
            <Route path="/506" element={<Navigate to="/error/506" replace />} />
            <Route path="/507" element={<Navigate to="/error/507" replace />} />
            <Route path="/510" element={<Navigate to="/error/510" replace />} />
            
            {/* 404 Catch All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
