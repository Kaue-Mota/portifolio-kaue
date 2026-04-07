import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingDots from "./FloatingDots";
import type { Lang } from "@/translations";
import { translations } from "@/translations";

const floatingElements = [
  { size: 300, top: "10%", left: "70%", color: "rgba(139, 92, 246, 0.35)", delay: 0, dur: 18 },
  { size: 350, top: "60%", left: "5%", color: "rgba(59, 130, 246, 0.3)", delay: 2, dur: 22 },
  { size: 250, top: "70%", left: "75%", color: "rgba(236, 72, 153, 0.25)", delay: 4, dur: 15 },
  { size: 200, top: "15%", left: "20%", color: "rgba(16, 185, 129, 0.2)", delay: 1, dur: 20 },
  { size: 180, top: "85%", left: "50%", color: "rgba(245, 158, 11, 0.2)", delay: 3, dur: 17 },
];

const Hero = ({ lang }: { lang: Lang }) => {
  const t = translations[lang];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    setCurrentWord(0);
  }, [lang]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Mesh gradient orbs — Desktop */}
      <div className="hidden md:block absolute inset-0 pointer-events-none hero-bg-base">
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: el.size,
              height: el.size,
              top: el.top,
              left: el.left,
              background: `radial-gradient(circle, ${el.color} 0%, transparent 70%)`,
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: el.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: el.delay,
            }}
          />
        ))}
      </div>

      {/* Mobile orbs */}
      <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden hero-bg-base">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 200, height: 200, top: "5%", right: "-10%",
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 180, height: 180, bottom: "15%", left: "-5%",
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Grid overlay */}
      <div className="hero-grid hidden md:block" />

      {/* Floating dots */}
      <FloatingDots paletteIndex={0} />

      {/* Content */}
      <div className="hero-content z-10">
        {/* Desktop content */}
        <div className="hidden md:flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-accent text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6"
              key={`eyebrow-${lang}`}>
              {t.hero_eyebrow}
            </p>
          </motion.div>

          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="hero-headline text-foreground">
                <span className="block">{t.hero_headline_1}</span>
                <span className="block">{t.hero_headline_2}</span>
                <span className="relative inline-block mt-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${currentWord}-${lang}`}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="hero-highlight inline-block"
                    >
                      {t[`hero_words_${currentWord}` as keyof typeof t]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-subtitle text-lg md:text-xl"
            key={`subtitle-${lang}`}
          >
            {t.hero_subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-row gap-4 mt-12"
          >
            <Link
              to="/projetos"
              className="btn-glow group text-sm"
            >
              <span>{t.hero_btn_projects}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={lang === "en"
                ? "https://wa.me/5561993375795?text=Hi,%20I%20saw%20your%20portfolio%20and%20would%20like%20a%20website"
                : "https://wa.me/5561993375795?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20site"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group text-sm"
            >
              <span>{t.hero_btn_quote}</span>
            </a>
          </motion.div>
        </div>

        {/* Mobile content */}
        <div className="hero-content-mobile flex flex-col items-start w-full md:hidden">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-1 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-pink-500 mb-6"
            style={{ transformOrigin: "left" }}
          />

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-accent text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 mb-4"
          >
            {t.hero_eyebrow}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="w-full mb-4"
          >
            <h1 className="hero-headline-mobile text-foreground leading-[1.08]">
              <span className="block">{t.hero_headline_1}</span>
              <span className="block">{t.hero_headline_2}</span>
              <span className="relative inline-block mt-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`m-${currentWord}-${lang}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="hero-highlight inline-block"
                  >
                    {t[`hero_words_${currentWord}` as keyof typeof t]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="w-16 h-[2px] bg-foreground mb-4"
            style={{ transformOrigin: "left" }}
          />

          <motion.p
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="hero-subtitle-mobile text-left leading-relaxed text-muted-foreground"
          >
            {t.hero_subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex flex-col gap-3 mt-6 w-full"
          >
            <Link
              to="/projetos"
              className="btn-glow group text-center justify-center text-sm"
            >
              <span>{t.hero_btn_projects}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={lang === "en"
                ? "https://wa.me/5561993375795?text=Hi,%20I%20saw%20your%20portfolio%20and%20would%20like%20a%20website"
                : "https://wa.me/5561993375795?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20site"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost group text-center justify-center text-sm"
            >
              <span>{t.hero_btn_quote}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-40 sm:bottom-16 md:bottom-16 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-muted-foreground"
        >
          <span className="font-accent text-[10px] uppercase tracking-[0.2em]">
            {t.hero_scroll}
          </span>
          <ChevronDown className="h-4 w-4 opacity-40" />
        </motion.div>
      </motion.div>

      {/* Horizontal accent line — Desktop only */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20 left-0 right-0 h-px bg-border/20 z-10 hidden md:block"
        style={{ transformOrigin: "left" }}
      />
    </section>
  );
};

export default Hero;
