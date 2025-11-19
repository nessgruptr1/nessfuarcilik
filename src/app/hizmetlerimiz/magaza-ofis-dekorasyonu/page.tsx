import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export default function RetailOfficePage() {
  const service = services.find((svc) => svc.slug === "magaza-ofis-dekorasyonu");

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
