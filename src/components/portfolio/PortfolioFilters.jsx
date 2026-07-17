const filters = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "SaaS Platforms",
  "AI & Analytics",
  "Digital Marketing",
];

const PortfolioFilters = () => {
  return (
    <div className="flex justify-center flex-wrap gap-4 mb-12">

      {filters.map((item, index) => (
        <button
          key={item}
          className={`
            h-12
            px-6
            rounded-full
            border
            transition-all
            ${
              index === 0
                ? "bg-[#2563EB] text-white"
                : "bg-white border-slate-200 text-slate-600"
            }
          `}
        >
          {item}
        </button>
      ))}

    </div>
  );
};

export default PortfolioFilters;