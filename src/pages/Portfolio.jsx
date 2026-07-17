import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioFilters from "../components/portfolio/PortfolioFilters";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";

export default function Portfolio() {
  return (
    <>
      <Navbar />

      <main
        className="
        bg-gradient-to-b
        from-white
        via-[#F8FAFD]
        to-white
        
      "
      >
        <PortfolioHero />

        <div className="max-w-[1400px] mx-auto px-6">
          <PortfolioFilters />
          <PortfolioGrid />
          <PortfolioCTA />
        </div>
      </main>

      <Footer />
    </>
  );
}