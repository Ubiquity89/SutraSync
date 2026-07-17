import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PortfolioCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        h-[280px]
        w-full
        
      "
    >
      <img
        src={project.image}
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition
          duration-700
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#031B4E]
          via-[#031B4E]/40
          to-transparent
        "
      />

      <div className="absolute bottom-8 left-8 text-white">

        <p className="text-blue-300 text-sm">
          {project.category}
        </p>

        <h3
          className="
          mt-2
          text-4xl
          font-bold
        "
        >
          {project.title}
        </h3>

        <button
          className="
          mt-5
          flex
          items-center
          gap-2
        "
        >
          View Project
          <ArrowRight size={18} />
        </button>

      </div>
    </motion.div>
  );
};

export default PortfolioCard;