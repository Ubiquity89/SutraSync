import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  PenTool,
  Cloud,
  Brain,
  Briefcase,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, scalable and high-performance web applications.",
    icon: Monitor,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps that deliver exceptional experiences.",
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive and user-centered designs that convert.",
    icon: PenTool,
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable, secure and reliable cloud infrastructure.",
    icon: Cloud,
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent solutions using AI/ML to automate processes.",
    icon: Brain,
  },
  {
    title: "Digital Consulting",
    description:
      "Strategic consulting to help your business grow and scale.",
    icon: Briefcase,
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-[#F8FAFD] to-white">

      {/* Background Elements */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
          absolute
          top-20
          left-[8%]
          w-64
          h-64
          bg-[#3A83CC]/15
          rounded-full
          blur-3xl
        "
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-20
          right-[5%]
          w-80
          h-80
          bg-[#234A7D]/12
          rounded-full
          blur-3xl
        "
        />

        {/* Floating Icons */}

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="
          absolute
          top-[15%]
          left-[20%]
          text-[#3A83CC]/10
        "
        >
          <Sparkles size={36} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -90],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-[10%]
          left-[40%]
          text-[#234A7D]/10
        "
        >
          <Zap size={32} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-[25%]
          left-[10%]
          text-[#3A83CC]/10
        "
        >
          <Zap size={42} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-[25%]
          left-[10%]
          text-[#3A83CC]/10
        "
        >
          <Zap size={42} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
          absolute
          top-[45%]
          right-[8%]
          text-[#3A83CC]/10
        "
        >
          <Target size={36} />
        </motion.div>

      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
            text-[#3A83CC]
            text-sm
            font-semibold
            tracking-[3px]
            uppercase
          "
          >
            WHAT WE DO
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="
            mt-4
            text-[48px]
            lg:text-[52px]
            font-bold
            text-[#1A3552]
          "
          >
            Services That We Provide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="
            mt-4
            text-slate-500
            max-w-[600px]
            mx-auto
            leading-8
          "
          >
            We build powerful digital solutions that help businesses
            accelerate growth and achieve their goals.
          </motion.p>

        </motion.div>

        {/* Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                group
                relative
                border
                border-slate-200
                rounded-3xl
                p-8
                bg-white
                hover:shadow-2xl
                transition-all
                duration-500
                overflow-hidden
              "
              >
                {/* Hover Gradient Background */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#3A83CC]/5
                  to-[#234A7D]/5
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
                />

                {/* Icon Container */}

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#234A7D]
                  to-[#3A83CC]
                  flex
                  items-center
                  justify-center
                  mb-6
                  shadow-lg
                  group-hover:shadow-xl
                  transition-shadow
                  duration-300
                "
                >
                  <Icon
                    size={28}
                    className="text-white"
                  />
                </motion.div>

                {/* Content */}

                <div className="relative z-10">

                  <h3
                    className="
                    text-xl
                    font-semibold
                    text-[#1A3552]
                    mb-3
                    group-hover:text-[#3A83CC]
                    transition-colors
                    duration-300
                  "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                    text-slate-500
                    leading-7
                  "
                  >
                    {service.description}
                  </p>

                </div>

               
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-14"
        >

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(58, 131, 204, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="
            h-12
            px-8
            rounded-xl
            text-white
            bg-gradient-to-r
            from-[#234A7D]
            to-[#3A83CC]
            flex
            items-center
            gap-2
            shadow-lg
            font-semibold
            transition-all
            duration-300
          "
          
          >
            <a   href="/services">
              View All Services
            </a>

            <motion.span
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
}