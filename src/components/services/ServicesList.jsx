import ServiceSection from "./ServiceSection";
import { servicesPage } from "../../data/servicesPage";

export default function ServicesList() {
  return (
    <>
      {servicesPage.map((service, index) => (
        <ServiceSection
          key={service.title}
          service={service}
          reverse={index % 2 !== 0}
        />
      ))}
    </>
  );
}