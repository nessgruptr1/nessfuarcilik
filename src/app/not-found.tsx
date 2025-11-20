import Link from "next/link";
import { LuHouse, LuArrowLeft } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mb-8">
        <h1 className="text-9xl font-bold text-brand">404</h1>
        <p className="mt-4 text-2xl font-semibold text-slate-900">
          Sayfa Bulunamadı
        </p>
        <p className="mt-3 text-base text-slate-600">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          <LuHouse className="h-4 w-4" />
          Ana Sayfaya Dön
        </Link>
        <Link
          href="/hizmetlerimiz"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
        >
          <LuArrowLeft className="h-4 w-4" />
          Hizmetlerimiz
        </Link>
      </div>
    </div>
  );
}

