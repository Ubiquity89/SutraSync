import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid({ projects }) {
  return (
    <section className="pb-24">

      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}