export type Locale = "tr" | "en";

export interface Image {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SeoMeta {
  title: string;
  description: string;
  ogImage?: Image;
  canonical?: string;
}
