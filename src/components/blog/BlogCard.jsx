import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const BlogCard = ({ post }) => {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
      className="
        bg-white
        rounded-[20px] sm:rounded-[24px]
        overflow-hidden
        border
        border-slate-100
        shadow-[0_10px_40px_rgba(15,23,42,0.06)]
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="
            w-full
            h-[180px] sm:h-[200px] md:h-[220px]
            object-cover
            transition
            duration-700
            hover:scale-110
          "
        />

        

        <div
          className="
            absolute
            bottom-4
            right-4
            px-3
            py-1
            rounded-full
            bg-white
            text-xs
            font-medium
          "
        >
          {post.readTime}
        </div>
      </div>

      {/* Content */}

      <div className="p-4 sm:p-6">
        <div className="flex gap-4 text-slate-400 text-sm">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {post.date}
          </span>

          <span className="flex items-center gap-1">
            <User size={14} />
            {post.author}
          </span>
        </div>

        <h3
          className="
            mt-4
            text-[18px] sm:text-[20px] md:text-[22px]
            font-bold
            text-[#031B4E]
            leading-snug
          "
        >
          {post.title}
        </h3>

        <p className="mt-3 text-slate-500 text-sm leading-6 line-clamp-3">
          {post.excerpt}
        </p>

       <Link
  to={`/blog/${post.slug}`}
  className="
    mt-6
    text-[#2563EB]
    font-semibold
    flex
    items-center
    gap-2
    hover:gap-3
    transition-all
  "
>
  Continue Reading
  <ArrowRight size={16} />
</Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;