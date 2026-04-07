import { Link } from "react-router-dom";
import type { Lang } from "@/translations";
import { translations } from "@/translations";

const Footer = ({ lang }: { lang: Lang }) => {
  const t = translations[lang];
  return (
    <footer className="border-t border-border">
      <div className="editorial-container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kauê Mota. {t.footer_rights}.
        </p>
        <nav className="flex gap-6">
          <Link to="/" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t.footer_nav_home}
          </Link>
          <Link to="/projetos" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t.footer_nav_projects}
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
