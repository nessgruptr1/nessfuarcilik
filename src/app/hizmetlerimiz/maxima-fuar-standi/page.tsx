import { redirect } from "next/navigation";

// Eski URL'den yeni URL'e kalıcı redirect (301)
export default function OldMaximaStandPage() {
  redirect("/hizmetlerimiz/stand-tasarimi/maxima-stand");
}

