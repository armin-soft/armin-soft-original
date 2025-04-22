
import { motion } from "framer-motion";
import { Star, Code, Shield, Heart, Lightbulb, Clock } from "lucide-react";

const valuesData = [
  {
    icon: <Star className="h-10 w-10 text-arminred-600" />,
    title: "کیفیت",
    description: "تعهد به ارائه کار با بالاترین سطح کیفیت و استاندارد"
  },
  {
    icon: <Code className="h-10 w-10 text-arminred-600" />,
    title: "نوآوری",
    description: "استفاده از فناوری‌های جدید و راهکارهای خلاقانه برای حل مشکلات"
  },
  {
    icon: <Shield className="h-10 w-10 text-arminred-600" />,
    title: "امنیت",
    description: "اولویت دادن به امنیت در تمامی مراحل طراحی و توسعه نرم افزار"
  },
  {
    icon: <Heart className="h-10 w-10 text-arminred-600" />,
    title: "اشتیاق",
    description: "انجام هر پروژه با عشق و تعهد به نتیجه نهایی"
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-arminred-600" />,
    title: "خلاقیت",
    description: "ارائه راه‌حل‌های خلاقانه و منحصربه‌فرد برای چالش‌های پیچیده"
  },
  {
    icon: <Clock className="h-10 w-10 text-arminred-600" />,
    title: "تعهد",
    description: "پایبندی به زمان‌بندی پروژه‌ها و تحویل به موقع"
  }
];

export function AboutValuesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black/98 to-gray-950/90 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            ارزش‌های من در کار
          </h2>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
            استانداردهایی که همیشه در پروژه‌هایم رعایت می‌کنم
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuesData.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 18, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.48, delay: 0.1 + idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-7 flex flex-col items-center gap-3 shadow-lg hover:border-arminred-500/40 hover:shadow-arminred-500/5"
            >
              <div>{val.icon}</div>
              <h3 className="mt-3 text-xl font-bold text-white mb-1">{val.title}</h3>
              <p className="text-gray-400 text-center">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
