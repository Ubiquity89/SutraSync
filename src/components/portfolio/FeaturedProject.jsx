import { ArrowRight } from "lucide-react";

const FeaturedProject = ({ project }) => {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-[32px]
      bg-[#031B4E]
      text-white
      grid
      lg:grid-cols-2
      mb-10
      max-w-1200px
    
    "
    >
      <div className="p-12 max-w-1000">

        <p className="text-blue-400">
          FEATURED PROJECT
        </p>

        <h2
          className="
          mt-6
          text-6xl
          font-bold
        "
        >
          {project.title}
        </h2>

        <span
          className="
          inline-block
          mt-4
          px-4
          py-2
          rounded-full
          bg-blue-600
        "
        >
          {project.category}
        </span>

        <p className="mt-6 text-slate-300 leading-8">
          {project.description}
        </p>

        <div className="flex gap-4 mt-8">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <button
          className="
          mt-10
          flex
          items-center
          gap-3
          font-semibold
        "
        >
          View Case Study
          <ArrowRight />
        </button>
      </div>

      <img
        src={project.image}
        alt=""
        className="
          w-1200
          h-full
          object-cover
        "
      />
    </div>
  );
};

export default FeaturedProject;