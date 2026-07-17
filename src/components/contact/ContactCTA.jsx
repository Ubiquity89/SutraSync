import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="pb-24 pt-12">
      <div className="max-w-[1200px] mx-auto px-6">

        <div
          className="
            rounded-[32px]
            p-10
            bg-gradient-to-r
            from-[#1A3552]
            to-[#3A83CC]
            text-white
            flex
            justify-between
            items-center
            flex-wrap
            gap-6
          "
        >
          <div>
            <h3 className="text-3xl font-bold">
              Ready To Start Your Project?
            </h3>

            <p className="mt-2 text-white/80">
              Let's collaborate and build
              something amazing.
            </p>
          </div>

          <button
            className="
              bg-white
              text-[#1A3552]
              px-6
              h-12
              rounded-xl
              font-medium
              flex
              items-center
              gap-2
            "
          >
            <a href="/contact">
              Schedule A Call
            </a>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;