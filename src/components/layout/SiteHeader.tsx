"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { LuChevronDown } from "react-icons/lu";
import { navigation } from "@/data/navigation";
import { office } from "@/data/contact";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nessgrup/",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/www.nessfuarcilik.com.tr/",
    icon: FaFacebook,
  },
];

export function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  const closeMobile = () => setIsMobileOpen(false);

  // Ana sayfada scroll yokken transparent, scroll yapınca normal
  // Diğer sayfalarda her zaman normal
  const headerBg =
    isHomePage && !isScrolled
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-md";
  const borderClass =
    isHomePage && !isScrolled ? "border-transparent" : "border-black/5";
  // TopBar her zaman background'a sahip (ana sayfada yarı şeffaf)
  const topBarBg =
    isHomePage && !isScrolled
      ? "bg-slate-900/80 backdrop-blur-sm"
      : "bg-slate-900";
  const topBarText = isHomePage && !isScrolled ? "text-white/90" : "text-white";
  // Nav linkleri için okunabilirlik artırıcı stiller
  // Font-weight ve shadow her iki durumda da aynı olmalı (kaymayı önlemek için)
  const getIsActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const getDesktopLinkClasses = (href: string, isActive: boolean) => {
    const isHomeLink = href === "/";
    // Ana sayfada, scroll yokken "Anasayfa" linki aktifken beyaz kalsın,
    // diğer tüm sayfalarda aktif linkler logo rengi (brand) ile görünsün.
    const activeColor =
      isHomePage && !isScrolled && isHomeLink ? "text-white" : "text-brand";
    const defaultColor =
      isHomePage && !isScrolled ? "text-white" : "text-slate-700";
    const hoverColor =
      isHomePage && !isScrolled ? "hover:text-white" : "hover:text-slate-900";
    const baseShadow =
      isHomePage && !isScrolled
        ? "drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
        : "drop-shadow-[0_0_0_transparent]";
    const sizeClasses =
      "text-[0.92rem] md:text-[0.96rem] tracking-[0.04em] md:tracking-[0.06em]";

    return `${
      isActive ? activeColor : defaultColor
    } ${hoverColor} ${baseShadow} ${sizeClasses} relative inline-flex items-center gap-1 transition`;
  };

  const getMobileLinkClasses = (isActive: boolean) =>
    `block ${isActive ? "text-brand" : "text-slate-700"}`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg} ${borderClass}`}
      >
        {/* TopBar */}
        <div
          className={`text-sm transition-all duration-300 transform overflow-hidden ${
            isScrolled
              ? "-translate-y-full opacity-0 max-h-0 py-0"
              : "translate-y-0 opacity-100 max-h-20"
          } ${topBarBg} border-b ${
            isHomePage && !isScrolled
              ? "border-transparent"
              : "border-slate-800"
          }`}
        >
          <div className="mx-auto max-w-6xl px-4 py-1.5 sm:px-6">
            <div className="flex w-full items-center justify-between">
              {/* İLETİŞİM */}
              <div
                className={`flex flex-col gap-[2px] ${topBarText} sm:flex-row sm:items-center sm:gap-3`}
              >
                <Link
                  href={`tel:${office.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {office.phone}
                </Link>
                <span className="hidden sm:inline opacity-40">•</span>
                <Link
                  href={`mailto:${office.email}`}
                  className="hover:text-white transition-colors"
                >
                  {office.email}
                </Link>
                <span className="hidden sm:inline opacity-40">•</span>
                <p className="hidden sm:inline opacity-70">Yenimahalle / Ankara</p>
              </div>

              {/* SOSYAL MEDYA */}
              <div className="flex items-center gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className={`rounded-full border p-1.5 transition ${
                      isHomePage && !isScrolled
                        ? "border-white/20 text-white/80 hover:text-white"
                        : "border-white/20 text-white/80 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className={`transition-all duration-300 ${headerBg}`}>
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Ness Fuarcılık"
            >
              <Image
                src="/images/logo.png"
                alt="Ness Fuarcılık"
                width={230}
                height={138}
                sizes="(max-width: 768px) 180px, 230px"
                className="h-[78px] w-auto md:h-[84px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
                priority
              />
            </Link>
            <nav className="hidden gap-6 text-sm md:flex">
              {navigation
                .filter((item) => !(isHomePage && item.href === "/"))
                .map((item) => {
                  const isActive = getIsActive(item.href);
                  return (
                    <div key={item.href} className="group relative">
                      <Link
                        href={item.href}
                        className={getDesktopLinkClasses(item.href, isActive)}
                      >
                        <span>{item.label}</span>
                        {item.children && (
                          <LuChevronDown
                            className={`h-3.5 w-3.5 transition ${
                              isActive
                                ? isHomePage && !isScrolled && item.href === "/"
                                  ? "text-white"
                                  : "text-brand"
                                : isHomePage && !isScrolled
                                ? "text-white/80"
                                : "text-slate-500"
                            }`}
                          />
                        )}
                        <span
                          className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left rounded-full bg-current transition-transform duration-300 ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </Link>
                      {item.children && (
                        <div className="invisible absolute left-1/2 top-full z-10 w-max -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-hover:pt-5">
                          <div className="min-w-[320px] rounded border border-slate-100 bg-white p-5 text-xs shadow-2xl">
                            <ul className="grid gap-3">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                                  >
                                    {child.label}
                                  </Link>
                                  {child.children && (
                                    <ul className="mt-2 grid gap-2 border-l border-slate-100 pl-3">
                                      {child.children.map((grandChild) => (
                                        <li key={grandChild.href}>
                                          <Link
                                            href={grandChild.href}
                                            className="text-sm text-slate-500 transition hover:text-slate-900"
                                          >
                                            {grandChild.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </nav>
            <button
              aria-label="Menüyü aç"
              className={`inline-flex items-center justify-center rounded-full border p-3 md:hidden transition-colors ${
                isHomePage && !isScrolled
                  ? "border-white/20 text-white"
                  : "border-slate-200 text-slate-700"
              }`}
              onClick={toggleMobile}
            >
              <HiMiniBars3 className="h-5 w-5" />
            </button>
          </div>
        </header>
      </nav>
      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={closeMobile}
          />
          <nav className="fixed inset-y-0 right-0 z-50 w-72 max-w-full overflow-y-auto border-l border-slate-200 bg-white px-6 py-8 md:hidden">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-lg font-semibold text-slate-900">Menü</p>
              <button
                aria-label="Menüyü kapat"
                className="rounded-full border border-slate-200 p-2 text-slate-700"
                onClick={closeMobile}
              >
                <IoClose className="h-5 w-5" />
              </button>
            </div>
            <ul className="space-y-4 text-base font-medium text-slate-700">
              {navigation
                .filter((item) => !(isHomePage && item.href === "/"))
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={getMobileLinkClasses(getIsActive(item.href))}
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="mt-2 space-y-2 border-l border-slate-100 pl-4 text-sm text-slate-500">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block"
                              onClick={closeMobile}
                            >
                              {child.label}
                            </Link>
                            {child.children && (
                              <ul className="mt-2 space-y-1 border-l border-slate-100 pl-3 text-xs">
                                {child.children.map((grandChild) => (
                                  <li key={grandChild.href}>
                                    <Link
                                      href={grandChild.href}
                                      className="block"
                                      onClick={closeMobile}
                                    >
                                      {grandChild.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
