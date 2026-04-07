import { useState, useEffect } from "react";
import { translations } from "@/translations";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import type { Lang } from "@/translations";

const Index = () => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "pt" ? "pt" : "en") as Lang;
  });
  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "pt" : "en"));

  const navItems = [
    { label: t.nav_home, href: "/" },
    { label: t.nav_projects, href: "/projetos" },
    { label: t.nav_about, href: "/#sobre" },
    { label: t.nav_contact, href: "/#contato" },
  ];

  return (
    <>
      <Header lang={lang} navItems={navItems} onToggleLang={toggleLang} />
      <main>
        <Hero lang={lang} />
        <SectionDivider type="dots" variant="light" />
        <ProjectsSection lang={lang} />
        <SectionDivider type="line" variant="light" />
        <Technologies lang={lang} />
        <SectionDivider type="waves" variant="light" />
        <About lang={lang} />
        <SectionDivider type="fade" variant="light" />
        <Services lang={lang} />
        <SectionDivider type="bold" variant="dark" />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
};

export default Index;
