import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <section className="pb-18 sm:pb-20 lg:pb-24 pt-12 sm:pt-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        <div
          className="
            rounded-[24px] sm:rounded-[32px]
            p-6 sm:p-8 lg:p-10
            bg-gradient-to-r
            from-[#1A3552]
            to-[#3A83CC]
            text-white
            flex
            flex-col sm:flex-row
            justify-between
            items-center
            gap-6
          "
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              
Ready to Build Something Amazing?
            </h3>

            <p className="mt-2 text-white/80">
Let's turn your idea into a powerful digital product.



            </p>
          </div>

          <button
            className="
              bg-white
              text-[#1A3552]
              px-5 sm:px-6
              h-12 sm:h-14
              rounded-xl
              font-medium
              flex
              items-center
              gap-2
            "
          >
            <Link to="/contact">
              Get in touch
            </Link>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
