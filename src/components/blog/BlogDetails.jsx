import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  User,
  Clock3,
  ArrowLeft,
  Share2,
} from "lucide-react";

import {
  blogPosts,
  getBlogContent,
} from "../../data/blogPosts";

import TopBar from "../layout/TopBar";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const BlogDetails = () => {
  const { slug } = useParams();

  const post = blogPosts.find(
    (p) => p.slug === slug
  );

  if (!post) {
    return (
      <>
        <TopBar />
        <Navbar />

        <div className="py-32 text-center">
          <h1 className="text-4xl font-bold">
            Blog Not Found
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBar />
      <Navbar />

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-[1100px] mx-auto px-6 pt-16 pb-20">

          <Link
            to="/blog"
            className="
              inline-flex
              items-center
              gap-2
              text-[#3A83CC]
              font-medium
              hover:gap-3
              transition-all
            "
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>

          <div className="max-w-[900px] mx-auto text-center">

            <div
              className="
                inline-flex
                mt-8
                px-4
                py-1.5
                rounded-full
                bg-[#EAF3FF]
                text-[#3A83CC]
                text-sm
                font-medium
              "
            >
              {post.category}
            </div>

            <h1
              className="
                mt-6
                text-[40px]
                lg:text-[58px]
                font-bold
                leading-[1.05]
                tracking-tight
                text-[#031B4E]
              "
            >
              {post.title}
            </h1>

            <div
              className="
                mt-8
                flex
                justify-center
                flex-wrap
                gap-6
                text-slate-500
                text-sm
              "
            >
              <span className="flex items-center gap-2">
                <Calendar size={15} />
                {post.date}
              </span>

              <span className="flex items-center gap-2">
                <User size={15} />
                {post.author}
              </span>

              <span className="flex items-center gap-2">
                <Clock3 size={15} />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="mt-14 max-w-[850px] mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="
                w-full
                h-[320px]
                lg:h-[450px]
                object-cover
                rounded-[28px]
                shadow-[0_20px_60px_rgba(15,23,42,0.12)]
              "
            />
          </div>

        </div>
      </section>

      {/* ARTICLE SECTION */}

      <section className="bg-[#F8FAFC]">
        <div className="max-w-[900px] mx-auto px-6 py-20">

          <div
            className="
              h-px
              bg-gradient-to-r
              from-transparent
              via-slate-300
              to-transparent
              mb-16
            "
          />

          <div
            className="
              text-[18px]
              leading-[2]
              text-slate-700
              font-normal
            "
          >
            <pre
              className="
                whitespace-pre-wrap
                font-sans
                text-[18px]
                leading-[2]
              "
            >
              {getBlogContent(slug)}
            </pre>
          </div>

          {/* SHARE */}

          <div
            className="
              mt-20
              pt-8
              border-t
              border-slate-200
              flex
              items-center
              justify-between
              flex-wrap
              gap-4
            "
          >
            <div>
              <p className="text-sm text-slate-500">
                Enjoyed this article?
              </p>

              <h4 className="font-semibold text-[#031B4E]">
                Share it with others
              </h4>
            </div>

            <button
              className="
                h-11
                px-6
                rounded-xl
                text-white
                font-medium
                flex
                items-center
                gap-2
                bg-gradient-to-r
                from-[#234A7D]
                to-[#3A83CC]
                hover:scale-105
                transition-all
              "
            >
              <Share2 size={16} />
              Share
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogDetails;