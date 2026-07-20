const PortfolioHero = () => {
  return (
    <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 text-center">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">

        <div
          className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          bg-white
          border
          border-slate-200
          shadow-sm
        "
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-[#2563EB] font-semibold text-sm">
            OUR WORK
          </span>
        </div>

        <h1
          className="
          mt-8
          text-[42px]
          sm:text-[56px]
          lg:text-[70px]
          leading-none
          font-bold
          text-[#031B4E]
        "
        >
          Our Portfolio
        </h1>

        <p
          className="
          mt-6
          text-slate-500
          text-xl
          leading-9
        "
        >
          We build digital products, platforms and
          experiences that help businesses grow and scale.
        </p>

      </div>
    </section>
  );
};

export default PortfolioHero;