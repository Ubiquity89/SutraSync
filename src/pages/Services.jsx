import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import ServicesHero from "../components/services/ServicesHero";
import ServicesList from "../components/services/ServicesList";
import Footer from "../components/layout/Footer";

export default function Services() {
  return (
    <>
      <TopBar />
      <Navbar />

      <ServicesHero />

      <ServicesList />

      <Footer />
    </>
  );
}