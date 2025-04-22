
import { useScroll, useTransform } from "framer-motion";

export const useAboutAnimations = () => {
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, 60]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return {
    opacity,
    y,
    scale,
    parallaxY,
  };
};
