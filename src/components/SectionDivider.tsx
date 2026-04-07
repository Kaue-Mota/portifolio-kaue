import { motion } from "framer-motion";

type DividerType =
  | "dots"
  | "line"
  | "waves"
  | "fade"
  | "bold";

interface SectionDividerProps {
  type?: DividerType;
  variant?: "light" | "dark";
}

const SectionDivider = ({ type = "dots", variant = "light" }: SectionDividerProps) => {
  const isDark = variant === "dark";

  if (type === "dots") {
    return (
      <div className={`relative py-10 flex items-center justify-center ${isDark ? "bg-primary" : "bg-background"}`}>
        <div className="flex items-center gap-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className={`w-1 h-1 rounded-full ${
                isDark ? "bg-primary-foreground/20" : "bg-muted-foreground/20"
              }`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === "line") {
    return (
      <div className={`relative py-14 ${isDark ? "bg-primary" : "bg-background"} flex items-center`}>
        <div className="editorial-container w-full flex items-center gap-6">
          <motion.div
            className={`flex-1 h-px ${isDark ? "bg-primary-foreground/10" : "bg-foreground/8"}`}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            className={`w-2 h-2 rotate-45 ${isDark ? "bg-primary-foreground/20" : "bg-foreground/12"}`}
            initial={{ rotate: -45, scale: 0 }}
            whileInView={{ rotate: 45, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
          />
          <motion.div
            className={`flex-1 h-px ${isDark ? "bg-primary-foreground/10" : "bg-foreground/8"}`}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "right" }}
          />
        </div>
      </div>
    );
  }

  if (type === "waves") {
    return (
      <div className={`relative py-8 ${isDark ? "bg-primary" : "bg-background"}`}>
        <svg
          className="w-full max-w-3xl mx-auto h-10"
          viewBox="0 0 600 40"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 20 Q50 5, 100 20 T200 20 T300 20 T400 20 T500 20 T600 20"
            stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.path
            d="M0 20 Q50 35, 100 20 T200 20 T300 20 T400 20 T500 20 T600 20"
            stroke={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)"}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.15 }}
          />
        </svg>
      </div>
    );
  }

  if (type === "fade") {
    return (
      <div className={`relative py-12 ${isDark ? "bg-primary" : "bg-background"}`}>
        <motion.div
          className={`h-px ${isDark
            ? "bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent"
            : "bg-gradient-to-r from-transparent via-foreground/5 to-transparent"
          }`}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ marginLeft: "auto", marginRight: "auto", width: "70%" }}
        />
      </div>
    );
  }

  if (type === "bold") {
    return (
      <div className={`relative py-16 ${isDark ? "bg-primary" : "bg-background"} flex items-center`}>
        <div className="editorial-container w-full flex items-center gap-6">
          <motion.div
            className="w-16 h-[3px] rounded-full bg-gradient-to-r from-violet-500/40 via-blue-500/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            className={`w-2 h-2 rounded-full ${isDark ? "bg-primary-foreground/10" : "bg-foreground/8"}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
          />
          <motion.div
            className={`flex-1 h-px ${isDark ? "bg-primary-foreground/5" : "bg-foreground/5"}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>
    );
  }

  return null;
};

export default SectionDivider;
