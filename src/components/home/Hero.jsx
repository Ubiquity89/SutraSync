import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[92vh] flex items-center">

      {/* Background */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* top right blur */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
          absolute
          -top-40
          -right-32
          w-[700px]
          h-[700px]
          rounded-full
          bg-blue-200/40
          blur-[140px]
          "
        />

        {/* bottom left */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
          absolute
          -bottom-44
          -left-44
          w-[550px]
          h-[550px]
          rounded-full
          bg-blue-100
          blur-[140px]
          "
        />

        {/* center glow */}

        <div
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-white
          opacity-80
          blur-[100px]
          "
        />

        {/* dotted decoration */}

        <div
          className="
          absolute
          right-20
          top-[42%]
          grid
          grid-cols-6
          gap-3
          opacity-20
          "
        >
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-blue-500"
            />
          ))}
        </div>
      </div>

      <Container>

        <div
          className="
          max-w-6xl
          mx-auto
          flex
          flex-col
          items-center
          justify-center
          text-center
          py-28
          relative
          z-10
          "
        >

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .8,
            }}
            className="
            text-[32px]
            sm:text-[42px]
            md:text-[48px]
            lg:text-[62px]
            font-extrabold
            leading-[1.10]
            tracking-[-1px]
            text-slate-900
            max-w-6xl 
            "
          >
            Transforming Ideas
            <br />

            Into{" "}
            <span className="text-[#2563EB]">
              Digital Solutions.
            </span>

          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .2,
              duration: .8,
            }}
            className="
            mt-7
            max-w-3xl
            text-base
            sm:text-lg
            md:text-xl
            leading-8
            text-slate-500
            "
          >
            We help startups and enterprises design,
            develop and scale future-ready software,
            AI solutions and digital products that
            accelerate business growth.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .35,
            }}
            className="
            mt-14
            flex
            flex-wrap
            justify-center
            gap-4
            sm:gap-5
            "
          >

           <Button
  className="
    rounded-full
    px-6 sm:px-8
    py-5 sm:py-6
    bg-gradient-to-r
    from-[#6D4AFF]
    to-[#2563EB]
    hover:scale-105
    transition-all
    duration-300
    shadow-[0_10px_40px_rgba(37,99,235,.25)]
  "
>
              <div className="flex items-center gap-2">
                <Link to="/services">
                Explore Services
                </Link>

                <ArrowRight size={18} />

              </div>

            </Button>

            <Button
  variant="outline"
  className="
    rounded-full
    px-6 sm:px-8
    py-5 sm:py-6
    bg-white
    border
    border-slate-200
    hover:bg-slate-50
  "
>
              <div className="flex items-center gap-2">
              

                <Phone size={18} />
                <Link to="/contact">
                Book A Free Call
                </Link>

              </div>

            </Button>

          </motion.div>
                    {/* Trusted Companies */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .5,
              duration: .8,
            }}
            className="mt-20 w-full"
          >

            <p
              className="
              text-slate-500
              text-base
              mb-6
              text-center
              "
            >
              Trusted by innovative companies worldwide
            </p>

            <div
              className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-8
              sm:gap-14
              md:gap-20
              opacity-90
              "
            >

              <img
                src="/company2.png"
                alt="Company"
                className="
                h-6 sm:h-8
                w-auto
                max-w-[100px] sm:max-w-[120px]
                object-contain
                grayscale
                hover:grayscale-0
                transition
                duration-300
                "
              />

              <img
                src="/company1.png"
                alt="Company"
                className="
                h-6 sm:h-8
                w-auto
                max-w-[100px] sm:max-w-[120px]
                object-contain
                grayscale
                hover:grayscale-0
                transition
                duration-300
                "
              />

              <img
                src="/company3.jpeg"
                alt="Company"
                className="
                h-5 sm:h-7
                w-auto
                max-w-[100px] sm:max-w-[120px]
                object-contain
                grayscale
                hover:grayscale-0
                transition
                duration-300
                "
              />

              <img
                src="/company6.png"
                alt="Company"
                className="
                h-6 sm:h-8
                w-auto
                max-w-[100px] sm:max-w-[120px]
                object-contain
                grayscale
                hover:grayscale-0
                transition
                duration-300
                "
              />

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}