import { motion } from "framer-motion";

interface DotConfig {
  size: number;
  color: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
  driftX: number;
  driftY: number;
}

const palettes: DotConfig[][] = [
  // palette 1 — top section
  [
    { size: 6, color: "rgba(139,92,246,0.35)", x: 10, y: 15, delay: 0, duration: 14, driftX: 30, driftY: -20 },
    { size: 4, color: "rgba(59,130,246,0.4)", x: 85, y: 10, delay: 1, duration: 12, driftX: -25, driftY: 35 },
    { size: 8, color: "rgba(236,72,153,0.25)", x: 90, y: 70, delay: 2, duration: 16, driftX: -20, driftY: -25 },
    { size: 5, color: "rgba(16,185,129,0.3)", x: 20, y: 80, delay: 0.5, duration: 13, driftX: 40, driftY: 15 },
    { size: 3, color: "rgba(245,158,11,0.35)", x: 50, y: 5, delay: 3, duration: 11, driftX: -15, driftY: 30 },
    { size: 7, color: "rgba(139,92,246,0.2)", x: 70, y: 50, delay: 1.5, duration: 18, driftX: 25, driftY: -35 },
    { size: 4, color: "rgba(59,130,246,0.3)", x: 5, y: 50, delay: 2.5, duration: 15, driftX: 20, driftY: 20 },
    { size: 6, color: "rgba(236,72,153,0.2)", x: 40, y: 90, delay: 4, duration: 17, driftX: -30, driftY: -15 },
  ],
  // palette 2 — mid section (about)
  [
    { size: 5, color: "rgba(59,130,246,0.35)", x: 80, y: 20, delay: 0, duration: 13, driftX: -20, driftY: 25 },
    { size: 7, color: "rgba(16,185,129,0.3)", x: 15, y: 70, delay: 1, duration: 16, driftX: 35, driftY: -30 },
    { size: 4, color: "rgba(139,92,246,0.3)", x: 60, y: 80, delay: 2, duration: 12, driftX: -15, driftY: 20 },
    { size: 6, color: "rgba(245,158,11,0.25)", x: 35, y: 10, delay: 0.5, duration: 14, driftX: 20, driftY: -25 },
    { size: 3, color: "rgba(236,72,153,0.35)", x: 90, y: 55, delay: 3, duration: 11, driftX: -30, driftY: 15 },
    { size: 8, color: "rgba(59,130,246,0.2)", x: 25, y: 40, delay: 1.5, duration: 18, driftX: 25, driftY: 30 },
  ],
  // palette 3 — services (dark bg, brighter dots)
  [
    { size: 5, color: "rgba(245,158,11,0.45)", x: 85, y: 15, delay: 0, duration: 12, driftX: -25, driftY: 20 },
    { size: 4, color: "rgba(236,72,153,0.4)", x: 10, y: 60, delay: 1, duration: 14, driftX: 30, driftY: -15 },
    { size: 6, color: "rgba(139,92,246,0.35)", x: 45, y: 80, delay: 2, duration: 16, driftX: -20, driftY: 25 },
    { size: 3, color: "rgba(59,130,246,0.4)", x: 70, y: 25, delay: 0.5, duration: 11, driftX: 15, driftY: -30 },
    { size: 7, color: "rgba(16,185,129,0.3)", x: 30, y: 50, delay: 3, duration: 15, driftX: -30, driftY: 20 },
    { size: 5, color: "rgba(245,158,11,0.3)", x: 55, y: 90, delay: 1.5, duration: 13, driftX: 20, driftY: -20 },
  ],
  // palette 4 — contact
  [
    { size: 6, color: "rgba(139,92,246,0.3)", x: 15, y: 20, delay: 0, duration: 14, driftX: 25, driftY: -20 },
    { size: 4, color: "rgba(16,185,129,0.35)", x: 80, y: 70, delay: 1, duration: 12, driftX: -20, driftY: 30 },
    { size: 5, color: "rgba(236,72,153,0.25)", x: 50, y: 10, delay: 2, duration: 16, driftX: 15, driftY: 25 },
    { size: 7, color: "rgba(59,130,246,0.3)", x: 90, y: 40, delay: 0.5, duration: 13, driftX: -25, driftY: -15 },
    { size: 3, color: "rgba(245,158,11,0.3)", x: 30, y: 85, delay: 3, duration: 11, driftX: 30, driftY: 20 },
    { size: 8, color: "rgba(139,92,246,0.2)", x: 60, y: 55, delay: 1.5, duration: 18, driftX: -15, driftY: -25 },
  ],
];

interface FloatingDotsProps {
  paletteIndex?: number;
  className?: string;
}

const FloatingDots = ({ paletteIndex = 0, className = "" }: FloatingDotsProps) => {
  const dots = palettes[paletteIndex] ?? palettes[0];

  return (
    <div className={`scattered-dots ${className}`} aria-hidden="true">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            backgroundColor: dot.color,
            filter: dot.size >= 6 ? "blur(1px)" : "none",
          }}
          animate={{
            x: [0, dot.driftX, 0, -dot.driftX * 0.5, 0],
            y: [0, dot.driftY, 0, -dot.driftY * 0.5, 0],
            opacity: [
              parseFloat(dot.color.split(",").pop()?.replace(")", "") ?? "0.3"),
              0.6,
              parseFloat(dot.color.split(",").pop()?.replace(")", "") ?? "0.3"),
              0.5,
              parseFloat(dot.color.split(",").pop()?.replace(")", "") ?? "0.3"),
            ],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;
