import { redirect } from "next/navigation";

// Eski URL'den yeni URL'e kalıcı redirect (301)
export default function OldTrussStandPage() {
  redirect("/hizmetlerimiz/stand-tasarimi/truss-stand");
}

