import { redirect } from "next/navigation";

// Eski URL'den yeni URL'e kalıcı redirect (301)
export default function OldProductDisplayStandPage() {
  redirect("/hizmetlerimiz/stand-tasarimi/urun-teshir-standi");
}

