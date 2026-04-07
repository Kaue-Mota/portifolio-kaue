import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <SectionDivider type="dots" />
      <ProjectsSection />
      <SectionDivider type="line" />
      <Technologies />
      <SectionDivider type="waves" />
      <About />
      <SectionDivider type="fade" />
      <Services />
      <SectionDivider type="bold" variant="dark" />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
