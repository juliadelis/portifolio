"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import {
  Bars3Icon,
  ChevronDownIcon,
  GlobeAltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import useSmoothScroll from "./useSmoothScroll";
import { useTranslation } from "react-i18next";

const Navbar = ({ theme = "dark" }) => {
  const isDark = theme === "dark";

  const palette = {
    bgBase: isDark ? "bg-[#121212]" : "bg-[#F0F0F0]",
    textBase: isDark ? "text-white" : "text-[#121212]",
    textMuted: isDark ? "text-slate-200" : "text-[#121212]",
    borderB: isDark ? "border-b-[#33353F]" : "border-b-[#E5E7EB]",
    btnBorder: isDark ? "border-slate-200" : "border-[#33353F]/50",
    btnBorderHover: isDark ? "hover:border-white" : "hover:border-[#111827]",
    btnTextHover: isDark ? "hover:text-white" : "hover:text-[#33353F]",
    itemHoverBg: isDark ? "hover:bg-slate-800" : "hover:bg-[#e6e6e6]",
    dropdownBg: isDark ? "bg-[#1a1a1a]" : "bg-white",
    dropdownBorder: isDark ? "border-slate-700" : "border-gray-200",
    icon: isDark ? "text-white" : "text-[#33353F]",
  };

  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation(["translation"]);

  const about = t("menuAbout");
  const projects = t("menuProjects");
  const contact = t("menuContact");

  const portuguese = t("menuPortuguese");
  const english = t("menuEnglish");

  const languages = [
    { code: "en", lang: english },
    { code: "pt", lang: portuguese },
  ];

  const navLinks = [
    {
      title: about,
      path: "/#about",
    },
    {
      title: projects,
      path: "/#projects",
    },
    {
      title: contact,
      path: "/#contact",
    },
  ];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  const changeLanguage = (lng) => {
    if (i18n) {
      i18n.changeLanguage(lng);
      setOpen(false);
    }
  };

  useSmoothScroll();
  return (
    <nav
      className={`fixed mx-auto top-0 left-0 right-0 z-30 bg-opacity-100 border-b ${palette.bgBase} ${palette.borderB}`}>
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className={`text-2xl md:text-5xl font-semibold ${palette.textBase}`}
          aria-label="Home">
          <Image
            alt="julia"
            className="rounded mb-4 lg:mb-0"
            src={isDark ? "/images/jdelis.svg" : "/images/jdelis-dark.svg"}
            width={130}
            height={130}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className={`flex items-center px-3 py-2 border rounded ${palette.btnBorder} ${palette.textMuted} ${palette.btnTextHover} ${palette.btnBorderHover}`}>
              <Bars3Icon className={`h-5 w-5 ${palette.icon}`} />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className={`flex items-center px-3 py-2 border rounded ${palette.btnBorder} ${palette.textMuted} ${palette.btnTextHover} ${palette.btnBorderHover}`}>
              <XMarkIcon className={`h-5 w-5 ${palette.icon}`} />
            </button>
          )}
        </div>
        {/* Menu desktop */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className={palette.textBase}>
                <NavLink href={link.path} title={link.title} theme={theme} />
              </li>
            ))}

            {/* Selector de idioma */}
            <li>
              <div className="relative" ref={ref}>
                <button
                  onClick={() => setOpen(!open)}
                  className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm ${palette.textBase} ${palette.btnBorder} ${palette.itemHoverBg}`}>
                  <GlobeAltIcon className={`h-5 w-5 ${palette.icon}`} />
                  <ChevronDownIcon className={`h-4 w-4 ${palette.icon}`} />
                </button>

                {open && (
                  <ul
                    className={`absolute right-0 mt-2 w-40 overflow-hidden rounded-md border shadow-lg ${palette.dropdownBorder} ${palette.dropdownBg}`}>
                    {languages.map((lng) => (
                      <li key={lng.code}>
                        <button
                          onClick={() => changeLanguage(lng.code)}
                          className={`block w-full px-3 py-2 text-left text-sm ${
                            palette.textBase
                          } ${palette.itemHoverBg} ${
                            lng.code === i18n.language ? "text-red-600" : ""
                          }`}>
                          {lng.lang}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
