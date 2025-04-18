
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "همکاری با آرمین سافت یکی از بهترین تصمیم‌های کسب و کار ما بود. سایت شرکت ما با دقت و کیفیت بالا طراحی و پیاده‌سازی شد و امنیت فوق‌العاده‌ای دارد.",
      author: "محمد رضایی",
      role: "مدیرعامل شرکت پارس تک",
      avatar: "/Assets/Image/placeholder.svg",
    },
    {
      text: "تخصص و تعهد آرمین سافت در زمینه امنیت سایبری واقعاً چشمگیر است. مشاوره‌های ایشان باعث شد سیستم ما از حملات سایبری محافظت شود.",
      author: "سارا محمدی",
      role: "مدیر فناوری اطلاعات گروه مالی نوین",
      avatar: "/Assets/Image/placeholder.svg",
    },
    {
      text: "سرعت، دقت و کیفیت کار آرمین سافت در توسعه API و سیستم پشتیبانی ما بسیار عالی بود. همیشه پاسخگو و منعطف در برابر تغییرات درخواستی ما بودند.",
      author: "علی کریمی",
      role: "بنیانگذار استارتاپ داده‌پرداز",
      avatar: "/Assets/Image/placeholder.svg",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-black to-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            نظرات مشتریان
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            آنچه مشتریان ما درباره خدمات ما می‌گویند
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  position: activeIndex === index ? "relative" : "absolute",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                {activeIndex === index && (
                  <Card className="p-8 bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/30 transition-all duration-300">
                    <div className="text-arminred-500 mb-6">
                      <Quote className="h-12 w-12 mx-auto opacity-20" />
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 text-center mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-arminred-500/30">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-lg">{testimonial.author}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-arminred-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`نظر ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
