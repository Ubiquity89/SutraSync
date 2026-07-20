import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const PortfolioCTA = () => {
  return (
    <section className="mt-20 pb-20">

      <div
        className="
        rounded-[32px]
        p-12
        bg-gradient-to-r
        from-[#2563EB]
        to-[#3A83CC]
        flex
        justify-between
        items-center
        flex-wrap
        gap-6
        pb-8
      "
      >
        <div>
          <h3
            className="
            text-5xl
            font-bold
            text-white
          "
          >
            Have a project in mind?
          </h3>

          <p className="text-white/80 mt-3">
            Let's collaborate and build something amazing.
          </p>
        </div>

        <button
          className="
          h-14
          px-8
          rounded-xl
          bg-white
          text-[#031B4E]
          font-semibold
          flex
          items-center
          gap-2
        
        "
        >
          <Link to="/contact">
            Start Your Project
          </Link>
          <ArrowRight size={18} />
        </button>
      </div>

    </section>
  );
};

export default PortfolioCTA;