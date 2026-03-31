import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="editorial-container flex items-center justify-between py-5">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
          Kauê Mota
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => handleNavClick(item.href)}
              className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5500000000000?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20site"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium tracking-wide uppercase hover:opacity-90 transition-opacity rounded-lg"
          >
            Fazer orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="editorial-container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className="font-body text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase py-2"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5500000000000?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20site"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium tracking-wide uppercase text-center hover:opacity-90 transition-opacity mt-2 rounded-lg"
            >
              Fazer orçamento
            </a>
          </div>
        </nav>
      )}

      <div className="editorial-divider" />
    </header>
  );
};

export default Header;
