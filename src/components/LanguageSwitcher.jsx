"use client";

import { useEffect, useRef, useState } from "react";
import { GlobeAltIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export default function LanguageSwitcher({
  languages = [],
  initial = "en",
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(initial);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    setCurrent(initial);
  }, [initial]);

  const currentLang = languages.find((l) => l.code === current) ||
    languages[0] || { lang: "Language", code: "en" };

  return (
    <div className="relative" ref={ref}>
      <button
        aria-label="Change language"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-md border border-slate-600 px-3 py-2 text-sm text-white hover:bg-slate-800">
        <GlobeAltIcon className="h-5 w-5" />
        <span className="hidden sm:inline">{currentLang.lang}</span>
        <ChevronDownIcon className="h-4 w-4" />
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-44 overflow-hidden rounded-md border border-slate-700 bg-[#1a1a1a] shadow-lg">
          {languages.map((l) => (
            <li key={l.code}>
              <button
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-slate-800 ${
                  l.code === current ? "text-emerald-400" : "text-white"
                }`}
                onClick={() => {
                  setCurrent(l.code);
                  setOpen(false);
                  onChange && onChange(l.code);
                }}>
                {l.lang}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

LanguageSwitcher.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      lang: PropTypes.string.isRequired,
    })
  ),
  initial: PropTypes.string,
  onChange: PropTypes.func,
};
