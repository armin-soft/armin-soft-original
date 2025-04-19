
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "پیام شما با موفقیت ارسال شد",
        description: "به زودی با شما تماس خواهیم گرفت.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id="contact-form"
    >
      <Card className="bg-card/60 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-arminred-500/5 to-transparent opacity-70" />
        
        <div className="relative z-10">
          <div className="bg-gradient-to-r from-black to-arminred-900/70 p-6">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <span className="inline-block w-2 h-6 bg-arminred-500 ml-2"></span>
              ارسال پیام
            </h3>
            <p className="text-white/70 mt-2">
              با ما در ارتباط باشید. ما به زودی پاسخ خواهیم داد.
            </p>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="space-y-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Label htmlFor="name" className="text-base font-medium">نام و نام خانوادگی</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="نام خود را وارد کنید"
                    className="bg-card/50 border-white/10 focus:border-arminred-500 focus:ring-1 focus:ring-arminred-500 transition-all duration-300 h-12"
                  />
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Label htmlFor="email" className="text-base font-medium">ایمیل</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ایمیل خود را وارد کنید"
                    className="bg-card/50 border-white/10 focus:border-arminred-500 focus:ring-1 focus:ring-arminred-500 transition-all duration-300 h-12"
                  />
                </motion.div>
              </div>
              
              <motion.div 
                className="space-y-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor="subject" className="text-base font-medium">موضوع</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="موضوع پیام را وارد کنید"
                  className="bg-card/50 border-white/10 focus:border-arminred-500 focus:ring-1 focus:ring-arminred-500 transition-all duration-300 h-12"
                />
              </motion.div>
              
              <motion.div 
                className="space-y-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Label htmlFor="message" className="text-base font-medium">پیام</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="پیام خود را بنویسید"
                  rows={6}
                  className="bg-card/50 border-white/10 focus:border-arminred-500 focus:ring-1 focus:ring-arminred-500 transition-all duration-300 resize-none"
                />
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-2"
              >
                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg bg-gradient-to-r from-arminred-600 to-arminred-700 hover:from-arminred-700 hover:to-arminred-800 shadow-lg hover:shadow-arminred-500/20 transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                      در حال ارسال...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      ارسال پیام
                      <Send className="mr-2 h-5 w-5 transform group-hover:translate-x-[-4px] transition-transform duration-300" />
                    </span>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  با ارسال این فرم، شما موافقت می‌کنید که اطلاعات شما برای پاسخگویی به پیام شما استفاده شود.
                </p>
              </motion.div>
            </form>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
