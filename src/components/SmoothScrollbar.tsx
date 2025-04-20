
import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

interface SmoothScrollbarProps {
  children: React.ReactNode;
}

const SmoothScrollbar: React.FC<SmoothScrollbarProps> = ({ children }) => {
  return (
    <SimpleBar 
      className="h-screen overflow-y-auto overflow-x-hidden" 
      style={{ scrollBehavior: 'smooth' }}
      autoHide={false}
    >
      {children}
    </SimpleBar>
  );
};

export default SmoothScrollbar;
