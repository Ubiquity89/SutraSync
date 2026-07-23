import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, scalable and high-performance web applications.",
    image: "/web.png",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps that deliver exceptional experiences.",
    image: "/mobile.png",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description:
      "Intelligent solutions using AI/ML to automate processes.",
    image: "/ai.png",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive and user-centered designs that convert.",
    image: "/ui.png",
  },
  {
id: "e-commerce-solutions",
title: "E-Commerce Solutions",
    description:
      "Scalable, secure and reliable cloud infrastructure.",
    image: "/ecommerce.png",
  },
  {
    id: "digital-consulting",
    title: "Digital Consulting",
    description:
      "Strategic consulting to help your business grow and scale.",
    image: "/digital.png",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-[#F8FAFD] to-white">

      {/* Background Elements */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="
          absolute
          top-20
          left-[8%]
          w-64
          h-64
          bg-[#3A83CC]/15
          rounded-full
          blur-3xl
        "
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          className="
          absolute
          bottom-20
          right-[5%]
          w-80
          h-80
          bg-[#234A7D]/12
          rounded-full
          blur-3xl
        "
        />
      </div>

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
            text-[36px]
            sm:text-[42px]
            md:text-[48px]
            lg:text-[52px]
            font-bold
            text-[#1A3552]
          "
          >
            Services That We Provide
          </motion.h2>

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
            We build powerful digital solutions that help businesses
            accelerate growth and achieve their goals.
          </motion.p>

        </motion.div>

        {/* Cards */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
        >
          {services.map((service, index) => {
        

            return (
              <Link
                to={`/services#${service.id}`}
                key={service.id}
              >

             <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    delay: index * 0.1,
    duration: 0.6,
  }}
  whileHover={{
    y: -10,
  }}
  className="
    group
    bg-white
    rounded-3xl
    border
    border-slate-200
    overflow-hidden
    hover:shadow-2xl
    transition-all
    duration-500
    h-full
    flex
    flex-col
  "
>
  {/* Image */}

  <div
    className="
      h-56
      bg-gradient-to-br
      from-[#F5FAFF]
      to-white
      flex
      items-center
      justify-center
      overflow-hidden
    "
  >
    <motion.img
      src={service.image}
      alt={service.title}
      whileHover={{
        scale: 1.08,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        w-[82%]
        h-[82%]
        object-contain
      "
    />
  </div>

  {/* Content */}

  <div className="flex flex-col flex-1 p-7">

    <h3
      className="
        text-2xl
        font-bold
        text-[#1A3552]
        group-hover:text-[#3A83CC]
        transition-colors
      "
    >
      {service.title}
    </h3>

    <p
      className="
        mt-4
        text-slate-500
        leading-8
        flex-1
      "
    >
      {service.description}
    </p>

    <div
      className="
        mt-8
        inline-flex
        items-center
        gap-2
        text-[#3A83CC]
        font-semibold
      "
    >
      Learn More

      <ArrowRight
        size={18}
        className="
          transition-transform
          group-hover:translate-x-1
        "
      />
    </div>

  </div>
</motion.div>
             
              </Link>
            );
          })}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-14"
        >

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(58, 131, 204, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            className="
            h-12
            px-8
            rounded-xl
            text-white
            bg-gradient-to-r
            from-[#234A7D]
            to-[#3A83CC]
            flex
            items-center
            gap-2
            shadow-lg
            font-semibold
            transition-all
            duration-300
          "
          
          >
            <Link
              to="/services"
              className="text-white"
            >
              View All Services
            </Link>

            <motion.span
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
}

