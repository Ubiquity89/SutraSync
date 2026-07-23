import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import ServicesHero from "../components/services/ServicesHero";
import ServicesList from "../components/services/ServicesList";
import Footer from "../components/layout/Footer";

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = location.hash.slice(1);

    const timer = setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* <TopBar /> */}
      <Navbar />

      <ServicesHero />

      <ServicesList />

      <Footer />
    </>
  );
}