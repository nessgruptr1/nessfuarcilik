import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export default function InteriorDesignPage() {
  const service = services.find((svc) => svc.slug === "ic-mekan-tasarimi");

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
