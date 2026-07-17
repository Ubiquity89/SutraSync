import clients from "../../data/clients";
import ClientCard from "./ClientCard";

const ClientShowcase = () => {
  const featured = clients.slice(0, 6);

  return (
    <>
     
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-20">
        {clients.map((client) => (
          <ClientCard
            key={client.name}
            client={client}
          />
        ))}
      </div>
    </>
  );
};

export default ClientShowcase;