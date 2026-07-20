import { motion } from "framer-motion";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden py-14 lg:py-16 bg-white">

     <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
  <div
    className="
      h-full
      w-full
      bg-[radial-gradient(circle,#3A83CC_1px,transparent_1px)]
      bg-[size:28px_28px]
    "
  />
</div>

      <div className="relative max-w-[1200px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          <div
            className="
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              bg-[#EEF5FF]
              text-[#3A83CC]
              text-xs
              font-semibold
              tracking-[3px]
              uppercase
            "
          >
            Our Work
          </div>

          <h1
            className="
              mt-8
              text-5xl
              lg:text-6xl
              font-bold
              text-[#16345B]
            "
          >
            Portfolio
          </h1>

          <p
            className="
              mt-6
              max-w-[680px]
              mx-auto
              text-slate-500
              leading-8
            "
          >
            A collection of software products, AI platforms,
            enterprise solutions and digital experiences we've
            designed and developed for businesses worldwide.
          </p>

        </motion.div>

      </div>
    </section>
  );
}