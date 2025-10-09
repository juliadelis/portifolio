"use client";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ProjectCard = ({
  projectLink,
  imgUrl,
  title,
  description,
  tags = [],
}) => {
  const { t } = useTranslation(["translation"]);

  return (
    <div className="rounded-[32px] overflow-hidden">
      {/* Image + tags */}
      <div
        className="h-52 relative group bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}>
        {/* soft top gradient so tags stay readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

        {/* tags row */}
        {tags?.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="px-3 py-1 rounded-full text-xs font-medium
                            text-white border border-white/50
                           backdrop-blur-[2px] shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* body */}
      <div className="text-[#7E7D7D] bg-[#D9D9D9] py-6 px-4">
        <h5 className="text-[20px] font-semibold mb-2 text-[#1E1E1E]">
          {title}
        </h5>
        <p className="text-[#7E7D7D] mb-4">{description}</p>

        {projectLink && (
          <Link
            href={projectLink}
            rel="noopener noreferrer"
            className="flex gap-2 text-[#1E1E1E] font-medium transition-transform duration-200 hover:scale-[1.03]">
            <IoArrowForwardCircleOutline size={27} color="#1E1E1E" />
            <p>{t("projectsSeeMore")}</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
