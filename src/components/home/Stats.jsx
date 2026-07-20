import {
  Briefcase,
  Users,
  ShieldCheck,
  Code2,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  {
    value: 30,
    label: "Apps Developed",
    icon: Briefcase,
  },
  {
    value: 30,
    label: "Websites Developed",
    icon: Briefcase,
  },
  {
    value: 20,
    label: "Happy Clients",
    icon: Users,
  },
  
  {
    value: 50,
    label: "Customer Ratings",
    icon: Code2,
  },
  {
    value: 50,
    label: "Projects Delivered",
    icon: Trophy,
  },
];

function CountUpAnimation({ end, duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      {count}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F7FF] overflow-hidden">

      {/* Decorative Background Elements */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        top-20
        left-[5%]
        w-96
        h-96
        bg-[#3A83CC]/10
        rounded-full
        blur-3xl
        pointer-events-none
      "
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-20
        right-[5%]
        w-[500px]
        h-[500px]
        bg-[#234A7D]/8
        rounded-full
        blur-3xl
        pointer-events-none
      "
      />

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
Our Achievements          </motion.h2>

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
            Numbers that speak for our excellence.
          </motion.p>

        </motion.div>
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
    grid
    sm:grid-cols-2
    lg:grid-cols-5
    gap-6
  "
>
  {stats.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.label}
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
          delay: index * 0.08,
          duration: 0.6,
        }}
        whileHover={{
          y: -8,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[24px]
          bg-white
          border
          border-slate-200
          p-8
          text-center
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
            -top-10
            -right-10
            w-28
            h-28
            rounded-full
            bg-[#3A83CC]/10
            blur-3xl
          "
        />

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: -10,
            scale: 1.15,
          }}
          transition={{
            duration: 0.3,
          }}
          className="mb-6 flex justify-center"
        >
          <Icon
            size={42}
            className="
              text-[#3A83CC]
              group-hover:text-[#234A7D]
              transition-colors
            "
          />
        </motion.div>

        {/* Number */}

        <h3
          className="
            text-[42px]
            font-bold
            leading-none
            text-[#1A3552]
          "
        >
          <CountUpAnimation
            end={item.value}
          />
          +
        </h3>

        {/* Label */}

        <p
          className="
            mt-3
            text-slate-500
            font-medium
            leading-6
          "
        >
          {item.label}
        </p>

        {/* Bottom Line */}

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
</motion.div>
      </div>

    </section>
  );
}