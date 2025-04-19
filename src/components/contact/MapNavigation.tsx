
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation, Compass, Map } from "lucide-react";
import { motion } from "framer-motion";

export function MapNavigation() {
  const mapLinks = [
    {
      name: "نشان",
      icon: <Navigation className="h-6 w-6" />,
      url: "https://neshan.org/maps/places/9ccb5e03124ff1b45606ee6e8abf6504#c34.337-47.081-15z-0p",
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      name: "بلد",
      icon: <Compass className="h-6 w-6" />,
      url: "https://balad.ir/p/%D8%A2%D8%B1%D9%85%DB%8C%D9%86-%D8%B3%D8%A7%D9%81%D8%AA_engineering-33prhHcvJ6CoDF#15/35.48845/51.68181",
      color: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      name: "گوگل مپ",
      icon: <Map className="h-6 w-6" />,
      url: "https://www.google.com/maps/place/ARMIN-SOFT/@35.4876278,51.6769236,17z/data=!3m1!4b1!4m6!3m5!1s0x3f91eb2b6c71c453:0x7908be7f77a9ab27!8m2!3d35.4876278!4d51.6769236!16s%2Fg%2F11nmrmzj6b?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoJLCMxMDIxMTY0MEgBUAM%3D",
      color: "bg-gradient-to-br from-red-500 to-red-700"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 farsi-numbers">
      {mapLinks.map((mapLink, index) => (
        <motion.a 
          key={index}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -5, scale: 1.03 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
          href={mapLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <Card className="h-full overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-arminred-500/50 backdrop-blur-sm bg-white/5">
            <CardContent className="p-0">
              <div className={`flex flex-col items-center justify-center p-8 text-white ${mapLink.color}`}>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 
                  transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                  {mapLink.icon}
                </div>
                <h3 className="text-xl font-bold">مسیریابی با {mapLink.name}</h3>
                <p className="mt-2 text-sm opacity-90">برای مشاهده دقیق موقعیت شرکت آرمین‌سافت در {mapLink.name} کلیک کنید</p>
              </div>
            </CardContent>
          </Card>
        </motion.a>
      ))}
    </div>
  );
}
