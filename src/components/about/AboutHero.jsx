import { motion } from "framer-motion";
import { Play, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
export default function AboutHero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-white
      py-16 sm:py-20 lg:py-24
      "
    >
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12 lg:gap-20
          items-center
          "
        >
          

          {/* LEFT */}
          

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p
              className="
              text-[#3A83CC]
              uppercase
              tracking-[3px]
              text-sm
              font-semibold
              mb-5
              "
            >
              WHO WE ARE
            </p>

            <h1
              className="
              text-[32px]
              sm:text-[42px]
              lg:text-[58px]
              leading-[1.1]
              font-bold
              text-[#1A3552]
              "
            >
              Your Complete IT
              <br />
              <span className="text-[#3A83CC]">
                {" "} Support Partner 
              </span>
              
            </h1>

            <p
              className="
              mt-8
              text-[#64748B]
              text-sm sm:text-base
              leading-7 sm:leading-8
              max-w-[620px]
              "
            >
              Whether you have a few computers or offices
              throughout the country, we provide expert
              assistance when equipment fails, networks crash,
              or you simply need a helping hand.
            </p>

           

            {/* CTA */}

            <button
              className="
              mt-10
              flex
              items-center
              gap-4
              font-semibold
              text-[#1A3552]
              "
            >
              <div
                className="
                w-14
                h-14
                rounded-full
                bg-gradient-to-r
                from-[#2D4F7D]
                to-[#3A83CC]
                flex
                items-center
                justify-center
                shadow-xl
                "
              >
                <Play
                  size={18}
                  className="text-white ml-1"
                />
              </div>
              <Link to="https://www.youtube.com/@sutrasyncindia">
                Watch Our Introduction
              </Link>
            </button>

          </motion.div>

          {/* RIGHT */}

          {/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative flex justify-center"
>

  {/* MAIN BLOB */}

  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      rotate: [0, 5, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[650px]
    h-[500px]
    bg-[#EAF3FF]
    opacity-90
    blur-[30px]
    rounded-[55%_45%_60%_40%]
    z-0
    "
  />

  {/* SECONDARY BLOB */}

  <motion.div
    animate={{
      scale: [1, 1.12, 1],
      rotate: [0, -4, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
    absolute
    top-[55%]
    left-[60%]
    -translate-x-1/2
    -translate-y-1/2
    w-[450px]
    h-[350px]
    bg-[#DCEBFF]
    opacity-70
    blur-[50px]
    rounded-[45%_55%_40%_60%]
    z-0
    "
  />

  {/* IMAGE */}

  <img
    src="/abouthero.png"
    alt="Team"
    className="
    relative
    z-10
    w-full
    max-w-[500px] sm:max-w-[600px] lg:max-w-[700px]
    rounded-[24px] sm:rounded-[32px]
    shadow-[0_30px_80px_rgba(0,0,0,0.12)]
    object-cover
    "
  />

  {/* Dots */}

  <div
    className="
    absolute
    left-[-25px]
    bottom-14
    grid
    grid-cols-5
    gap-2
    z-20
    "
  >
    {[...Array(25)].map((_, i) => (
      <div
        key={i}
        className="
        w-2
        h-2
        rounded-full
        bg-[#3A83CC]
        opacity-50
        "
      />
    ))}
  </div>

  {/* Support Card */}

  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="
    absolute
    bottom-[-20px] sm:bottom-[-25px]
    right-4 sm:right-6
    bg-gradient-to-r
    from-[#234A7D]
    to-[#3A83CC]
    text-white
    rounded-[20px] sm:rounded-[24px]
    px-6 sm:px-8
    py-5 sm:py-6
    shadow-[0_20px_50px_rgba(35,74,125,0.35)]
    z-20
    "
  >
    <div className="flex items-center gap-4">

      <Headphones size={34} />

      <div>
        <h3 className="text-2xl sm:text-3xl font-bold">
          24/7
        </h3>

        <p className="text-white/80 text-sm">
          Support Available
        </p>
      </div>

    </div>
  </motion.div>

</motion.div>

        </div>

      </div>
    </section>
  );
}