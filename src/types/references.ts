import type { Image } from "./common";

export interface ClientReference {
  id: string;
  name: string;
  logo?: Image;
  websiteUrl?: string;
  sector?: string;
}

export interface PressItem {
  id: string;
  title: string;
  source: string;
  date?: string;
  url?: string;
  excerpt?: string;
  coverImage?: Image;
}
