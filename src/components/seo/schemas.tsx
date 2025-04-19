import React from "react";

export const getPersonSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "آرمین سافت",
    "url": "https://arminsoft.ir",
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "sameAs": [
      "https://twitter.com/ARMIN_SOFT",
      "https://github.com/arminsoft",
      "https://linkedin.com/in/arminsoft"
    ],
    "jobTitle": "متخصص برنامه‌نویسی و نرم افزار",
    "worksFor": {
      "@type": "Organization",
      "name": "آرمین سافت"
    }
  };

  return JSON.stringify(schemaData);
};

export const getServiceSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "خدمات نرم افزاری و امنیت",
    "provider": {
      "@type": "Person",
      "name": "آرمین سافت",
      "url": "https://arminsoft.ir"
    },
    "description": "خدمات نرم‌افزاری، طراحی سایت، امنیت وب و هوش مصنوعی",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "IRR"
    }
  };

  return JSON.stringify(schemaData);
};

export const getArticleSchema = ({ headline, description, datePublished, dateModified, image }: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": "آرمین سافت",
      "url": "https://arminsoft.ir"
    },
    "publisher": {
      "@type": "Person",
      "name": "آرمین سافت",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lovable.dev/opengraph-image-p98pqg.png"
      }
    }
  };

  return JSON.stringify(schemaData);
};

// These are the React component versions for backward compatibility
export const PersonSchema = () => null;
export const ServiceSchema = () => null;
export const ArticleSchema = () => null;
