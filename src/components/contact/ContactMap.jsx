import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const ContactMap = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">

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
          left-[-200px]
          top-20
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#3A83CC]
          blur-[140px]
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
            duration: 0.7,
          }}
          className="text-center mb-14"
        >
          <p
            className="
              text-[#3A83CC]
              text-sm
              font-semibold
              tracking-[3px]
              uppercase
            "
          >
            Visit Us
          </p>

          <h2
            className="
              mt-4
              text-[32px] sm:text-[36px] md:text-[42px] lg:text-[52px]
              font-bold
              text-[#1A3552]
            "
          >
            Find Our Office
          </h2>

          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            We'd love to meet you. Visit our office
            or schedule a consultation with our team.
          </p>
        </motion.div>

        {/* Map Container */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-slate-100
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
        >
          <iframe
            title="location"
            src="https://www.google.com/maps/place/Sutrasync+Technologies-+It+Solutions+and+Software+Development/@13.1085825,77.5765665,17z/data=!4m10!1m2!2m1!1sSutrasync+Technologies+Bengaluru!3m6!1s0x3bae190c0a4da225:0xebfc2fee9876b882!8m2!3d13.1085439!4d77.5793709!15sCiBTdXRyYXN5bmMgVGVjaG5vbG9naWVzIEJlbmdhbHVydZIBFGluZm9ybWF0aW9uX3NlcnZpY2Vz4AEA!16s%2Fg%2F11mzr35wyw?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
            className="w-full h-[350px] sm:h-[400px] md:h-[500px]"
          />

          {/* Floating Office Card */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-4 sm:left-8
              bottom-4 sm:bottom-8
              bg-white/95
              backdrop-blur-md
              rounded-2xl sm:rounded-3xl
              p-4 sm:p-6
              shadow-xl
              border
              border-slate-100
              max-w-[280px] sm:max-w-[320px]
            "
          >
            <div className="flex items-start gap-4">

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  bg-gradient-to-r
                  from-[#234A7D]
                  to-[#3A83CC]
                  text-white
                  flex
                  items-center
                  justify-center
                  shrink-0
                "
              >
                <MapPin size={20} />
              </div>

              <div>
                <h4
                  className="
                    text-[#1A3552]
                    font-bold
                  "
                >
                  SutraSync Office
                </h4>

                <p className="text-sm text-slate-500 mt-1">
                  Scintilla Apartment, 23, 1st Main Rd, 4th Phase, Yelahanka New Town, Bengaluru, India
                </p>

                <button
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    text-[#3A83CC]
                    font-medium
                    text-sm
                  "
                >
                  <Navigation size={16} />
                  Get Directions
                </button>
              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default ContactMap;