
import React from 'react';
import CustomScrollbar from './CustomScrollbar';

interface SmoothScrollbarProps {
  children: React.ReactNode;
}

const SmoothScrollbar: React.FC<SmoothScrollbarProps> = ({ children }) => {
  return (
    <CustomScrollbar>
      {children}
    </CustomScrollbar>
  );
};

export default SmoothScrollbar;
