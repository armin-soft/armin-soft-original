
import React from 'react';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight } from "lucide-react";

export function FooterNewsletter() {
  const { register, handleSubmit, reset } = useForm<{ email: string }>();
  
  const onSubmit = (data: { email: string }) => {
    console.log("Subscription email:", data.email);
    toast({
      title: "ایمیل شما ثبت شد",
      description: "از اشتراک شما در خبرنامه آرمین سافت سپاسگزاریم.",
    });
    reset();
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="relative overflow-hidden mb-12 bg-gradient-to-r from-arminred-700 to-black p-6 md:p-8 rounded-2xl shadow-xl border border-arminred-800/50"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            عضویت در خبرنامه
          </h3>
          <p className="text-white/80">
            برای دریافت آخرین اخبار و مقالات تخصصی در زمینه برنامه‌نویسی و امنیت در خبرنامه ما عضو شوید.
          </p>
        </motion.div>

        <motion.form 
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-md group"
        >
          <Input
            type="email"
            placeholder="ایمیل خود را وارد کنید..."
            className="text-right rounded-r-md rounded-l-none border-0 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-arminred-500 transition-all hover:bg-white/20"
            {...register("email", { required: true })}
          />
          <Button 
            type="submit" 
            className="rounded-l-md rounded-r-none bg-white text-arminred-600 hover:bg-white/90 hover:text-arminred-700 transition-all duration-300"
          >
            اشتراک
            <ArrowRight className="mr-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.form>
      </div>

      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-arminred-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-arminred-700/10 rounded-full blur-3xl"></div>
    </motion.div>
  );
}
