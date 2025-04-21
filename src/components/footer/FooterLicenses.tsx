
import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck } from "lucide-react";

const licenses = [
  {
    name: "نماد اعتماد الکترونیکی",
    image: "https://trustseal.enamad.ir/logo.aspx?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg",
    link: "https://trustseal.enamad.ir/?id=519095&Code=jNdpnL31KtNsikcan5emQZWkglmgpsxg",
    alt: "نماد اعتماد الکترونیکی",
    type: "e-namad",
    id: "ENAMAD",
    tag: "ای‌نماد"
  },
  {
    name: "زرین‌پال - پرداخت امن",
    link: "https://www.zarinpal.com",
    alt: "زرین‌پال پرداخت امن",
    type: "zarinpal",
    tag: "زرین‌پال"
  }
];

export function FooterLicenses() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "anticipate" }}
      className="flex justify-center items-center w-full mt-12"
    >
      <div className="relative flex flex-col lg:flex-row gap-8 xl:gap-14 items-stretch bg-gradient-to-br from-black/70 via-arminred-900/30 to-black/95 rounded-3xl px-6 py-7 border border-white/10 shadow-2xl glass backdrop-blur-2xl overflow-hidden w-full max-w-4xl mx-auto">
        {/* تزئین زمینه با انیمیشن */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          animate={{ opacity: [0.22, 0.32, 0.22], scale: [1, 1.03, 1] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-arminred-600/20 via-arminred-400/10 to-white/0 blur-lg opacity-35 rounded-3xl" />
        </motion.div>
        
        {/* معرفی و عنوان */}
        <div className="z-10 flex flex-col gap-2 items-center lg:items-end min-w-[180px] self-center">
          <span className="flex items-center text-lg md:text-xl font-extrabold text-arminred-500 gap-2">
            <ShieldCheck className="w-8 h-8 animate-pulse-glow text-arminred-500 drop-shadow-xl" />
            اعتبارسنجی تجارت و پرداخت مدرن
          </span>
          <span className="text-sm text-white/80 hidden md:block font-light">پشتیبانی رسمی و امانت در پرداخت آنلاین</span>
        </div>
        
        {/* لوگوها/مجوزها */}
        <div className="z-10 flex flex-row flex-wrap gap-8 items-center justify-center">
          {/* ای‌نماد */}
          <motion.a
            href={licenses[0].link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.09, rotate: [0, 6] }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative flex flex-col items-center group cursor-pointer hover-scale"
          >
            <div className="relative w-[84px] h-[84px] rounded-2xl bg-white/20 border-2 border-arminred-500/30 overflow-hidden shadow-lg group-hover:shadow-arminred-400/30 transition-all duration-200">
              <img
                src={licenses[0].image}
                alt={licenses[0].alt}
                referrerPolicy="origin"
                width={84}
                height={84}
                className="object-contain w-full h-full pointer-events-none select-none"
                style={{ cursor: "pointer" }}
              />
              <span className="absolute top-3 left-3 bg-arminred-500/90 rounded-full p-1.5 animate-pulse shadow-lg border-2 border-white/60">
                <BadgeCheck className="w-6 h-6 text-white" />
              </span>
            </div>
            <span className="mt-2 text-xs font-semibold text-white/90 group-hover:text-arminred-400 transition-all whitespace-nowrap">
              {licenses[0].name}
            </span>
          </motion.a>

          {/* زرین‌پال: فقط یک div با id ویژه */}
          <div className="flex flex-col items-center">
            <div
              id="zarinpalTrustLogo"
              style={{
                width: "140px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              className="rounded-2xl bg-white/10 border-2 border-yellow-400/30 overflow-hidden shadow-lg"
            ></div>
            <span className="mt-2 text-xs font-semibold text-white/90 group-hover:text-yellow-300 transition-all whitespace-nowrap">
              پرداخت امن زرین‌پال
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
