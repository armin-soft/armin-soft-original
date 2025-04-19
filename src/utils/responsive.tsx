
import React, { useEffect, useState } from 'react';

type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ResponsiveComponentProps {
  children: React.ReactNode;
  breakpoint: BreakpointType;
  showAbove?: boolean;
}

const breakpointValues = {
  'xs': 475,
  'sm': 640,
  'md': 768,
  'lg': 1024,
  'xl': 1280,
  '2xl': 1400,
};

/**
 * A component that conditionally renders its children based on the current screen size
 * @param children The content to render
 * @param breakpoint The breakpoint to check against
 * @param showAbove If true, shows content above the breakpoint, otherwise shows below
 */
export const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({ 
  children, 
  breakpoint, 
  showAbove = true 
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const checkScreenSize = () => {
      const breakpointPixels = breakpointValues[breakpoint];
      const currentWidth = window.innerWidth;
      
      if (showAbove) {
        setShouldRender(currentWidth >= breakpointPixels);
      } else {
        setShouldRender(currentWidth < breakpointPixels);
      }
    };

    // Check screen size on initial render
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint, showAbove]);

  // Only attempt to render client-side to prevent hydration mismatch
  if (!isMounted) return null;

  return shouldRender ? <>{children}</> : null;
};

/**
 * A hook that returns whether the current screen size is above a certain breakpoint
 * @param breakpoint The breakpoint to check against
 * @returns boolean indicating if screen is above the breakpoint
 */
export function useBreakpoint(breakpoint: BreakpointType): boolean {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const checkScreenSize = () => {
      const breakpointPixels = breakpointValues[breakpoint];
      const currentWidth = window.innerWidth;
      setIsAboveBreakpoint(currentWidth >= breakpointPixels);
    };

    // Check screen size on initial render
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener('resize', checkScreenSize);

    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [breakpoint]);

  // If not mounted yet (SSR), assume default value
  return isMounted ? isAboveBreakpoint : false;
}

// Convenient components for specific breakpoints
export const Mobile = ({ children }: { children: React.ReactNode }) => (
  <ResponsiveComponent breakpoint="md" showAbove={false}>{children}</ResponsiveComponent>
);

export const Desktop = ({ children }: { children: React.ReactNode }) => (
  <ResponsiveComponent breakpoint="md" showAbove={true}>{children}</ResponsiveComponent>
);

export const Tablet = ({ children }: { children: React.ReactNode }) => (
  <ResponsiveComponent breakpoint="sm" showAbove={true}>
    <ResponsiveComponent breakpoint="lg" showAbove={false}>
      {children}
    </ResponsiveComponent>
  </ResponsiveComponent>
);
