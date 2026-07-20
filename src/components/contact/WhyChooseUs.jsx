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
    y: -8,
  }}
  className="
    relative
    overflow-hidden
    bg-white
    rounded-[24px]
    border
    border-slate-200
    p-8
    hover:border-[#3A83CC]/30
    hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]
    transition-all
    duration-300
  "
>
  {/* Glow */}

  <div
    className="
      absolute
      -top-8
      -right-8
      w-24
      h-24
      rounded-full
      bg-[#3A83CC]/10
      blur-3xl
    "
  />

  {/* Icon */}

  <motion.div
    whileHover={{
      rotate: -10,
      scale: 1.12,
    }}
    transition={{
      duration: 0.3,
    }}
    className="mb-6"
  >
    <Icon
      size={42}
      className="
        text-[#3A83CC]
        group-hover:text-[#234A7D]
      "
    />
  </motion.div>

  {/* Title */}

  <h4
    className="
      text-[24px]
      font-bold
      text-[#1A3552]
      leading-tight
    "
  >
    {item.title}
  </h4>

  {/* Description */}

  <p
    className="
      mt-4
      text-[16px]
      leading-7
      text-slate-500
    "
  >
    {item.desc}
  </p>

  {/* Bottom Accent */}

  <div
    className="
      absolute
      left-0
      bottom-0
      h-1
      w-0
      bg-gradient-to-r
      from-[#234A7D]
      to-[#3A83CC]
      group-hover:w-full
      transition-all
      duration-500
    "
  />
</motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;