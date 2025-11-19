import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { ServiceDetail } from "@/components/sections/ServiceDetail";

export default function MalzemeKiralamaPage() {
  const service = services.find((svc) => svc.slug === "malzeme-kiralama");

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
