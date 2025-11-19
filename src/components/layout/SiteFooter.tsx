import Link from "next/link";
import Image from "next/image";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { navigation } from "@/data/navigation";
import { office } from "@/data/contact";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/nessfuarcilik",
    icon: FaInstagram,
  },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: FaLinkedin },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Sol: Logo ve Şirket Bilgisi */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Ness Fuarcılık"
                width={180}
                height={108}
                className="h-auto w-40 brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              {office.companyName}
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Yıllardır büyük bir özveriyle yaptığımız yüzlerce organizasyonu,
              bugüne kadar edindiğimiz referansları, en büyük kazancımız
              sayıyoruz.
            </p>

            <div className="flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition-all hover:border-brand hover:bg-brand hover:text-white hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Orta: Navigasyon */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Navigasyon
            </p>
            <nav className="mt-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Sağ: İletişim Bilgileri */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              İletişim
            </p>
            <div className="mt-4 space-y-3">
              {/* Adres */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-slate-400">
                  <LuMapPin className="h-4 w-4" />
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {office.address}
                  <br />
                  {office.city} / {office.country}
                </p>
              </div>

              {/* Telefon */}
              <Link
                href={`tel:${office.phone}`}
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-brand-300"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center text-slate-400">
                  <LuPhone className="h-4 w-4" />
                </div>
                <span>{office.phone}</span>
              </Link>

              {/* E-posta */}
              <Link
                href={`mailto:${office.email}`}
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-brand-300"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center text-slate-400">
                  <LuMail className="h-4 w-4" />
                </div>
                <span>{office.email}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800 bg-slate-900 py-6">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Ness Fuarcılık | Tasarım & uygulama
            çözümleri
          </p>
        </div>
      </div>
    </footer>
  );
}
