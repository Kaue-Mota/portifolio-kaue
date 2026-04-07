import { motion } from "framer-motion";

interface LanguageToggleProps {
  lang: "en" | "pt";
  onToggle: () => void;
}

const LanguageToggle = ({ lang, onToggle }: LanguageToggleProps) => (
  <motion.button
    onClick={onToggle}
    className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 group"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.96 }}
    aria-label="Toggle language"
  >
    <span
      className={`${
        lang === "en" ? "text-foreground" : "opacity-40"
      } transition-opacity duration-300`}
    >
      EN
    </span>
    <span className="w-px h-3 bg-border/50" />
    <span
      className={`${
        lang === "pt" ? "text-foreground" : "opacity-40"
      } transition-opacity duration-300`}
    >
      PT
    </span>
  </motion.button>
);

export default LanguageToggle;
