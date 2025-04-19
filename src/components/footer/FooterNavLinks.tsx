
import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        <div key={idx} className="md:col-span-2">
          <h3 className="text-lg font-bold mb-4 relative pr-3 before:content-[''] before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-arminred-600">
            {section.title}
          </h3>
          <nav className="flex flex-col space-y-2">
            {section.links.map((link, linkIdx) => (
              <Link 
                key={linkIdx} 
                to={link.path} 
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
              >
                <motion.span 
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  className="h-1 w-1 bg-arminred-500 rounded-full ml-2 opacity-60 group-hover:opacity-100"
                />
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      ))}
    </>
  );
}
