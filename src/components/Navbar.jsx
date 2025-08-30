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

const Navbar = () => {
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
      path: "#about",
    },
    {
      title: projects,
      path: "#projects",
    },
    {
      title: contact,
      path: "#contact",
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
    <nav className="fixed mx-auto border-b border-b-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 PY-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold">
          <Image
            alt="julia"
            className="rounded mb-4 lg:mb-0"
            src="/images/jdelis.svg"
            width={130}
            height={130}
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <div className="relative" ref={ref}>
                {/* Button with globe */}
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 rounded-md border border-slate-600 px-3 py-2 text-sm text-white hover:bg-slate-800">
                  <GlobeAltIcon className="h-5 w-5" />
                  <ChevronDownIcon className="h-4 w-4" />
                </button>

                {/* Dropdown */}
                {open && (
                  <ul className="absolute right-0 mt-2 w-40 overflow-hidden rounded-md border border-slate-700 bg-[#1a1a1a] shadow-lg">
                    {languages.map((lng) => (
                      <li key={lng.code}>
                        <button
                          onClick={() => changeLanguage(lng.code)}
                          className={`block w-full px-3 py-2 text-left text-sm hover:bg-slate-800 ${
                            lng.code === i18n.language
                              ? "text-emerald-400"
                              : "text-white"
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
