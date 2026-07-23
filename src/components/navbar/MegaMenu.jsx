import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import MegaMenuItem from "./MegaMenuItem";
import { servicesMenu } from "./servicesMenu";

export default function MegaMenu() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 15,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        absolute
        left-[-250px]
        top-full
        mt-6
        w-[1050px]
        rounded-[30px]
        bg-white
        border
        border-slate-200
        shadow-2xl
        p-10
        z-50
      "
    >
      <div className="grid grid-cols-[280px_1fr_1fr] gap-10">

        {/* LEFT */}

        <div>

          <p
            className="
              uppercase
              tracking-[3px]
              text-[#3A83CC]
              text-sm
              font-semibold
            "
          >
            SERVICES
          </p>

          <h2
            className="
              mt-5
              text-[34px]
              leading-tight
              font-bold
              text-[#1A3552]
            "
          >
            Build Digital Products That Scale
          </h2>

          <p
            className="
              mt-6
              text-slate-500
              leading-8
            "
          >
            From strategy to launch, we build modern
            software solutions that help businesses
            grow faster.
          </p>

          <Link
            to="/services"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              font-semibold
              text-[#3A83CC]
              hover:gap-3
              transition-all
            "
          >
            View All Services

            <ArrowRight size={18} />

          </Link>

        </div>

        {/* RIGHT */}

        {servicesMenu.map((column) => (

          <div key={column.category}>

            <h3
              className="
                text-xl
                font-bold
                text-[#1A3552]
                pb-4
                border-b
                border-slate-200
                mb-6
              "
            >
              {column.category}
            </h3>

            <div className="space-y-2">

              {column.items.map((item) => (

                <MegaMenuItem
                  key={item.title}
                  {...item}
                />

              ))}

            </div>

          </div>

        ))}

      </div>
    </motion.div>
  );
}