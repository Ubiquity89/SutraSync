import { portfolioProjects } from "../../data/portfolioProjects";
import FeaturedProject from "./FeaturedProject";
import PortfolioCard from "./PortfolioCard";

const PortfolioGrid = () => {
  const featured = portfolioProjects.find(
    (item) => item.featured
  );

  const projects = portfolioProjects.filter(
    (item) => !item.featured
  );

  return (
    <>
      <FeaturedProject project={featured} />

      <div className="grid lg:grid-cols-3 gap-6">

        {projects.map((project) => (
          <PortfolioCard
            key={project.id}
            project={project}
          />
        ))}

      </div>
    </>
  );
};

export default PortfolioGrid;