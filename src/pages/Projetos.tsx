import { useState, useEffect } from "react";
import { translations } from "@/translations";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import type { Lang } from "@/translations";

const Projetos = () => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    return saved === "pt" ? "pt" : "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "pt" : "en"));

  const t = translations[lang];

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
        <ProjectsSection lang={lang} showAll />
      </main>
      <Footer lang={lang} />
    </>
  );
};

export default Projetos;
