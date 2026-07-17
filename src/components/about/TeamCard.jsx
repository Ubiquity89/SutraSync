import { motion } from "framer-motion";

export default function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="
      relative
      text-center
      "
    >
      {/* Image Area */}

     <div
  className="
  relative
  w-[220px]
  h-[220px]
  mx-auto
  group
  "
>
  {/* Hover Blob */}

<div
  className="
  absolute
  inset-0
  flex
  items-center
  justify-center
  pointer-events-none
  "
>
  <div
    className="
    w-[180px]
    h-[180px]
    rounded-full
    bg-[#3A83CC]/15
    blur-3xl
    opacity-0
    scale-75
    transition-all
    duration-700
    group-hover:opacity-100
    group-hover:scale-125
    "
  />
</div>

        {/* Rotating Ring */}

    <motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
  absolute
  inset-0
  rounded-full
  border-2
  border-dashed
  border-[#3A83CC]/30
  transition-all
  duration-500
  group-hover:border-[#3A83CC]
  group-hover:shadow-[0_0_40px_rgba(58,131,204,0.35)]
  "
/>

        {/* Image */}

        <div
          className="
          absolute
          inset-[10px]
          rounded-full
          overflow-hidden
          border-[5px]
          border-white
          shadow-2xl
          "
        >
          <img
  src={member.image}
  alt={member.name}
  className="
  w-full
  h-full
  object-cover
  transition-all
  duration-700
  group-hover:scale-110
  "
/>
        </div>

        {/* Experience Badge */}

        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="
          absolute
          top-2
          right-0
          bg-gradient-to-r
          from-[#2D4F7D]
          to-[#3A83CC]
          text-white
          rounded-2xl
          px-5
          py-3
          shadow-xl
          "
        >
          <p className="font-bold text-xl">
            {member.experience} 
            <span className="text-xs opacity-90"> Yrs</span>
          </p>

         
        </motion.div>
      </div>

      {/* Content */}

      <div className="mt-8">
        <h3
          className="
          text-[30px]
          font-bold
          text-[#1A3552]
          "
        >
          {member.name}
        </h3>

        <p
          className="
          mt-2
          text-slate-500
          text-lg
          leading-8
          "
        >
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}