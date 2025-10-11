"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import Link from "next/link";

const EndingSection = ({
  title,
  description,
  projectLink,
  codeLink,
  colorLink = "#C6A7FF", // default lilac
  colorCode = "#FF7A00", // default orange
  theme = "light",
}) => {
  const { t } = useTranslation(["translation"]);

  const isDark = theme === "dark";

  const palette = {
    textBase: isDark ? "text-[#B1B1B1]" : "text-[#1E1E1E]",
    title: isDark ? "text-white" : "text-[#7E7D7D]",
  };

  return (
    <div className="flex justify-between w-full gap-[45px] flex-wrap lg:flex-nowrap items-center py-10">
      <div className="w-full lg:w-1/2 space-y-3">
        {title && (
          <h3 className={`text-[18px] font-semibold ${palette.title}`}>
            {title}
          </h3>
        )}
        {description && (
          <p className={`text-[14px] leading-relaxed ${palette.textBase}`}>
            {description}
          </p>
        )}
      </div>

      {/* Right side buttons */}
      <div className="flex gap-4 w-full lg:w-auto justify-start lg:justify-end">
        {projectLink && (
          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2 text-white text-sm font-medium transition-transform duration-200 hover:scale-[1.03]"
            style={{ backgroundColor: colorLink }}>
            {t("projectsEndingProjectView")}
          </Link>
        )}
        {codeLink && (
          <Link
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2 text-white text-sm font-medium transition-transform duration-200 hover:scale-[1.03]"
            style={{ backgroundColor: colorCode }}>
            {t("projectsEndingCodeView")}
          </Link>
        )}
      </div>
    </div>
  );
};

export default EndingSection;
