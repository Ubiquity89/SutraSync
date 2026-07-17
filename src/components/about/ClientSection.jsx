import ClientStats from "./ClientStats";
import ClientShowcase from "./ClientShowcase";
import clients from "../../data/clients";
import ClientCard from "./ClientCard";
const ClientsSection = () => {
  return (
    <section className="relative py-32 bg-[#fafbfd] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[400px]
            bg-[#22446b]/5
            blur-3xl
            rounded-full
          "
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}

        <div className="text-center max-w-4xl mx-auto">

        

              <p
                className="
                text-[#3A83CC]
                font-bold
                uppercase
                tracking-[4px]
                "
              >
               ~ OUR Clients ~
              </p>

            
          <h2
            className="
              mt-6
              text-5xl
        
              font-bold
              text-[#081C4B]
            "
          >
            Trusted by Leading
            <span className="text-[#3A83CC]">  Companies  </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-slate-600
              max-w-2xl
              mx-auto
            "
          >
            We partner with innovative companies across
            industries, helping them scale through technology,
            marketing and digital transformation.
          </p>
        </div>

        <ClientStats />

        {/* Divider */}

        <div className="flex items-center gap-6 mt-24">
          <div className="h-px flex-1 bg-slate-200" />

          <div className="w-12 h-12 rounded-full border bg-white flex items-center justify-center">
            ⭐
          </div>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <ClientShowcase />

        {/* CTA */}

        <div className="flex justify-center mt-20">
           <button
            className="
            
            lg:flex
            h-14
            font-normal
            px-6
            rounded-lg
            text-white
            items-center
            gap-2
            bg-gradient-to-r
            from-[#234A7D]
            to-[#3A83CC]
          "
          >
            <a href="/contact">
              Let's Work Together
            </a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;