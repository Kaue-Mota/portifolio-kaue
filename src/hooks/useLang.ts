import { useState, useEffect, useCallback } from "react";

export function useLang() {
  const [lang, setLang] = useState<"en" | "pt">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang");
      return (stored === "pt" ? "pt" : "en") as "en" | "pt";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "en" ? "pt" : "en"));
  }, []);

  return { lang, toggle, isEN: lang === "en", isPT: lang === "pt" };
}
