import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ContactHero = () => {
  return (
    <section className="relative bg-[#F8FAFD] py-16 sm:py-20 overflow-hidden">

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
          top-20
          right-[-150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#3A83CC]
          blur-[140px]
        "
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
              Get In Touch
            </p>

            <h1
              className="
                mt-4
                text-[36px] sm:text-[42px] md:text-[52px] lg:text-[60px]
                leading-[1.05]
                font-bold
                text-[#1A3552]
              "
            >
              Let's Discuss
              <br />
              Your <span className="text-[#3A83CC]">Project</span>
            </h1>

            <p className="mt-6 text-slate-500 leading-8 max-w-lg">
              Have a project in mind? We'd love to hear
              about it. Let's build something amazing
              together.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 space-y-4"
            >
              <motion.div variants={cardAnimation}>
                <InfoCard
                  icon={<Mail size={20} />}
                  title="Email"
                  value="info@sutrasync.com"
                />
              </motion.div>

              <motion.div variants={cardAnimation}>
                <InfoCard
                  icon={<Phone size={20} />}
                  title="Phone"
                  value="+91 98765 43210"
                />
              </motion.div>

              <motion.div variants={cardAnimation}>
                <InfoCard
                  icon={<MapPin size={20} />}
                  title="Address"
                  value="Sector 63, Noida, Uttar Pradesh"
                />
              </motion.div>

              <motion.div variants={cardAnimation}>
                <InfoCard
                  icon={<Clock size={20} />}
                  title="Working Hours"
                  value="Mon - Fri : 9 AM - 6 PM"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <ContactForm />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon,
  title,
  value,
}) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        bg-white
        rounded-2xl
        p-5
        flex
        gap-4
        items-center
        shadow-sm
        border
        border-slate-100
        hover:shadow-lg
        transition-all
      "
    >
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
          shadow-md
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-400">
          {title}
        </p>

        <p className="font-medium text-[#1A3552]">
          {value}
        </p>
      </div>
    </motion.div>
  );
};

export default ContactHero;