import projectBarber from "/images/barber.png";
import projectEternare from "/images/eternare.png";
import projectKmoveis from "/images/kmoveis.png";
import projectLelaluminio from "/images/lelaluminio.png";

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
    title: "Presença Digital para Barbearias Modernas",
    description:
      "Site institucional desenvolvido para transmitir estilo, tradição e profissionalismo. Com foco em conversão, inclui agendamento online, galeria de cortes e navegação intuitiva para atrair e fidelizar clientes.",
    image: projectBarber,
    category: "Site Institucional",
    link: "https://barbeariamattoss.vercel.app",
  },
  {
    id: "2",
    title: "Landing Page para Experiências Memoráveis",
    description:
      "Página de alta conversão criada para um produto digital emocional. Design moderno, tipografia marcante e estrutura pensada para guiar o usuário até a criação de memórias únicas de forma simples e envolvente.",
    image: projectEternare,
    category: "E-commerce",
    link: "https://www.eternareit.com/",
  },
  {
    id: "3",
    title: "Site Institucional para Móveis Planejados",
    description:
      "Projeto focado em elegância e clareza, destacando ambientes sofisticados e soluções sob medida. Interface leve e estratégica para apresentar serviços e gerar contatos qualificados.",
    image: projectKmoveis   ,
    category: "Site Institucional",
    link: "https://landing-page-kmoveis-vtwo.vercel.app",
  },
  {
    id: "4",
    title: "Catálogo Digital para Indústria de Alumínio",
    description:
      "Plataforma desenvolvida para apresentar produtos com impacto visual e credibilidade. Layout moderno, com destaque para qualidade e fácil acesso ao catálogo e contato comercial.",
    image: projectLelaluminio,
    category: "Site Institucional",
    link: "https://lelaluminio.vercel.app",
  },
];
