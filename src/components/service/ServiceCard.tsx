
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
      <Card className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300 h-full flex flex-col">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-arminred-500/20 to-arminred-500/10 p-4 rounded-2xl">
              {icon}
            </div>
            <span className="text-4xl font-bold text-arminred-500/20">0{index + 1}</span>
          </div>
          <CardTitle className="text-2xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed text-gray-400">
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
                  <span className="text-gray-300">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        )}
        <CardFooter>
          <Button asChild variant="ghost" className="w-full justify-between group hover:bg-arminred-500/10">
            <Link to="/contact">
              <span className="text-arminred-500 group-hover:text-arminred-400">درخواست این خدمت</span>
              <ArrowRight className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
