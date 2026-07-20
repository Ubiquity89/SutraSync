import {
  Shield,
  Users,
  Award,
  Headphones,
} from "lucide-react";

import { motion } from "framer-motion";

const items = [
  {
    icon: Shield,
    title: "100% Secure",
    desc: "Enterprise-grade security and best practices for every project.",
  },
  {
    icon: Users,
    title: "50+ Clients",
    desc: "Trusted by startups, enterprises and growing businesses.",
  },
  {
    icon: Award,
    title: "99.9% Uptime",
    desc: " Provides high uptime and reliabity",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated support whenever you need assistance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#F8FAFD] overflow-hidden">

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          top-0
          right-[-200px]
          w-[500px]
          h-[500px]
          bg-[#3A83CC]
          rounded-full
          blur-[150px]
        "
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-16"
        >
          <p
            className="
              text-[#3A83CC]
              text-sm
              font-semibold
              uppercase
              tracking-[3px]
            "
          >
            Why Choose Us
          </p>

          <h2
            className="
              mt-4
              text-[32px] sm:text-[36px] md:text-[42px] lg:text-[52px]
              font-bold
              text-[#1A3552]
            "
          >
            Why Partner With Us?
          </h2>

          <p
            className="
              mt-4
              text-slate-500
              max-w-2xl
              mx-auto
            "
          >
            We combine strategy, technology and creativity
            to deliver scalable digital solutions that help
            businesses grow faster.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  relative
                  overflow-hidden
                  bg-white/90
                  backdrop-blur-md
                  rounded-[28px]
                  border
                  border-slate-100
                  p-8
                  shadow-[0_10px_40px_rgba(15,23,42,0.06)]
                "
              >
                {/* Card Glow */}

                <div
                  className="
                    absolute
                    top-0
                    right-0
                    w-24
                    h-24
                    bg-[#3A83CC]/10
                    rounded-full
                    blur-2xl
                  "
                />

                {/* Icon */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#234A7D]
                    to-[#3A83CC]
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-lg
                    mb-6
                  "
                >
                  <Icon size={28} />
                </motion.div>

                <h4
                  className="
                    text-xl
                    font-bold
                    text-[#1A3552]
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    mt-3
                    text-slate-500
                    leading-7
                  "
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;