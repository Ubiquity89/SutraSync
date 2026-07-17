import Button from "../ui/Button";
import {
  ArrowRight,
  Phone,
  Code,
  Zap,
  Globe,
  Sparkles,
  Link,
} from "lucide-react";
import Container from "../ui/Container";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
     className="
relative
overflow-hidden
bg-gradient-to-r
from-white
via-[#F8FAFD]
to-[#EEF4FF]
py-10
"
    >
    

      {/* Background Elements */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
          absolute
          top-24
          right-[10%]
          w-40
          h-40
          bg-[#3A83CC]/20
          rounded-full
          blur-3xl
        "
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-20
          left-[5%]
          w-52
          h-52
          bg-[#234A7D]/15
          rounded-full
          blur-3xl
        "
        />

        {/* Floating Icons */}

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
          absolute
          top-[15%]
          left-[6%]
          text-[#3A83CC]/20
        "
        >
          <Code size={38} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-[20%]
          right-[10%]
          text-[#3A83CC]/15
        "
        >
          <Globe size={42} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="
          absolute
          top-[50%]
          left-[10%]
          text-[#3A83CC]/15
        "
        >
          <Zap size={32} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
          absolute
          top-[35%]
          right-[5%]
          text-[#3A83CC]/15
        "
        >
          <Sparkles size={30} />
        </motion.div>
      </div>

      <Container>

        <div
          className="
          max-w-[1200px]
          mx-auto
          grid
          lg:grid-cols-[50%_50%]
          gap-10
          items-center
        "
        >

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}

            <div
              className="
              inline-flex
              px-5
              py-2.5
              rounded-full
              bg-[#EAF3FF]
              text-[#3A83CC]
              text-sm
              font-semibold
              mb-8
              "
            >
              We Build Digital Excellence
            </div>

            {/* Heading */}

            <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="
  text-[32px]
  lg:text-[54px]
  leading-[1.08]
  font-bold
  text-[#1A3552]
  max-w-[620px]
"
>
  Transforming Ideas
  <br />
  Into{" "}
  <span className="text-[#3A83CC]">
    Digital Solutions
  </span>
</motion.h1>

            {/* Description */}

            <p
              className="
              mt-6
              max-w-[520px]
              text-lg
              leading-8
              text-slate-500
              "
            >
              We help startups and enterprises build scalable,
              innovative and future-ready digital solutions
              that drive real business growth.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <Button>
                <div className="flex items-center gap-2">
                  <a href="/services">
                    Explore Services
                  </a>
                  <ArrowRight size={16} />
                </div>
              </Button>

              <Button variant="outline">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="/contact">
                    Book A Free Call
                  </a>
                </div>
              </Button>

            </div>

            {/* Companies */}

            <div className="mt-12">

              <p className="text-sm text-slate-500 mb-5">
                Trusted by innovative companies worldwide
              </p>

              <div
                className="
                flex
                flex-wrap
                items-center
                gap-8
              "
              >
                <img
                  src="/company2.png"
                  alt=""
                  className="h-8 object-contain"
                />

                <img
                  src="/company1.png"
                  alt=""
                  className="h-8 object-contain"
                />

                <img
                  src="/company3.jpeg"
                  alt=""
                  className="h-6 object-contain"
                />

                <img
                  src="/company6.png"
                  alt=""
                  className="h-7 object-contain"
                />
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

         <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="
    relative
    flex
    justify-end
    items-center
  "
>
 

  {/* Dashboard */}

  <img
    src="/dashboard.png"
    alt="Dashboard"
    className="
    w-[600px]
    max-w-none
    h-[480px]
    relative
    z-10
  "
  />

  {/* Projects */}

  <div
    className="
    absolute
    top-10
    right-0
    bg-white
    rounded-3xl
    px-6
    py-4
    shadow-2xl
    z-20
    "
  >
    <p className="text-sm text-slate-500">
      Projects Delivered
    </p>

    <h3 className="text-5xl font-bold text-[#1A3552]">
      250+
    </h3>
  </div>

  {/* Clients */}

  <div
    className="
    absolute
    bottom-8
    right-10
    bg-white
    rounded-3xl
    px-6
    py-4
    shadow-2xl
    z-20
    "
  >
    <p className="text-sm text-slate-500">
      Happy Clients
    </p>

    <h3 className="text-5xl font-bold text-[#1A3552]">
      150+
    </h3>
  </div>
</motion.div>
        </div>

      </Container>
    </section>
  );
}