// import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactMap from "../components/contact/ContactMap";
import WhyChooseUs from "../components/contact/WhyChooseUs";
import ContactCTA from "../components/contact/ContactCTA";

const Contact = () => {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />

      <ContactHero />
      <ContactMap />
      <WhyChooseUs />
      <ContactCTA />

      <Footer />
    </>
  );
};

export default Contact;