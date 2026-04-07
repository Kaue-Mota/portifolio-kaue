import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <ProjectsSection />
      <Technologies />
      <About />
      <Services />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
