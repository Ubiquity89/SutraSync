import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function ServiceSection({
  service,
  reverse = false,
}) {
  return (
    <section
      className={`
        py-24
        overflow-hidden
        ${
          reverse
            ? "bg-gradient-to-r from-[#F8FAFF] via-white to-[#F8FAFF]"
            : "bg-gradient-to-r from-white via-[#FAFCFF] to-white"
        }
      `}
    >
      <Container>
        <div className="max-w-[1200px] mx-auto px-6">

          <div
            className={`
              grid
              lg:grid-cols-2
              gap-20
              items-center

              ${
                reverse
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }
            `}
          >

            {/* IMAGE SIDE */}

            <motion.div
              initial={{
                opacity: 0,
                x: reverse ? 100 : -100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >

             <div className=" flex items-center justify-center min-h-[550px]">
               {/* BIG BLOB */}
 <div
                className="
                absolute
                z-0
                w-[420px]
                h-[420px]
                rounded-full
                bg-[#EAF3FF]
                opacity-80
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                "
                />

              {/* SECONDARY BLOB */}

              <div
                className={`
                  absolute
                  -z-5
                  w-[200px]
                  h-[200px]
                  rounded-full
                  bg-[#DCEBFF]
                  blur-xl
                  bottom-0
                  left-0
                  ${service.blobClass}
                `}
              />

              {/* DOT PATTERN */}

              <div
                className="
                  absolute
                  -right-8
                  top-10
                  w-28
                  h-28
                  opacity-50
                  bg-[radial-gradient(circle,#3A83CC_1px,transparent_1px)]
                  bg-[size:12px_12px]
                "
              />

             
              {/* IMAGE */}

              <motion.img
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.4,
                }}
                src={service.image}
                alt={service.title}
                className=
                  
                  {`
  relative
  z-10
  max-w-none
  object-contain
  ${service.imageClass}
`}
              />
             </div>
            </motion.div>

            {/* CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: reverse ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              <p
                className="
                  text-[#3A83CC]
                  text-5xl
                  font-bold
                "
              >
                {service.number}
              </p>

              <h2
                className="
                  mt-4
                  text-[42px]
                  leading-tight
                  font-bold
                  text-[#1A3552]
                "
              >
                {service.title}
              </h2>

              <p
                className="
                  mt-6
                  text-slate-500
                  leading-8
                  max-w-[520px]
                "
              >
                {service.description}
              </p>

              {/* FEATURES */}

              <div className="mt-8 space-y-4">

                {service.features.map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay:
                          index * 0.08,
                      }}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <CheckCircle2
                        size={18}
                        className="
                          text-[#3A83CC]
                          shrink-0
                        "
                      />

                      <span className="text-slate-600">
                        {item}
                      </span>
                    </motion.div>
                  )
                )}

              </div>

              {/* BUTTON */}

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  mt-10
                  h-12
                  px-8
                  rounded-xl
                  text-white
                  font-medium

                  bg-gradient-to-r
                  from-[#234A7D]
                  to-[#3A83CC]

                  flex
                  items-center
                  gap-2

                  shadow-lg
                "
              >
                <a href="/contact">
                  Learn More
                </a>

                <ArrowRight
                  size={18}
                />

              </motion.button>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}