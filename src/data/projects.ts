import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectLanding from "@/assets/project-landing.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce de Moda Contemporânea",
    description:
      "Loja online completa com catálogo, carrinho e integração de pagamento. Design focado em conversão e experiência premium.",
    image: projectEcommerce,
    category: "E-commerce",
    link: "#",
  },
  {
    id: "2",
    title: "Landing Page para Startup SaaS",
    description:
      "Página de alta conversão para produto digital. Copywriting persuasivo e design editorial que gerou 3x mais leads.",
    image: projectLanding,
    category: "Landing Page",
    link: "#",
  },
  {
    id: "3",
    title: "Portfólio para Estúdio de Arquitetura",
    description:
      "Site institucional com galeria de projetos, grid editorial e navegação fluida. Estilo sofisticado e minimalista.",
    image: projectPortfolio,
    category: "Site Institucional",
    link: "#",
  },
  {
    id: "4",
    title: "Dashboard de Gestão Financeira",
    description:
      "Painel administrativo com gráficos, relatórios e controle de métricas. Interface limpa e dados acessíveis.",
    image: projectDashboard,
    category: "Sistema Web",
    link: "#",
  },
];
