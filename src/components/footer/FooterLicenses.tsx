
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, BadgeCheck } from "lucide-react";

export function FooterLicenses() {
  // اطلاعات مربوط به مجوزها
  const licenses = [
    {
      name: "نماد اعتماد الکترونیکی",
      image: "https://trustseal.enamad.ir/logo.aspx?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg",
      link: "https://trustseal.enamad.ir/?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg",
      alt: "نماد اعتماد الکترونیکی",
      type: "e-namad"
    },
    {
      name: "ساماندهی رسانه‌های دیجیتال",
      image: "/placeholder.svg", // اینجا می‌توانید لوگوی ساماندهی را جایگزین کنید
      link: "#",
      alt: "لوگوی ساماندهی",
      type: "samandehi"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex justify-center items-center w-full mt-8 mb-2"
    >
      <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-gradient-to-br from-white/10 to-black/40 rounded-2xl px-5 py-4 border border-white/10 shadow-md glass backdrop-blur-lg">
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            className="w-full h-full bg-gradient-to-tr from-arminred-600/10 via-arminred-500/10 to-arminred-100/0 blur-2xl opacity-50 rounded-2xl"
            animate={{
              scale: [1, 1.04, 1],
              opacity: [0.45, 0.65, 0.5]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        {/* عنوان و آیکون */}
        <div className="relative z-10 flex flex-col gap-2 items-center md:items-start min-w-[155px]">
          <span className="flex items-center text-base md:text-lg font-extrabold text-arminred-500 gap-2">
            <ShieldCheck className="w-6 h-6 text-arminred-500 animate-pulse-glow" />
            مجوزهای رسمی
          </span>
          <span className="text-xs text-white/80 hidden md:block">تضمین اعتبار و امنیت پرداخت</span>
        </div>
        {/* لوگوها */}
        <div className="relative z-10 flex gap-7 items-center">
          {licenses.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, rotate: item.type === "e-namad" ? [0, 5, -2, 0] : 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="group flex flex-col items-center"
            >
              <div className="relative w-[72px] h-[72px] rounded-xl shadow-lg overflow-hidden bg-white/10 border border-arminred-500/20 hover:shadow-arminred-400/30 transition-all duration-200 hover:scale-105">
                <img
                  src={item.image}
                  alt={item.alt}
                  referrerPolicy="origin"
                  width={72}
                  height={72}
                  className="object-contain w-full h-full"
                  style={{ cursor: "pointer" }}
                />
                {item.type === "e-namad" && (
                  <span className="absolute top-2 left-2 bg-arminred-500/80 rounded-full p-1 animate-pulse shadow-lg">
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </span>
                )}
              </div>
              <span className="mt-2 text-xs font-semibold text-white/90 group-hover:text-arminred-400 transition">{item.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
