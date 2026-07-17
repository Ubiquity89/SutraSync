import {
  Users,
  BriefcaseBusiness,
  ShieldCheck,
  Trophy,
} from "lucide-react";

const ClientCard = ({ client }) => {
  return (
    <a
      href={client.website}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        bg-white
        rounded-3xl
        p-6
        border border-slate-200
        hover:border-blue-300
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      <div className="h-20 flex items-center justify-center">
        <img
          src={client.logo}
          alt={client.name}
          className="max-h-16 object-contain"
        />
      </div>

      <div className="mt-5 text-center">
        <h3 className="font-semibold text-slate-900">
          {client.name}
        </h3>

        <p className="text-xs text-blue-600 uppercase tracking-wider mt-1">
          {client.industry}
        </p>

        <p className="text-sm text-slate-500 mt-3">
          {client.description}
        </p>
      </div>
    </a>
  );
};

export default ClientCard;
