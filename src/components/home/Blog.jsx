import { ArrowRight, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import blogs from "../../data/blogs";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F7FF] overflow-hidden">

      {/* Decorative Background Elements */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        top-20
        left-[8%]
        w-80
        h-80
        bg-[#3A83CC]/10
        rounded-full
        blur-3xl
        pointer-events-none
      "
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-20
        right-[5%]
        w-96
        h-96
        bg-[#234A7D]/8
        rounded-full
        blur-3xl
        pointer-events-none
      "
      />

      <div className="max-w-[1220px] mx-auto px-6 relative z-10">

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
    uppercase
    tracking-[3px]
    mb-3
  "
  >
    FROM OUR BLOG
  </motion.p>

  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    className="
    text-[42px]
    lg:text-[48px]
    font-bold
    text-[#1A3552]
  "
  >
    Latest Insights
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4 }}
    className="
    mt-4
    max-w-[650px]
    mx-auto
    text-[#64748B]
    leading-8
  "
  >
    Explore industry trends, technology updates,
    and actionable insights from our experts.
  </motion.p>

        </motion.div>

        {/* Blog Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (

            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -12 }}
              className="
              group
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              overflow-hidden
              border
              border-slate-100
              hover:border-[#3A83CC]/40
              hover:shadow-[0_25px_60px_rgba(58,131,204,0.2)]
              transition-all
              duration-500
            "
            >
              <div className="relative overflow-hidden">

                {/* Gradient Overlay on Hover */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#234A7D]/80
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  z-10
                "
                />

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="
                  h-[220px]
                  w-full
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                "
                />

              </div>

              <div className="p-6">

                {/* Animated Category Badge */}

                <motion.span
                  
                  whileHover={{ opacity: 1, x: 0 }}
                  className="
                  inline-block
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-[#3A83CC]
                  bg-[#3A83CC]/10
                  rounded-full
                  mb-3
                "
                >
                  {blog.category}
                </motion.span>

                <h3
                  className="
                  mt-1
                  text-xl
                  font-bold
                  text-[#1A3552]
                  group-hover:text-[#3A83CC]
                  transition-colors
                  duration-300
                "
                >
                  {blog.title}
                </h3>

                {/* Animated Read Time Badge */}

                <div
                  className="
                  mt-4
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-slate-500
                "
                >
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </motion.div>

                  <span>•</span>

                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Clock size={14} />
                    <span>{blog.readTime}</span>
                  </motion.div>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

{/* Button */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5 }}
  className="flex justify-center mt-14"
>

  <motion.button
    whileHover={{
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(58,131,204,0.3)",
    }}
    whileTap={{ scale: 0.98 }}
    className="
    h-12
    px-8
    rounded-xl
    text-white
    font-semibold
    bg-gradient-to-r
    from-[#2D4F7D]
    to-[#3A83CC]
    transition-all
    duration-300
    shadow-lg
    flex
    items-center
    gap-2
  "
  >
    
  <Link to='/blog'>
    View All Articles
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