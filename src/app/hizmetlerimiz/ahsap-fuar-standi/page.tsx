import { redirect } from "next/navigation";

// Eski URL'den yeni URL'e kalıcı redirect (301)
export default function OldWoodenStandPage() {
  redirect("/hizmetlerimiz/stand-tasarimi/ahsap-stand");
}

