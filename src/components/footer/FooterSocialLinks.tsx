
import React from 'react';
import { motion } from "framer-motion";

// SVG Icons
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.136L24 22.846h-7.406l-5.8-7.584-6.638 7.584H1.076l8.6-9.824L0 1.154h7.594l5.243 6.932L18.901 1.153zm-1.306 17.08h2.034L6.537 3.24H4.278L17.595 18.233z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.116 5.825c-2.396-2.401-5.584-3.72-8.965-3.72-6.995 0-12.687 5.69-12.687 12.683 0 2.232.583 4.411 1.69 6.332L0 24l6.335-1.652c1.85 1.017 3.938 1.554 6.045 1.554 6.994 0 12.686-5.69 12.686-12.683 0-3.38-1.319-6.563-3.716-8.964zm-8.967 19.504c-1.89 0-3.74-.508-5.357-1.465l-.381-.229-3.97 1.039 1.058-3.86-.252-.394C1.02 16.448.451 14.25.451 12.003c0-5.85 4.764-10.611 10.619-10.611 2.838 0 5.504 1.107 7.503 3.105 1.999 1.999 3.106 4.665 3.106 7.503-.004 5.855-4.769 10.619-10.619 10.619zm5.828-7.946c-.32-.16-1.89-.93-2.18-1.035-.291-.107-.502-.16-.713.16-.212.319-.822 1.035-1.008 1.247-.186.211-.372.238-.691.08-1.89-.945-3.132-1.688-4.382-3.83-.33-.57.33-.53.941-1.764.105-.211.053-.391-.027-.551-.08-.16-.713-1.72-1.002-2.353-.262-.617-.529-.534-.691-.543C6.499 4.021 6.268 4 6.037 4c-.211 0-.551.08-.842.391-.291.31-1.109 1.08-1.109 2.64s1.136 3.065 1.291 3.276c.16.211 2.22 3.386 5.376 4.75.752.325 1.337.518 1.796.663.756.24 1.445.207 1.989.126.607-.09 1.87-.764 2.13-1.504.262-.74.262-1.373.184-1.504-.08-.131-.291-.211-.611-.37z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.614-.168.9-.499 1.201-.82 1.23-.696.064-1.225-.46-1.9-.907-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.416-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.030.014-.14-.053-.199s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.01-1.252-.241-1.865-.44-.751-.244-1.349-.373-1.297-.788.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.477-1.635z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.117.265-6.766.265-8.883 0-2.264-.287-2.49-2.177-2.49-4.892 0-2.715.226-4.605 2.49-4.892 2.117-.265 6.766-.265 8.883 0 2.265.287 2.49 2.177 2.49 4.892 0 2.715-.225 4.605-2.49 4.892zm-6.441-8.264v4.668l4-2.334-4-2.334z"/>
  </svg>
);

export function FooterSocialLinks() {
  const socialLinks = [
    { icon: <InstagramIcon />, url: "https://instagram.com/ARMIN_SOFT", label: "اینستاگرام", color: "hover:bg-pink-600" },
    { icon: <XIcon />, url: "https://x.com/@ARMIN_SOFT", label: "ایکس", color: "hover:bg-black" },
    { icon: <WhatsAppIcon />, url: "https://wa.me/989358983854", label: "واتساپ", color: "hover:bg-green-500" },
    { icon: <TelegramIcon />, url: "https://t.me/ARMIN_SOFT", label: "تلگرام", color: "hover:bg-blue-400" },
    { icon: <FacebookIcon />, url: "https://facebook.com/@ARMINSOFT0", label: "فیسبوک", color: "hover:bg-blue-600" },
    { icon: <GithubIcon />, url: "https://github.com/ARMIN-SOFT", label: "گیت‌هاب", color: "hover:bg-gray-700" },
    { icon: <YoutubeIcon />, url: "https://www.youtube.com/@ARMIN_SOFT", label: "یوتیوب", color: "hover:bg-red-600" },
    { icon: <YoutubeIcon />, url: "https://www.aparat.com/ARMIN_SOFT", label: "آپارات", color: "hover:bg-red-500" },
  ];

  return (
    <div className="md:col-span-4">
      <h3 className="text-lg font-bold mb-4 relative pr-3 before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-arminred-600">
        شبکه‌های اجتماعی
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center p-3 rounded-lg bg-black/50 border border-gray-800 transition-colors ${link.color}`}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
