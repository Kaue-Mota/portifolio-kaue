import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_URL =
  "https://wa.me/5561993375795?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20site";

const headlineWords = ["Sites", "Landing Pages", "Experiências", "Resultados"];

const floatingElements = [
  { size: 300, top: "10%", left: "70%", color: "rgba(139, 92, 246, 0.35)", delay: 0, dur: 18 },
  { size: 350, top: "60%", left: "5%", color: "rgba(59, 130, 246, 0.3)", delay: 2, dur: 22 },
  { size: 250, top: "70%", left: "75%", color: "rgba(236, 72, 153, 0.25)", delay: 4, dur: 15 },
  { size: 200, top: "15%", left: "20%", color: "rgba(16, 185, 129, 0.2)", delay: 1, dur: 20 },
  { size: 180, top: "85%", left: "50%", color: "rgba(245, 158, 11, 0.2)", delay: 3, dur: 17 },
];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % headlineWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const subtitleWords = [
    { text: "Desenvolvimento", color: "text-violet-400" },
    { text: "Web", color: "text-blue-400" },
    { text: "Design", color: "text-pink-400" },
    { text: "Resultados", color: "text-emerald-400" },
  ];

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
      <div className="hero-grid" />

      {/* Content */}
      <div className="hero-content z-10">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-accent text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3 sm:mb-6 leading-relaxed">
            {subtitleWords.map((w, i) => (
              <span key={i}>
                <span className="opacity-50">{w.text}</span>
                {i < subtitleWords.length - 1 && (
                  <span className="mx-1.5 sm:mx-2 opacity-25">·</span>
                )}
              </span>
            ))}
          </p>
        </motion.div>

        {/* Main headline */}
        <div className="mb-4 sm:mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="hero-headline text-foreground">
              <span className="block">Desenvolvedor</span>
              <span className="block">que cria</span>
              <span className="relative inline-block mt-0.5 sm:mt-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="hero-highlight inline-block"
                  >
                    {headlineWords[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hero-subtitle text-base sm:text-lg md:text-xl"
        >
          Sites profissionais com foco em performance, conversão e uma
          experiência visual que impressiona. Do conceito à entrega.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-3 mt-8 sm:mt-12"
        >
          <Link
            to="/projetos"
            className="btn-glow group text-sm sm:text-base"
          >
            <span>Ver projetos</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group text-sm sm:text-base"
          >
            <span>Fazer orçamento</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-16 sm:bottom-32 md:bottom-50 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-muted-foreground"
        >
          <span className="font-accent text-[10px] sm:text-xs uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 opacity-40" />
        </motion.div>
      </motion.div>

      {/* Horizontal line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-16 sm:bottom-20 left-6 md:left-0 right-6 md:right-0 h-px bg-border/20 z-10 origin-left"
      />
    </section>
  );
};

export default Hero;
