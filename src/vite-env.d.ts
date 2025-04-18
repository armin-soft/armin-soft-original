
/// <reference types="vite/client" />

// تعریف interface برای window با dataLayer
interface Window {
  dataLayer?: any[];
}

declare namespace JSX {
  interface IntrinsicElements {
    'schema-org': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
