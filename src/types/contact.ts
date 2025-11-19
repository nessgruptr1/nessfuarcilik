import type { ServiceSlug } from "./services";

export interface OfficeInfo {
  companyName: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  whatsapp?: string;
  mapEmbedUrl?: string;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  serviceInterest?: ServiceSlug | "general";
}
