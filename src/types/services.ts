import type { Image, SeoMeta } from "./common";
import type { ContentBlock } from "./shared-content";

export type ServiceSlug =
  | "stand-tasarimi"
  | "malzeme-kiralama"
  | "ic-mekan-tasarimi"
  | "magaza-ofis-dekorasyonu";

export interface Service {
  id: string;
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  heroImage?: Image;
  contentBlocks: ContentBlock[];
  seo?: SeoMeta;
}

export type StandTypeSlug =
  | "ahsap-stand"
  | "moduler-stand"
  | "maxima-stand"
  | "truss-stand"
  | "urun-teshir-standi";

export interface StandType {
  id: string;
  slug: StandTypeSlug;
  name: string;
  shortDescription: string;
  longDescription?: string;
  advantages?: string[];
  suitableFor?: string[];
  gallery: Image[];
  relatedStandTypes?: StandTypeSlug[];
  seo?: SeoMeta;
}
