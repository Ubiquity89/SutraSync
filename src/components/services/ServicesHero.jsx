import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-gradient-to-r
      from-white
      via-[#F9FBFF]
      to-[#EEF4FF]
      py-16 sm:py-20 lg:py-24
    "
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12 lg:gap-16
          items-center
        "
        >
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Breadcrumb */}

            <div
              className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-[#EAF3FF]
              text-[#3A83CC]
              text-sm
              font-medium
              mb-8
            "
            >
              Home
              <span>/</span>
              Services
            </div>

            {/* Heading */}

            <h1
              className="
              text-[36px]
              sm:text-[48px]
              lg:text-[68px]
              font-bold
              text-[#1A3552]
              leading-[1.05]
            "
            >
              Our IT
              <br />
              <span className="text-[#3A83CC]">Services</span>
            </h1>

            {/* Description */}

            <p
              className="
              mt-6
              max-w-[550px]
              text-[18px]
              leading-8
              text-slate-500
            "
            >
              We provide end-to-end digital solutions
              to help businesses grow, innovate and stay
              ahead in the digital world.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">

              <button
                className="
                h-12
                px-8
                rounded-xl
                text-white
                font-medium
                bg-gradient-to-r
                from-[#2D4F7D]
                to-[#3A83CC]
                flex
                items-center
                gap-2
                hover:scale-105
                transition-all
              "
              >
                <Link to="/contact">Get A Free Quote</Link>
                <ArrowRight size={18} />
              </button>

              <button
                className="
                h-12
                px-8
                rounded-xl
                border
                border-slate-200
                bg-white
                text-[#1A3552]
                font-medium
                flex
                items-center
                gap-2
                hover:bg-slate-50
                transition-all
              "
              >
                <Phone size={18} />
                <Link to="/contact">Schedule A Call</Link>
              </button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Large Blob */}

            <div
              className="
              absolute
              -z-10
              w-[600px]
              h-[600px]
              rounded-full
              bg-[#EAF3FF]
              blur-3xl
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
            />

            {/* Dots */}

            <div
              className="
              absolute
              left-0
              bottom-20
              w-24
              h-24
              opacity-40
            "
            >
              <div className="grid grid-cols-6 gap-2">
                {[...Array(36)].map((_, i) => (
                  <div
                    key={i}
                    className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-[#3A83CC]
                  "
                  />
                ))}
              </div>
            </div>

            {/* Dashboard Image */}

            <img
              src="/servicehero.png"
              alt="Dashboard"
              className="
              w-full
              relative
              z-10
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]
            "
            />

           

          </motion.div>

        </div>

      </div>
    </section>
  );
}