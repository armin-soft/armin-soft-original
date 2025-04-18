
import { motion } from "framer-motion";
import { MessageSquare, FileCode2, BarChart4, Send } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "مشاوره و تحلیل",
      description: "بررسی دقیق نیازها و اهداف پروژه به همراه مشاوره تخصصی",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FileCode2 className="h-6 w-6" />,
      title: "توسعه و پیاده‌سازی",
      description: "طراحی و توسعه اصولی با استفاده از بهترین تکنولوژی‌ها",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "تست و بهینه‌سازی",
      description: "ارزیابی کیفیت، عملکرد و امنیت برای اطمینان از کارایی",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "تحویل و پشتیبانی",
      description: "ارائه محصول نهایی همراه با پشتیبانی مستمر و بروزرسانی",
      color: "from-arminred-500 to-arminred-600"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-black overflow-hidden">
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
            فرآیند همکاری
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            روندی شفاف و کارآمد برای تبدیل ایده شما به واقعیت
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full rounded-xl bg-black/50 backdrop-blur-xl border border-gray-800 hover:border-arminred-500/30 transition-all duration-300 p-6 flex flex-col">
                <div className="relative z-10">
                  <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}>
                    {step.icon}
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-sm ml-3">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
                
                {/* Only render arrows between steps on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 text-gray-600">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
