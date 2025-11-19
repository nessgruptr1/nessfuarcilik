import type { ClientReference, PressItem } from "@/types/references";

export const clientReferences: ClientReference[] = [
  { id: "ref-aurora", name: "Aurora Healthcare", sector: "Sağlık" },
  { id: "ref-voltgo", name: "VoltGo", sector: "Enerji" },
  { id: "ref-cafem", name: "Cafem Gıda", sector: "Gıda" },
  { id: "ref-ototech", name: "Ototech", sector: "Otomotiv" },
];

export const pressItems: PressItem[] = [
  {
    id: "press-ntv",
    title: "Türk stand tasarımı Avrupa fuarlarında dikkat çekiyor",
    source: "NTV",
    date: "2024-05-12",
    url: "https://www.ntv.com.tr",
    excerpt: "Ness Fuarcılık, sürdürülebilir tasarım yaklaşımıyla global markaları destekliyor.",
  },
  {
    id: "press-hurriyet",
    title: "Yeni nesil modüler stand trendleri",
    source: "Hürriyet",
    date: "2023-11-02",
    url: "https://www.hurriyet.com.tr",
  },
];
