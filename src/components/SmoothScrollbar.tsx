
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

          // افکت های پارالاکس
          const parallaxElements = document.querySelectorAll('.parallax');
          parallaxElements.forEach((el) => {
            const element = el as HTMLElement;
            const rect = element.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
              const speed = element.dataset.speed || '0.1';
              const yPos = offset.y * parseFloat(speed);
              element.style.transform = `translateY(${yPos}px)`;
            }
          });
          
          // افکت های تغییر رنگ در اسکرول
          const colorElements = document.querySelectorAll('.color-change-on-scroll');
          colorElements.forEach((el) => {
            const element = el as HTMLElement;
            const rect = element.getBoundingClientRect();
            const scrollPercentage = 1 - (rect.top / window.innerHeight);
            
            if (scrollPercentage > 0 && scrollPercentage < 1) {
              const opacity = Math.min(scrollPercentage, 0.8);
              element.style.opacity = opacity.toString();
            }
          });
        });
        
        // افزودن کلاس به لینک‌های فعال منو بر اساس اسکرول
        scrollbar.addListener(() => {
          const sections = document.querySelectorAll('section[id]');
          const navLinks = document.querySelectorAll('.nav-link');
          
          let currentSection = '';
          
          sections.forEach((section) => {
            const sectionElement = section as HTMLElement;
            const sectionTop = sectionElement.offsetTop - 80;
            const sectionHeight = sectionElement.offsetHeight;
            
            if (scrollbar.scrollTop >= sectionTop && scrollbar.scrollTop < sectionTop + sectionHeight) {
              currentSection = sectionElement.getAttribute('id') || '';
            }
          });
          
          navLinks.forEach((link) => {
            const linkElement = link as HTMLElement;
            linkElement.classList.remove('active');
            if (linkElement.getAttribute('href')?.includes(currentSection) && currentSection !== '') {
              linkElement.classList.add('active');
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
    <Scrollbar 
      ref={scrollbarRef} 
      damping={0.08} 
      thumbMinSize={20} 
      renderByPixels={true} 
      alwaysShowTracks={false} 
      continuousScrolling={true}
      plugins={{
        overscroll: {
          effect: 'bounce',
          damping: 0.15,
          maxOverscroll: 150
        }
      }}
    >
      {children}
    </Scrollbar>
  );
};

export default SmoothScrollbar;
