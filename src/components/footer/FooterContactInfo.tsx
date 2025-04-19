
import React from 'react';
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function FooterContactInfo() {
  return (
    <div className="md:col-span-4 space-y-6">
      <Link to="/" className="flex items-center space-x-2 space-x-reverse text-2xl font-bold">
        <span className="bg-arminred-600 text-white px-2 py-1 rounded">آرمین</span>
        <span>سافت</span>
      </Link>
      
      <p className="text-gray-400 text-sm leading-relaxed">
        توسعه‌دهنده نرم‌افزار، متخصص امنیت و هک اخلاقی با تمرکز بر ارائه راهکارهای هوشمند و امن.
        هر آنچه در ذهن شماست، با آرمین سافت به واقعیت تبدیل می‌شود.
      </p>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-3 space-x-reverse transition-transform hover:translate-x-2">
          <div className="p-2 bg-arminred-600/20 rounded-full">
            <Phone size={16} className="text-arminred-500" />
          </div>
          <span className="text-gray-300 text-sm">۰۹۳۵۸۹۸۳۸۵۴</span>
        </div>
        
        <div className="flex items-center space-x-3 space-x-reverse transition-transform hover:translate-x-2">
          <div className="p-2 bg-arminred-600/20 rounded-full">
            <Mail size={16} className="text-arminred-500" />
          </div>
          <span className="text-gray-300 text-sm">info@armin-soft.ir</span>
        </div>
        
        <div className="flex items-center space-x-3 space-x-reverse transition-transform hover:translate-x-2">
          <div className="p-2 bg-arminred-600/20 rounded-full">
            <MapPin size={16} className="text-arminred-500" />
          </div>
          <span className="text-gray-300 text-sm">ایران، تهران، پاکدشت</span>
        </div>
      </div>
    </div>
  );
}
