import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "../ui/CountAnimation";
import GlobeGraphic from "./GlobeGraphic";
import BlogGrid from "./BlogGrid";
import { Link } from "react-router-dom";

const BlogHero = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-visible bg-[#041539]">

        {/* Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
              absolute
              right-[-200px]
              top-[-200px]
              w-[1000px]
              h-[1000px]
              rounded-full
              bg-blue-500/20
              blur-[180px]
            "
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 sm:pt-20 pb-16 sm:pb-40 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

            {/* LEFT */}
            <div>

              {/* Breadcrumb */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  sm:px-4
                  py-1
                  sm:py-1.5
                  rounded-full
                  bg-white/10
                  text-blue-300
                  text-xs
                  sm:text-sm
                  mb-5
                  sm:mb-8
                "
              >
                Home
                <span>/</span>
                Blog
              </div>

              {/* Heading */}
              <h1
                className="
                  text-[34px]
                  sm:text-[52px]
                  md:text-[64px]
                  lg:text-[58px]
                  font-bold
                  leading-[1]
                  text-white
                "
              >
                Tech Insights
                <br />
                <span className="text-blue-400">
                  & Trends
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-5
                  sm:mt-8
                  text-white/80
                  text-base
                  sm:text-lg
                  leading-8
                  max-w-xl
                "
              >
                Stay updated with the latest trends, AI insights,
                practical tutorials and digital transformation
                strategies.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-10">

                <button
                  className="
                    h-12
                    px-6
                    sm:px-8
                    rounded-xl
                    bg-gradient-to-r
                    from-[#2D4F7D]
                    to-[#3A83CC]
                    text-white
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:scale-105
                    transition-all
                  "
                >
                  <Link to="/blog">
                    Explore Articles
                  </Link>

                  <ArrowRight size={18} />
                </button>

                {/* Hidden on Mobile */}
                <button
                  className="
                    hidden
                    sm:flex
                    h-12
                    px-6
                    sm:px-8
                    rounded-xl
                    bg-white
                    text-[#031B4E]
                    font-medium
                    border
                    border-white
                    items-center
                    justify-center
                  "
                >
                  Subscribe
                </button>

              </div>

            </div>

            {/* RIGHT */}
            <div className="hidden md:block relative flex justify-end">

              <GlobeGraphic />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  top-10
                  right-0
                  bg-white
                  rounded-3xl
                  shadow-2xl
                  px-8
                  py-5
                "
              >
                <p className="text-slate-500">
                  Articles
                </p>

                <h3 className="text-5xl font-bold text-[#031B4E]">
                  250+
                </h3>

              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-20
                  left-10
                  bg-white
                  rounded-3xl
                  shadow-2xl
                  px-8
                  py-5
                "
              >
                <p className="text-slate-500">
                  Readers
                </p>

                <h3 className="text-5xl font-bold text-[#031B4E]">
                  10K+
                </h3>

              </motion.div>

            </div>

          </div>

        </div>
                {/* FLOATING STATS */}
        <div
          className="
            hidden md:block
            absolute
            left-0
            right-0
            bottom-0
            translate-y-1/2
            z-30
          "
        >
          <div className="max-w-[1200px] mx-auto px-8">

            <div
              className="
                bg-white
                rounded-[36px]
                border
                border-slate-100
                overflow-hidden
                shadow-[0_30px_80px_rgba(15,23,42,0.12)]
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

                {/* Articles */}
                <div className="py-8 text-center">

                  <div
                    className="
                      inline-flex
                      px-4
                      py-1
                      rounded-full
                      bg-blue-50
                      text-blue-600
                      text-xs
                      uppercase
                      font-semibold
                      tracking-wider
                    "
                  >
                    Articles
                  </div>

                  <h3 className="mt-4 text-5xl font-bold text-[#031B4E]">
                    <CountUp end={50} duration={2.5} />+
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Published
                  </p>

                </div>

                {/* Audience */}
                <div className="py-8 text-center border-x border-slate-100">

                  <div
                    className="
                      inline-flex
                      px-4
                      py-1
                      rounded-full
                      bg-blue-50
                      text-blue-600
                      text-xs
                      uppercase
                      font-semibold
                      tracking-wider
                    "
                  >
                    Audience
                  </div>

                  <h3 className="mt-4 text-5xl font-bold text-[#031B4E]">
                    <CountUp end={10} duration={2.5} />
                    K+
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Monthly Readers
                  </p>

                </div>

                {/* Content */}
                <div className="py-8 text-center">

                  <div
                    className="
                      inline-flex
                      px-4
                      py-1
                      rounded-full
                      bg-blue-50
                      text-blue-600
                      text-xs
                      uppercase
                      font-semibold
                      tracking-wider
                    "
                  >
                    Content
                  </div>

                  <h3 className="mt-4 text-5xl font-bold text-[#031B4E]">
                    Weekly
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Fresh Updates
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>

      </section>
            {/* NEXT SECTION */}
      <section className="bg-white pt-8 sm:pt-20 lg:pt-40 pb-24">

        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">

          <div className="text-center mb-12 sm:mb-16">

            <p className="text-blue-500 uppercase tracking-[4px] text-xs sm:text-sm font-semibold">
              Latest Articles
            </p>

            <h2
              className="
                mt-3
                sm:mt-4
                text-2xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-[#031B4E]
              "
            >
              Explore Our Insights
            </h2>

            <p
              className="
                mt-4
                text-sm
                sm:text-base
                text-slate-500
                max-w-2xl
                mx-auto
                leading-7
              "
            >
              Expert articles covering technology, AI,
              software development and digital transformation.
            </p>

          </div>

          <BlogGrid />

        </div>

      </section>

    </>
  );
};

export default BlogHero;