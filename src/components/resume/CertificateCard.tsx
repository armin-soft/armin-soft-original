
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink, Calendar } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo?: string;
  index: number;
}

export function CertificateCard({ title, issuer, date, credentialUrl, logo, index }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="bg-black/50 backdrop-blur-xl border-gray-800 hover:border-arminred-500/50 transition-all duration-300 overflow-hidden">
        <CardContent className="p-6 relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-arminred-500/10 to-transparent rounded-bl-3xl" />
          
          <div className="flex items-start gap-4">
            {logo ? (
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 p-2 flex items-center justify-center">
                <img src={logo} alt={issuer} className="w-8 h-8 object-contain" />
              </div>
            ) : (
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 p-2.5 flex items-center justify-center">
                <Award className="h-6 w-6 text-arminred-500" />
              </div>
            )}
            
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2 group-hover:text-arminred-500 transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">{issuer}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="ml-1.5 h-3.5 w-3.5" />
                  {date}
                </div>
                
                {credentialUrl && (
                  <a 
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-arminred-500 hover:text-arminred-400 transition-colors"
                  >
                    مشاهده گواهی
                    <ExternalLink className="mr-1 h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
