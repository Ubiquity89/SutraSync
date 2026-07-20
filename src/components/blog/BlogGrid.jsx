import { useState } from "react";
import { blogPosts } from "../../data/blogPosts";
import BlogCard from "./BlogCard";

const POSTS_PER_PAGE = 4;

const BlogGrid = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(
    blogPosts.length / POSTS_PER_PAGE
  );

  const currentPosts = blogPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <section className="pb-1">
      {/* Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {currentPosts.map((post) => (
          <BlogCard
            key={post.slug}
            post={post}
          />
        ))}
      </div>

      {/* Pagination */}

      {totalPages > 1 && (
        <div className="flex justify-center gap-3 mt-16">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`
                w-11
                h-11
                rounded-xl
                font-semibold
                transition-all
                ${
                  page === index + 1
                    ? "bg-[#2563EB] text-white shadow-lg"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-[#2563EB]"
                }
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogGrid;