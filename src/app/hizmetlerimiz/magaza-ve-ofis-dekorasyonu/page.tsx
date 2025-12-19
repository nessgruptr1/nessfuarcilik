import { redirect } from "next/navigation";

// Eski URL'den yeni URL'e kalıcı redirect (301)
export default function OldRetailOfficePage() {
  redirect("/hizmetlerimiz/magaza-ofis-dekorasyonu");
}

