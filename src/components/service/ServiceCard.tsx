
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  details?: string[];
  index: number;
}

export const ServiceCard = ({ icon, title, description, details, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-card/50 backdrop-blur-sm border-2 border-border hover:border-arminred-500/30 transition-all duration-300 h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="bg-gradient-to-br from-arminred-500/20 to-arminred-500/10 p-4 rounded-2xl">
              {icon}
            </div>
            <div className="w-16 h-16 flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-full text-3xl font-bold bg-gradient-to-br from-arminred-600 to-arminred-700 text-white">
              {index + 1}
            </div>
          </div>
          <CardTitle className="text-2xl mt-4 text-gradient-primary">{title}</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        {details && (
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {details.map((detail, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center"
                >
                  <BadgeCheck className="ml-2 h-5 w-5 text-arminred-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        )}
        <CardFooter>
          <Button asChild variant="ghost" className="w-full justify-between group hover:bg-arminred-500/5">
            <Link to="/contact" className="group">
              <span className="text-arminred-600 group-hover:text-arminred-700">درخواست این خدمت</span>
              <ArrowRight className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
