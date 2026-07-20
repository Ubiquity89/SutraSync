import { motion } from "framer-motion";

export default function PortfolioFilter({
  categories,
  active,
  setActive,
}) {
  return (
    <section className="pb-10">

      <div className="max-w-[1200px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
          flex
          flex-wrap
          justify-center
          gap-4
        "
        >
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
                px-6
                h-11
                rounded-full
                border
                transition-all
                duration-300

                ${
                  active === item
                    ? "bg-[#3A83CC] text-white border-[#3A83CC] shadow-lg"
                    : "bg-white border-slate-200 text-slate-600 hover:border-[#3A83CC] hover:text-[#3A83CC]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </motion.div>

      </div>

    </section>
  );
}