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
          relative
          bg-white
          rounded-[32px]
          overflow-hidden
          shadow-xl
          border
          border-slate-100
        "
        >
          
          {/* Subtle Pattern Background */}

          <div
            className="
            absolute
            inset-0
            opacity-40
            bg-[radial-gradient(circle_at_1px_1px,rgba(58,131,204,0.1)_1px,transparent_0)]
            bg-[size:24px_24px]
          "
          />

          <div className="relative grid lg:grid-cols-5">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className={`
                    px-6
                    py-8
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    text-[#1A3552]
                    relative
                    group
                    ${
                      index !== stats.length - 1
                        ? "border-r border-slate-100"
                        : ""
                    }
                  `}
                >
                  {/* Glass Icon Container */}

                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="
                    relative
                    w-20
                    h-20
                    rounded-3xl
                    bg-gradient-to-r
                    from-[#234A7D]
                    to-[#3A83CC]
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  "
                  >
                    {/* Glow Behind Icon */}

                    <div
                      className="
                      absolute
                      inset-0
                      bg-[#3A83CC]/30
                      blur-xl
                      rounded-full
                    "
                    />

                    <Icon
                      size={32}
                      className="relative z-10 text-white"
                    />
                  </motion.div>

                  <div className="text-center">

                    <h3
                      className="
                      text-[56px]
                      leading-none
                      font-extrabold
                      tracking-tight
                      bg-gradient-to-r
                      from-[#234A7D]
                      to-[#3A83CC]
                      bg-clip-text
                      text-transparent
                    "
                    >
                      <CountUpAnimation
                        end={item.value}
                        duration={2.5}
                      />
                      +
                    </h3>

                    <p
                      className="
                      text-slate-600
                      text-sm
                      font-medium
                      mt-2
                    "
                    >
                      {item.label}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </motion.div>

      </div>

    </section>
  );
}