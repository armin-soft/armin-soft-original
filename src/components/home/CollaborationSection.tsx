
import { motion } from "framer-motion";
import { Handshake, Briefcase, Users, CalendarCheck, MessageCircle } from "lucide-react";

const collaborationSteps = [
  {
    icon: <MessageCircle className="w-7 h-7 text-arminred-500" />,
    title: "شروع گفتگو",
    desc: "همکاری را با مشاوره و شنیدن کامل ایده و نیاز شما آغاز می‌کنیم.",
    color: "from-blue-400 via-blue-600 to-arminred-500"
  },
  {
    icon: <CalendarCheck className="w-7 h-7 text-purple-400" />,
    title: "برنامه‌ریزی دقیق",
    desc: "جدول زمان‌بندی، فازبندی و خروجی‌ها را شفاف‌سازی می‌کنیم.",
    color: "from-arminred-400 via-purple-500 to-purple-800"
  },
  {
    icon: <Users className="w-7 h-7 text-green-500" />,
    title: "تیم‌سازی و اجرا",
    desc: "تیم دقیق ما با مهارت متناسب بر روی پروژه شما مشغول می‌شود.",
    color: "from-green-400 via-green-600 to-arminred-400"
  },
  {
    icon: <Briefcase className="w-7 h-7 text-yellow-400" />,
    title: "تحویل و پشتیبانی",
    desc: "نتیجه کار را با کیفیت تضمینی تحویل و پشتیبانی کامل فراهم می‌کنیم.",
    color: "from-yellow-400 via-orange-400 to-arminred-500"
  },
  {
    icon: <Handshake className="w-7 h-7 text-arminred-400" />,
    title: "شروع همکاری بلندمدت",
    desc: "همیشه همراه شما هستیم تا رشد و توسعه پروژه را تضمین کنیم.",
    color: "from-arminred-400 via-pink-500 to-purple-700"
  }
];

export function CollaborationSection() {
  return (
    <section
      id="collaboration"
      className="relative py-20 md:py-28 bg-gradient-to-br from-background via-black to-gray-900 overflow-hidden"
    >
      {/* بک گراند تصویری مینیمال */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&auto=format&fit=crop"
          alt="collaboration"
          className="w-full h-full object-cover object-center opacity-10 pointer-events-none"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-gray-950/80 to-arminred-950/70"/>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-arminred-400 to-purple-500 mb-4 animate-fade-in">
            فرآیند همکاری ما
          </h2>
          <p className="text-gray-400 md:text-lg animate-fade-in">
            هر گام همکاری ما، پر از تعامل، شفافیت و رشد است. از اولین تماس تا توسعه و پشتیبانی، کنار شما هستیم تا پروژه شما را حرفه‌ای به مقصد برسانیم.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-10 items-center justify-center">
          {collaborationSteps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: -1 + index * 0.5 }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.13 }}
              className="relative group bg-black/60 backdrop-blur-xl p-7 rounded-2xl shadow-xl flex flex-col items-center w-full md:w-72 min-h-[270px] hover:shadow-arminred-500/20 border border-arminred-700/15 transition-all"
            >
              <span
                className={`absolute -top-7 left-1/2 -translate-x-1/2 shadow-2xl rounded-2xl p-3 bg-gradient-to-tr ${step.color} mb-4 transition-transform`}
              >
                {step.icon}
              </span>
              <div className="mb-2 h-8"/>
              <h3 className="text-xl font-bold mt-2 mb-2 text-white drop-shadow-md">{step.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{step.desc}</p>
              {index < collaborationSteps.length - 1 && (
                <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <motion.span
                    animate={{ scaleX: [1, 1.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="block w-20 h-1 rounded-full bg-gradient-to-r from-arminred-500/30 to-white/10"
                  ></motion.span>
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* دکمه تماس، کاملاً مدرن */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="mt-16 text-center"
        >
          <a
            href="/Contact"
            className="inline-block text-lg font-bold tracking-wide rounded-full px-10 py-4 bg-gradient-to-r from-arminred-600 to-purple-600 text-white shadow-xl hover:from-arminred-700 hover:to-purple-700 transition-all animate-fade-in hover:scale-[1.03] hover:shadow-arminred-600/30"
          >
            آغاز همکاری و دریافت مشاوره رایگان
          </a>
        </motion.div>
      </div>
    </section>
  );
}
