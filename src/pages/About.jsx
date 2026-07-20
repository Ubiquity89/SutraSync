// import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import AboutHero from "../components/about/AboutHero";
import Footer from "../components/layout/Footer";
import TeamSection from "../components/about/TeamSection";
import ValuesSection from "../components/about/Values";
import ClientSection from "../components/about/ClientSection";

export default function About() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />
      <AboutHero />
      <TeamSection />
      <ValuesSection />
      <ClientSection />
      <Footer />
    </>
  );
}