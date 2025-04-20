
import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface FooterLinkGroup {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
}

interface FooterNavLinksProps {
  linkGroups: FooterLinkGroup[];
}

export function FooterNavLinks({ linkGroups }: FooterNavLinksProps) {
  return (
    <>
      {linkGroups.map((section, idx) => (
        <motion.div 
          key={idx} 
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <motion.h3 
            className="text-lg font-bold mb-6 relative pr-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative">
              {section.title}
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-arminred-500 to-transparent"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h3>
          
          <nav className="flex flex-col space-y-3">
            {section.links.map((link, linkIdx) => (
              <motion.div
                key={linkIdx}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx * 0.1) + (linkIdx * 0.05) }}
              >
                <Link 
                  to={link.path} 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center group relative pr-2"
                >
                  <motion.div
                    className="absolute right-0 w-1 h-0 bg-arminred-500 group-hover:h-full transition-all duration-300"
                    whileHover={{ height: "100%" }}
                  />
                  <motion.div 
                    className="relative flex items-center w-full"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ChevronRight className="h-3 w-3 text-arminred-500 opacity-0 group-hover:opacity-100 transition-opacity mr-1" />
                    <span className="relative">
                      {link.name}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-arminred-500/50 to-transparent"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      ))}
    </>
  );
}
