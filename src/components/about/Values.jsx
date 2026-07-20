import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import values from "../../data/values";

import {
  ShieldCheck,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function ValuesSection() {
  return (
    <section className=" hidden md:block py-16 sm:py-20 lg:py-32 bg-white overflow-hidden">

      <div className="max-w-[1260px] mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[46%_50%] gap-12 lg:gap-16 items-center">

          {/* LEFT */}

          <div className="relative">

            {/* Label */}

            <div
              className="
              flex
              items-center
              gap-4
              mb-8
              "
            >
              <span className="text-[#3A83CC] text-xl">~</span>

              <p
                className="
                text-[#3A83CC]
                font-bold
                uppercase
                tracking-[4px]
                "
              >
                OUR VALUES
              </p>

              <span className="text-[#3A83CC] text-xl">~</span>
            </div>

            {/* Heading */}

            <h2
              className="
              text-[36px] sm:text-[46px]
              leading-[1.25]
              font-bold
              text-[#1A3552]
              "
            >
              Driven by 
              <span className="text-[#3A83CC]"> Values</span>,
              <br />
              Focused on <span className="text-[#3A83CC]">Excellence</span>
            </h2>

            <p
              className="
              mt-6
              text-lg
              text-slate-500
              leading-9
              max-w-[520px]
              mb-20
              "
            >
              We follow strong values and a customer-first
              approach to deliver solutions that create
              real impact.
            </p>

            

            {/* Background Globe */}

            <div
              className="
              absolute
              bottom-[-120px]
              left-0
              w-[520px]
              h-[520px]
              rounded-full
              border
              border-[#3A83CC]/10
              opacity-200
              "
            />

            <div
              className="
              absolute
              bottom-[-120px]
              left-0
              w-[420px]
              h-[420px]
              rounded-full
              border
              border-[#3A83CC]/10
              opacity-40
              "
            />

            {/* Connected Icons */}

            <div
              className="
            
              absolute
              bottom-[-40px]
              left-0
              flex
              items-center
              gap-16
              "
            >
              {[
                Users,
                ShieldCheck,
                BadgeCheck,
                ShieldCheck,
              ].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                  }}
                  className="
                  w-20
                  h-20
                  rounded-full
                  bg-white
                  shadow-xl
                  flex
                  items-center
                  justify-center
                  relative
                  "
                >
                  <Icon
                    size={30}
                    className="text-[#3A83CC]"
                  />

                  {index !== 3 && (
                    <div
                      className="
                      absolute
                      top-1/2
                      left-full
                      w-16
                      border-t-2
                      border-dashed
                      border-[#3A83CC]/30
                      "
                    />
                  )}
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-2
            xl:grid-cols-2
            gap-6
            "
          >
            {values.map((item, index) => {
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                  relative
                  bg-white
                  rounded-[28px]
                  p-8
                  border
                  border-[#EEF2F8]
                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                  overflow-hidden
                  group
                  "
                >
                  {/* Background Circle */}

                  <div
                    className="
                    absolute
                    top-5
                    left-5
                    w-16
                    h-16
                    rounded-full
                    bg-[#EEF4FF]
                    group-hover:scale-125
                    transition-all
                    duration-500
                    "
                  />

                  <Icon
                    size={34}
                    className="
                    text-[#3A83CC]
                    relative
                    z-10
                    "
                  />

                  <h3
                    className="
                    mt-6
                    text-2xl
                    font-bold
                    text-[#1A3552]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-4
                    text-slate-500
                    leading-8
                    "
                  >
                    {item.desc}
                  </p>

                  {/* Hover Blob */}

                  <div
                    className="
                    absolute
                    right-0
                    bottom-0
                    w-32
                    h-32
                    bg-[#3A83CC]/10
                    rounded-full
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    "
                  />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
}