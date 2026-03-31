import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="editorial-container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} Kauê Mota. Todos os direitos reservados.
      </p>
      <nav className="flex gap-6">
        <Link to="/" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
          Início
        </Link>
        <Link to="/projetos" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
          Projetos
        </Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
