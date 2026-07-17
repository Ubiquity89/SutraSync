export default function SectionDivider() {
  return (
    <div className="relative py-20">
      <div className="absolute left-1/2 -translate-x-1/2 h-[1px] w-80 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full border border-slate-200 shadow-md">
        ⭐
      </div>
    </div>
  );
}