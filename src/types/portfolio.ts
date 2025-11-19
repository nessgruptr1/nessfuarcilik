import type { Image, SeoMeta } from "./common";
import type { StandTypeSlug } from "./services";

export type PortfolioType = "design" | "application";

export interface PortfolioItem {
  id: string;
  slug: string;
  type: PortfolioType;
  title: string;
  clientName?: string;
  fairName?: string;
  city?: string;
  country?: string;
  areaM2?: number;
  standType?: StandTypeSlug;
  description?: string;
  coverImage: Image;
  gallery: Image[];
  year?: number;
  tags?: string[];
  seo?: SeoMeta;
}
