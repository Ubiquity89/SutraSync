import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioCard({ project }) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="
      relative
      overflow-hidden
      rounded-[28px]
      group
      h-[300px]
      cursor-pointer
    "
    >
      {/* IMAGE */}

      <img
        src={project.image}
        alt={project.title}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
      "
      />

      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#041E46]
        via-[#041E46]/40
        to-transparent
      "
      />

      {/* Title */}

    <motion.div
  variants={{
    rest: {
      opacity: 1,
      y: 0,
    },
    hover: {
      opacity: 0,
      y: -20,
    },
  }}
  transition={{ duration: 0.25 }}
  className="absolute left-7 right-7 bottom-7 z-20"
>
  <p className="text-[#7EB5FF] text-xs uppercase tracking-[2px]">
    {project.category}
  </p>

  <h3 className="mt-2 text-3xl font-bold text-white leading-tight">
    {project.title}
  </h3>
</motion.div>

      {/* Hover Panel */}

      <motion.div
  variants={{
    rest: {
      y: "100%",
      opacity: 0,
    },
    hover: {
      y: 0,
      opacity: 1,
    },
  }}
  transition={{
    duration: 0.35,
    delay: 0.1,
  }}

        className="
        absolute
        inset-0
        bg-white/12
        backdrop-blur-xl
        border-t
        border-white/20
        p-7
        flex
        flex-col
        justify-end
      "
      >

        <p className="text-white/90 leading-7">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">

          {project.technologies.map((item) => (
            <span
              key={item}
              className="
              px-3
              py-1
              rounded-full
              bg-white/15
              text-white
              text-xs
            "
            >
              {item}
            </span>
          ))}

        </div>

        <button
          className="
          mt-6
          flex
          items-center
          gap-2
          text-white
          font-semibold
        "
        >
          View Project

          <ArrowRight size={18} />
        </button>

      </motion.div>

    </motion.div>
  );
}