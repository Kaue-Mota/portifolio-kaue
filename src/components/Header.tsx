import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageToggle from "./LanguageToggle";
import pfp from "../assets/pfp.png";

interface NavItem {
  label: string;
  href: string;
}

const Header = ({ lang, navItems, onToggleLang }: { lang: string; navItems: NavItem[]; onToggleLang: () => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-black/[0.04]"
            : "bg-background/60 backdrop-blur-md"
        }`}
      >
        {/* Top accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

        <div className="editorial-container flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link
            to="/"
            className="group relative flex items-center gap-3"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-110 ring-2 ring-primary/30 group-hover:ring-primary/60">
              <img src={pfp} alt="Kauê Mota" className="w-full h-full object-cover object-top scale-125" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                Kauê Mota
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 mt-0.5">
                {lang === "en" ? "Web Developer" : "Desenvolvedor Web"}
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className="header-link group relative px-4 py-2 font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-violet-500 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}

            {/* Language Toggle */}
            <LanguageToggle
              lang={lang === "en" ? "en" : "pt"}
              onToggle={onToggleLang}
            />

            {/* CTA */}
            <a
              href={lang === "en"
                ? "https://wa.me/5561993375795?text=Hi,%20I%20saw%20your%20portfolio%20and%20would%20like%20a%20website"
                : "https://wa.me/5561993375795?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20site"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="header-cta relative ml-4 overflow-hidden rounded-xl bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:shadow-[0_0_24px_rgba(139,92,246,0.2)] hover:scale-[1.03]"
            >
              <span className="relative z-10">
                {lang === "en" ? "Get a Quote" : "Fazer orçamento"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-primary to-blue-600 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </a>
          </nav>

          {/* Mobile language toggle — centered in header bar */}
          <motion.button
            onClick={onToggleLang}
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/30 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            whileTap={{ scale: 0.94 }}
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "text-foreground" : "opacity-40"}>EN</span>
            <span className="w-px h-2.5 bg-border/50" />
            <span className={lang === "pt" ? "text-foreground" : "opacity-40"}>PT</span>
          </motion.button>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-foreground rounded-lg hover:bg-primary/5 transition-colors"
            aria-label="Menu"
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Bottom divider */}
        <motion.div
          className="editorial-divider"
          animate={{ opacity: scrolled ? 0.5 : 0.2 }}
          transition={{ duration: 0.5 }}
        />

        {/* Mobile nav overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="editorial-container py-5 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase py-3 px-3 rounded-lg hover:bg-primary/[0.04] block"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navItems.length + 1) * 0.07, duration: 0.3 }}
                >
                  <a
                    href={lang === "en"
                      ? "https://wa.me/5561993375795?text=Hi,%20I%20saw%20your%20portfolio%20and%20would%20like%20a%20website"
                      : "https://wa.me/5561993375795?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20site"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 bg-primary text-primary-foreground px-5 py-3 text-sm font-medium tracking-wide uppercase text-center block rounded-xl hover:shadow-[0_0_24px_rgba(139,92,246,0.2)] transition-shadow"
                  >
                    {lang === "en" ? "Get a Quote" : "Fazer orçamento"}
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
