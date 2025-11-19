import type { Image } from "./common";

export type ContentBlock =
  | {
      type: "text";
      title?: string;
      body: string;
    }
  | {
      type: "list";
      title?: string;
      items: string[];
    }
  | {
      type: "image-grid";
      title?: string;
      images: Image[];
    };
