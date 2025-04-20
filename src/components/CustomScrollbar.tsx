
import React, { useEffect, useRef } from 'react';

interface CustomScrollbarProps {
  children: React.ReactNode;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're on mobile
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile && scrollContainerRef.current) {
      // Add event listeners for scroll animations if needed
      const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        
        // Get current scroll position
        const scrollTop = scrollContainerRef.current.scrollTop;
        
        // Find elements with animation classes
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => {
          const element = el as HTMLElement;
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 0;
          
          if (isVisible) {
            element.classList.add('animate-fade-in');
          }
        });

        // Parallax effects
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach((el) => {
          const element = el as HTMLElement;
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isInView) {
            const speed = element.dataset.speed || '0.1';
            const yPos = scrollTop * parseFloat(speed);
            element.style.transform = `translateY(${yPos}px)`;
          }
        });
        
        // Handle active navigation based on scroll position
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach((section) => {
          const sectionElement = section as HTMLElement;
          const sectionTop = sectionElement.offsetTop - 80;
          const sectionHeight = sectionElement.offsetHeight;
          
          if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
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
      };
      
      // Add scroll event listener
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
      
      // Clean up
      return () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.removeEventListener('scroll', handleScroll);
        }
      };
    }
  }, []);

  return (
    <div 
      ref={scrollContainerRef}
      className="custom-scrollbar h-screen overflow-y-auto overflow-x-hidden"
      style={{ 
        scrollBehavior: 'smooth',
      }}
    >
      {children}
    </div>
  );
};

export default CustomScrollbar;
