import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative pt-20 pb-28 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F7FF] overflow-hidden">

      {/* Decorative Background Elements */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        top-20
        left-[10%]
        w-72
        h-72
        bg-[#3A83CC]/10
        rounded-full
        blur-3xl
        pointer-events-none
      "
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-20
        right-[8%]
        w-80
        h-80
        bg-[#234A7D]/8
        rounded-full
        blur-3xl
        pointer-events-none
      "
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-r
          from-[#21406B]
          via-[#2D5AA8]
          to-[#3A83CC]
          px-12
          py-14
          shadow-2xl
        "
        >

          {/* Animated Glow */}

          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
            absolute
            w-[350px]
            h-[350px]
            bg-white/10
            rounded-full
            -top-32
            -right-32
            blur-3xl
          "
          />

          {/* Subtle Pattern Overlay */}

          <div
            className="
            absolute
            inset-0
            opacity-10
            bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)]
            bg-[size:32px_32px]
          "
          />

          {/* Floating Sparkle */}

          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
            absolute
            top-8
            right-12
            text-white/15
          "
          >
            <Sparkles size={40} />
          </motion.div>

          <div
            className="
            relative
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-8
          "
          >

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2
                className="
                text-white
                text-[38px]
                font-bold
                leading-tight
              "
              >
                Ready to Build Something Amazing?
              </h2>

              <p
                className="
                mt-3
                text-white/80
                text-lg
                leading-relaxed
              "
              >
                Let's turn your idea into a powerful digital product.
              </p>

            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="
              h-14
              px-8
              bg-white
              text-[#21406B]
              rounded-xl
              font-semibold
              flex
              items-center
              gap-2
              transition-all
              shadow-xl
            "
            >
              <a href="/contact">
                Get In Touch
              </a>

              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
