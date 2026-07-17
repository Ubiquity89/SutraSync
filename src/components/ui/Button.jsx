export default function Button({
  children,
  variant = "primary",
}) {
  if (variant === "outline") {
    return (
      <button
        className="
        h-12
        px-7
        rounded-lg
        border
        border-slate-200
        bg-white
        text-[#1A3552]
        font-medium
        hover:bg-slate-50
        transition-all
        duration-300

      shadow-lg

      bg-gradient-to-r
      from-white
      to-gray-100
      hover:scale-105
      transition-all
      duration-300
      shadow-lg
      "
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="
      h-12
      px-7
      rounded-lg
      text-white
      font-medium
      bg-gradient-to-r
      from-[#234A7D]
      to-[#3A83CC]
      hover:scale-105
      transition-all
      duration-300
      shadow-lg
    "
    >
      {children}
    </button>
  );
}