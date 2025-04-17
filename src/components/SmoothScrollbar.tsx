
import React, { useEffect, useRef } from 'react';
import Scrollbar from 'react-smooth-scrollbar';

interface SmoothScrollbarProps {
  children: React.ReactNode;
}

const SmoothScrollbar: React.FC<SmoothScrollbarProps> = ({ children }) => {
  const scrollbarRef = useRef<any>(null);

  useEffect(() => {
    if (scrollbarRef.current) {
      const scrollbar = scrollbarRef.current.scrollbar;

      // آیا در موبایل هستیم؟
      const isMobile = window.innerWidth < 768;
      
      // در دستگاه‌های موبایل اسکرول‌بار را غیرفعال می‌کنیم
      if (isMobile) {
        scrollbar.destroy();
      } else {
        // تنظیمات دلخواه اسکرول
        scrollbar.update();
        scrollbar.addListener(({ offset }: { offset: { x: number; y: number } }) => {
          // اجرای انیمیشن‌های اسکرول در صورت نیاز
          // به عنوان مثال، اگر می‌خواهید عناصر با اسکرول ظاهر شوند
          const elements = document.querySelectorAll('.animate-on-scroll');
          elements.forEach((el) => {
            const element = el as HTMLElement;
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 0;
            
            if (isVisible) {
              element.classList.add('animate-fade-in');
            }
          });
        });
      }

      // پاکسازی
      return () => {
        if (!isMobile && scrollbar) {
          scrollbar.removeAllListeners();
        }
      };
    }
  }, []);

  return (
    <Scrollbar ref={scrollbarRef} damping={0.1} thumbMinSize={20} renderByPixels={true} alwaysShowTracks={false} continuousScrolling={true}>
      {children}
    </Scrollbar>
  );
};

export default SmoothScrollbar;
