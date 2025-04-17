
import { useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Github, Instagram, Mail, MapPin, Phone, Twitter, Youtube, AtSign, MessagesSquare, MessageSquare } from "lucide-react";

const Contact = () => {
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
    
    // شبیه‌سازی ارسال فرم
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

  const contactMethods = [
    {
      icon: <Phone className="h-10 w-10 text-arminred-500" />,
      title: "تماس تلفنی",
      value: "۰۹۳۵۸۹۸۳۸۵۴",
      link: "tel:+989358983854",
    },
    {
      icon: <Mail className="h-10 w-10 text-arminred-500" />,
      title: "ایمیل",
      value: "info@armin-soft.ir",
      link: "mailto:info@armin-soft.ir",
    },
    {
      icon: <MapPin className="h-10 w-10 text-arminred-500" />,
      title: "آدرس",
      value: "ایران، تهران، پاکدشت",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={24} />, name: "اینستاگرام", url: "https://instagram.com/ARMIN_SOFT", color: "bg-gradient-to-br from-purple-600 to-pink-500" },
    { icon: <Twitter size={24} />, name: "توییتر", url: "https://twitter.com/@ARMIN_SOFT", color: "bg-blue-500" },
    { icon: <MessageSquare size={24} />, name: "واتساپ", url: "https://wa.me/989358983854", color: "bg-green-500" },
    { icon: <Facebook size={24} />, name: "فیسبوک", url: "https://www.facebook.com/@ARMINSOFT0", color: "bg-blue-600" },
    { icon: <Github size={24} />, name: "گیت‌هاب", url: "https://github.com/ARMIN-SOFT", color: "bg-gray-800" },
    { icon: <Youtube size={24} />, name: "یوتیوب", url: "https://www.youtube.com/@ARMIN_SOFT", color: "bg-red-600" },
    { icon: <MessagesSquare size={24} />, name: "کانال تلگرام", url: "https://t.me/Channel_ARMINSOFT", color: "bg-blue-400" },
    { icon: <MessagesSquare size={24} />, name: "تلگرام", url: "https://t.me/ARMIN_SOFT", color: "bg-blue-400" },
    { icon: <AtSign size={24} />, name: "آپارات", url: "https://www.aparat.com/ARMIN_SOFT", color: "bg-red-500" },
  ];

  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-arminred-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-arminred-600/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">تماس با آرمین سافت</h1>
            <p className="text-lg text-gray-300 mb-8">
              برای ارتباط با من و صحبت درباره پروژه‌ها و همکاری‌های احتمالی، از راه‌های زیر استفاده کنید
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 farsi-numbers">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-arminred-500/10 flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <a 
                    href={method.link} 
                    className="text-lg text-muted-foreground hover:text-arminred-600 transition-colors"
                    target={method.title === "آدرس" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Social Links */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="bg-card border border-border shadow-md overflow-hidden">
                <div className="bg-black p-4">
                  <h3 className="text-xl font-bold text-white">ارسال پیام</h3>
                </div>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">نام و نام خانوادگی</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="نام خود را وارد کنید"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">ایمیل</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="ایمیل خود را وارد کنید"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">موضوع</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="موضوع پیام را وارد کنید"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">پیام</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="پیام خود را بنویسید"
                        rows={6}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="bg-arminred-600 hover:bg-arminred-700 w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Social Media Links */}
            <div className="lg:col-span-2">
              <Card className="bg-card border border-border shadow-md h-full">
                <div className="bg-black p-4">
                  <h3 className="text-xl font-bold text-white">شبکه‌های اجتماعی</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">
                    می‌توانید من را در شبکه‌های اجتماعی زیر دنبال کنید و از آخرین اخبار و فعالیت‌هایم مطلع شوید.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-3 rounded-lg bg-accent hover:bg-accent/80 transition-all duration-300"
                      >
                        <div className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center text-white mb-2`}>
                          {social.icon}
                        </div>
                        <span className="text-sm font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-5 bg-arminred-500/10 rounded-lg border border-arminred-500/20">
                    <h4 className="font-bold mb-2 flex items-center">
                      <Phone className="ml-2 h-5 w-5 text-arminred-600" />
                      تماس سریع
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      برای ارتباط سریع‌تر با شماره <a href="tel:+989358983854" className="text-arminred-600 font-medium">۰۹۳۵۸۹۸۳۸۵۴</a> تماس بگیرید یا به آیدی <a href="https://t.me/ARMIN_SOFT" className="text-arminred-600 font-medium" target="_blank" rel="noopener noreferrer">@ARMIN_SOFT</a> در تلگرام پیام دهید.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">موقعیت مکانی</h2>
            <p className="text-muted-foreground mt-2">برای ملاقات حضوری، موقعیت مکانی آرمین سافت</p>
          </div>
          
          <div className="rounded-lg overflow-hidden h-[400px] border-4 border-white shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207254.46391850397!2d51.249158366220615!3d35.70531294947146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1653389178128!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="نقشه دفتر آرمین سافت"
            ></iframe>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Contact;
