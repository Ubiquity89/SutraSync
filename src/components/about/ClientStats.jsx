import {
  Users,
  BriefcaseBusiness,
  ShieldCheck,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
  },
  {
    icon: BriefcaseBusiness,
    value: "12+",
    label: "Industries Served",
  },
  {
    icon: ShieldCheck,
    value: "98%",
    label: "Client Retention",
  },
  {
    icon: Trophy,
    value: "5+",
    label: "Years Partnership",
  },
];

const ClientStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              bg-white
              rounded-3xl
              border border-slate-100
              p-10
              text-center
              shadow-lg
              shadow-slate-100
            "
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto">
              <Icon className="w-7 h-7 text-blue-600" />
            </div>

            <h3 className="mt-6 text-5xl font-bold text-[#0B1F44]">
              {item.value}
            </h3>

            <p className="mt-2 text-slate-500">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ClientStats;