import { motion } from "framer-motion";
import process from "../../data/process";

export default function Process() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F7FF] overflow-hidden">

      {/* Decorative Background Elements */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        top-20
        right-[8%]
        w-80
        h-80
        bg-[#3A83CC]/10
        rounded-full
        blur-3xl
        pointer-events-none
      "
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-20
        left-[5%]
        w-96
        h-96
        bg-[#234A7D]/8
        rounded-full
        blur-3xl
        pointer-events-none
      "
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3A83CC 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
            text-[#3A83CC]
            text-sm
            font-semibold
            tracking-[3px]
            uppercase
            mb-3
          "
          >
            OUR PROCESS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
            text-[42px]
            lg:text-[48px]
            font-bold
            text-[#1A3552]
          "
          >
            Our Development Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="
            mt-4
            max-w-[650px]
            mx-auto
            text-[#64748B]
            leading-8
          "
          >
            A proven framework we follow to deliver successful
            digital products and exceptional user experiences.
          </motion.p>

        </motion.div>

        {/* Process Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-6
          gap-5
          relative
        "
        >
          {/* Connecting Line */}

          <div
            className="
            hidden
            xl:block
            absolute
            top-1/2
            left-0
            right-0
            h-0.5
            bg-gradient-to-r
            from-[#3A83CC]/20
            via-[#3A83CC]/40
            to-[#3A83CC]/20
            -translate-y-1/2
            z-0
          "
          />

          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(58,131,204,0.15)"
                }}
                className="
                relative
                bg-white/80
                backdrop-blur-xl
                border
                border-slate-100
                hover:border-[#3A83CC]/40
                rounded-2xl
                p-5
                transition-all
                duration-500
                group
                cursor-pointer
                z-10
              "
              >
                {/* Number Badge */}

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 + 0.3 }}
                  className="
                  absolute
                  top-3
                  right-3
                  text-white
                  font-bold
                  text-xs
                  bg-gradient-to-r
                  from-[#234A7D]
                  to-[#3A83CC]
                  px-2
                  py-1
                  rounded-full
                  shadow-md
                "
                >
                  {step.number}
                </motion.div>

                {/* Icon */}

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="
                  w-14
                  h-14
                  rounded-xl
                  bg-gradient-to-r
                  from-[#3A83CC]/10
                  to-[#234A7D]/10
                  flex
                  items-center
                  justify-center
                  mb-5
                  group-hover:from-[#3A83CC]/20
                  group-hover:to-[#234A7D]/20
                  transition-all
                  relative
                "
                >
                  {/* Glow Behind Icon */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-[#3A83CC]/20
                    blur-xl
                    rounded-xl
                  "
                  />

                  <Icon
                    size={26}
                    className="text-[#3A83CC] relative z-10"
                  />
                </motion.div>

                {/* Title */}

                <h3
                  className="
                  text-lg
                  font-bold
                  text-[#1A3552]
                  mb-2
                  group-hover:text-[#3A83CC]
                  transition-colors
                "
                >
                  {step.title}
                </h3>

                {/* Description */}

                <p
                  className="
                  text-xs
                  leading-6
                  text-[#64748B]
                "
                >
                  {step.description}
                </p>

                {/* Progress Indicator */}

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  className="
                  mt-4
                  h-0.5
                  bg-gradient-to-r
                  from-[#3A83CC]/30
                  to-[#3A83CC]
                  rounded-full
                "
                />

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}