import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function ServiceSection({
  service,
  reverse = false,
}) {
  return (
    <section
      id={service.id}
      className={`
        py-20 lg:py-28
        overflow-hidden
        ${
          reverse
            ? "bg-gradient-to-r from-[#F8FAFF] via-white to-[#F8FAFF]"
            : "bg-gradient-to-r from-white via-[#FAFCFF] to-white"
        }
      `}
    >
      <Container>

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: reverse ? 80 : -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
              }}
              className={`
                relative
                hidden
                md:flex
                items-center
                justify-center

                

                ${
                  reverse
                    ? "lg:col-span-5 lg:col-start-8 lg:row-start-1"
                    : "lg:col-span-5"
                }
              `}
            >

              {/* Blob */}

              <div
                className={`
                  absolute
                  rounded-full
                  bg-[#EAF3FF]
                  opacity-80
                  -translate-x-1/2
                  -translate-y-1/2
                  ${service.blobClass}
                `}
              />

             

              {/* Dots */}

              <div
                className="
                  absolute
                  right-0
                  top-10
                  w-28
                  h-28
                  opacity-40
                  bg-[radial-gradient(circle,#3A83CC_1px,transparent_1px)]
                  bg-[size:12px_12px]
                "
              />

            

              {/* Image */}

              <motion.img
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.03,
                }}
                src={service.image}
                alt={service.title}
                className={`
                  relative
                  z-10

                  object-contain

                  w-full
                  h-[900px]

                  ${service.imageClass}

                  drop-shadow-[0_30px_60px_rgba(58,131,204,.22)]
                `}
              />

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
              className={`
                ${
                  reverse
                    ? "lg:col-span-7 lg:col-start-1 lg:row-start-1"
                    : "lg:col-span-7"
                }
              `}
            >
                            {/* Number */}

              <div className="flex items-center mb-6">

                <span
                  className="
                    text-5xl
                    lg:text-6xl
                    font-bold
                    text-[#3A83CC]
                  "
                >
                  {service.number}
                </span>

              </div>

              {/* Title */}

              <h2
                className="
                  text-[34px]
                  sm:text-[40px]
                  lg:text-[46px]
                  font-bold
                  leading-tight
                  text-[#1A3552]
                "
              >
                {service.title}
              </h2>

              {/* Description */}

              <p
                className="
                  mt-6
                  text-lg
                  leading-8
                  text-slate-500
                  max-w-[650px]
                "
              >
                {service.description}
              </p>

              {/* Features */}

              <div
                className="
                  mt-10
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-y-5
                  gap-x-6
                "
              >

                {service.features.map((feature, index) => (

                  <motion.div
                    key={feature}
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
                      delay: index * 0.08,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                      min-w-0
                    "
                  >

                    <CheckCircle2
                      size={20}
                      className="
                        text-[#3A83CC]
                        shrink-0
                      "
                    />

                    <span
                      className="
                        text-[16px]
                        font-medium
                        text-slate-700
                        whitespace-nowrap
                      "
                    >
                      {feature}
                    </span>

                  </motion.div>

                ))}

              </div>

              {/* Technologies */}

              <div className="mt-12">

                <h4
                  className="
                    mb-5
                    text-sm
                    uppercase
                    tracking-[2px]
                    font-semibold
                    text-slate-400
                  "
                >
                  Technologies We Use
                </h4>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                  "
                >

                  {service.technologies.map((tech) => (

                    <motion.span
                      key={tech}
                      whileHover={{
                        y: -2,
                      }}
                      className="
                        px-4
                        py-2

                        rounded-full

                        bg-[#F4F8FC]

                        border

                        border-[#E3EDF9]

                        text-[#1A3552]

                        text-sm

                        font-medium

                        transition-all

                        duration-300

                        hover:bg-[#3A83CC]

                        hover:text-white

                        hover:border-[#3A83CC]
                      "
                    >
                      {tech}
                    </motion.span>

                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </Container>

    </section>

  );
}