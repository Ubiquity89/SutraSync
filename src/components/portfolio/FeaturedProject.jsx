import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedProject({ project }) {
  return (
    <section className="pb-14 min-h-[400px] pt-14">
      <div className="max-w-[1200px] mx-auto px-6 ">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="
          overflow-hidden
          rounded-[32px]
          bg-[#0F2B59]
          grid
          lg:grid-cols-2
          shadow-[0_30px_80px_rgba(15,23,42,.12)]
        "
        >

          {/* LEFT */}

          <div className="p-12 flex flex-col justify-center">

            <span className="text-[#63A6FF] uppercase tracking-[3px] text-xs font-semibold">
              Featured Project
            </span>

            <h2 className="mt-6 text-5xl font-bold text-white leading-tight">
              {project.title}
            </h2>

           

            <div className="flex flex-wrap gap-3 mt-8">
              {project.technologies.map((item) => (
                <span
                  key={item}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  text-white
                  text-sm
                "
                >
                  {item}
                </span>
              ))}
            </div>

           

          </div>

          {/* IMAGE */}

          <div className="relative overflow-hidden">

            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: .5 }}
              src={project.image}
              alt={project.title}
              className="
              w-full
              h-[330px]
              object-cover
            "
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}