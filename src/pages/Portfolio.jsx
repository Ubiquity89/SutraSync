import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioFilter from "../components/portfolio/PortfolioFilter";
import FeaturedProject from "../components/portfolio/FeaturedProject";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";
import {
  portfolioCategories,
  featuredProject,
  portfolioProjects,
} from "../data/portfolioProjects";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const gridProjects = portfolioProjects.filter(
  (project) => project.id !== featuredProject.id
);

const filteredProjects =
  activeCategory === "All"
    ? gridProjects
    : gridProjects.filter(
        (project) => project.category === activeCategory
      );

  return (
    <>
    <Navbar/>
      <PortfolioHero />

      <PortfolioFilter
        categories={portfolioCategories}
        active={activeCategory}
        setActive={setActiveCategory}
      />

      {activeCategory === "All" && (
      <FeaturedProject project={featuredProject} />
      )}

<PortfolioGrid
  projects={filteredProjects}
/>

     
      
      <PortfolioCTA />
      
      <Footer/>
    </>
  );
}