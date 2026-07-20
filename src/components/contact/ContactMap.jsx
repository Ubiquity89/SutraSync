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
    rounded-[30px]
    border
    border-slate-200
    shadow-[0_20px_60px_rgba(15,23,42,0.08)]
  "
>
  {/* MAP */}

  <iframe
    title="SutraSync Office"
    src="https://www.google.com/maps?q=Scintilla+Apartment,+Yelahanka,+Bengaluru&output=embed"
    className="w-full h-[360px] md:h-[480px]"
    loading="lazy"
  />

  {/* Floating Card */}

  <motion.div
    animate={{
      y: [0, -6, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-6
      bottom-6
      bg-white/90
      backdrop-blur-xl
      rounded-2xl
      px-6
      py-5
      shadow-2xl
      border
      border-white
      max-w-[340px]
    "
  >
    <div className="flex gap-4">

      {/* Icon */}

      <div className="text-[#3A83CC] mt-1">
        <MapPin size={28} />
      </div>

      {/* Content */}

      <div>

        <p
          className="
            text-xs
            uppercase
            tracking-[3px]
            font-semibold
            text-slate-400
          "
        >
          Headquarters
        </p>

        <h4
          className="
            mt-1
            text-lg
            font-bold
            text-[#1A3552]
          "
        >
          SutraSync Technologies
        </h4>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-slate-500
          "
        >
          Scintilla Apartment, 23,
          <br />
          1st Main Road,
          <br />
          Yelahanka New Town,
          <br />
          Bengaluru, Karnataka
        </p>

        <a
          href="https://maps.google.com/?q=Scintilla+Apartment,+Yelahanka,+Bengaluru"
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            mt-4
            text-[#3A83CC]
            font-semibold
            hover:gap-3
            transition-all
          "
        >
          <Navigation size={16} />
          Get Directions →
        </a>

      </div>

    </div>
  </motion.div>
</motion.div>

      </div>
    </section>
  );
};

export default ContactMap;