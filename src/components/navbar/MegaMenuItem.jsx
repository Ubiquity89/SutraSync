import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MegaMenuItem({
  title,
  desc,
  icon: Icon,
  link,
}) {
  return (
    <Link to={link}>
      <motion.div
        whileHover={{
          x: 6,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          group
          rounded-2xl
          p-4
          cursor-pointer
          transition-all
          duration-300
          hover:bg-[#F4F9FF]
        "
      >
        <div className="flex items-start gap-4">

          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-[#EAF3FF]
              flex
              items-center
              justify-center
              shrink-0
              group-hover:bg-[#3A83CC]
              transition
            "
          >
            <Icon
              size={22}
              className="
                text-[#3A83CC]
                group-hover:text-white
                transition
              "
            />
          </div>

          <div className="flex-1">

            <div className="flex items-center justify-between">

              <h4
                className="
                  text-[#1A3552]
                  font-semibold
                  text-lg
                "
              >
                {title}
              </h4>

              <ArrowRight
                size={18}
                className="
                  opacity-0
                  group-hover:opacity-100
                  group-hover:translate-x-1
                  transition-all
                  text-[#3A83CC]
                "
              />

            </div>

            <p
              className="
                mt-2
                text-slate-500
                text-sm
                leading-6
              "
            >
              {desc}
            </p>

          </div>

        </div>
      </motion.div>
    </Link>
  );
}