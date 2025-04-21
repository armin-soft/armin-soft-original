
import { motion } from "framer-motion";

const PARTICLE_COUNT = 28;
const random = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export function AboutParticlesBackground() {
  // هر بار رندر مقادیر رندوم مختلف به ذرات می‌دهد
  const particles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
    size: random(10, 28),
    top: random(5, 95),
    left: random(2, 98),
    duration: random(12, 28),
    delay: random(0, 6),
    opacity: random(0.13, 0.33),
    blur: random(12,28),
    color:
      i % 4 === 0
        ? "bg-arminred-600/60"
        : i % 4 === 1
        ? "bg-white/20"
        : i % 4 === 2
        ? "bg-purple-600/30"
        : "bg-blue-400/20"
  }));

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          className={`absolute rounded-full ${p.color}`}
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            opacity: p.opacity,
            filter: `blur(${p.blur}px)`
          }}
          initial={{ y: -80, scale: 0.95 }}
          animate={{
            y: [0, 60, 0],
            scale: [0.95, 1.15, 0.95],
            opacity: [p.opacity, p.opacity * 1.1, p.opacity]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: p.delay
          }}
        />
      ))}
      {/* Gradient Overlays */}
      <div className="absolute w-full h-3/4 top-0 bg-gradient-to-b from-arminred-500/5 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute w-full h-full top-0 bg-gradient-to-b from-black/60 to-transparent z-0 pointer-events-none"></div>
    </div>
  );
}
