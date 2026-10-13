import About from "@/components/Home/About";
import Blog from "@/components/Home/Blog";
import ContactSection from "@/components/Home/Contact";
import Hero from "@/components/Home/Home";
import Projects from "@/components/Home/Projects";
import Specialties from "@/components/Home/Specialties";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Specialties />
    <Projects />
    <Blog />
    <ContactSection />
    </>
  );
}
