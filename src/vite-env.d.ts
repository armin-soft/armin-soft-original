
/// <reference types="vite/client" />

// Define interface for window with dataLayer
interface Window {
  dataLayer?: any[];
}

declare namespace JSX {
  interface IntrinsicElements {
    'schema-org': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
