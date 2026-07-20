// import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import Projects from "../components/home/Projects";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import Blog from "../components/home/Blog";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";
export default function Home() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Process />
      <Testimonials />
      <Blog />
      <CTA />
      <Footer />
    </>
  );
}