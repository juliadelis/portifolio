"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar.jsx";

const categories = [
  "All",
  "Web Design",
  "Content",
  "JavaScript",
  "React",
  "TypeScript",
  "UX/UI",
  "Logo",
];

export default function Projects() {
  const { t } = useTranslation(["translation"]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const projectsData = useMemo(
    () => [
      {
        id: 4,
        title: "Horsing Around Application",
        description: t("HorsingAroundPageDescription"),
        image: "/images/projects/details/horsing/cover5.png",
        tags: [
          "Web Design",
          "React",
          "JavaScript",
          "UX/UI",
          "Logo",
          "Branding",
          "Content",
        ],
        link: "/projects/horsing-around",
      },
      {
        id: 3,
        title: "Elysius Website",
        description: t("ElysiusPageMiniDescription"),
        image: "/images/projects/details/elysius/cover.png",
        tags: ["Web Design", "React", "TypeScript", "UX/UI"],
        link: "/projects/elysius",
      },
      {
        id: 1,
        title: "JDelis Website",
        description: t("PortifolioPageMiniDescription"),
        image: "/images/projects/details/jdelis/colors-3.png",
        tags: [
          "Web Design",
          "React",
          "JavaScript",
          "Branding",
          "Content",
          "Logo",
          "UX/UI",
        ],
        link: "/projects/portifolio",
      },
      {
        id: 2,
        title: "Era Principle Website",
        description: t("EraPageDescription"),
        image: "/images/projects/details/era/gallery-one-era.png",
        tags: ["Web Design", "React", "JavaScript", "Branding", "Logo", "UX/UI"],
        link: "/projects/era-principle",
      },
    ],
    [t]
  );

  const filteredProjects =
    selectedCategories.length === 0
      ? projectsData
      : projectsData.filter((project) =>
          selectedCategories.every((category) => project.tags.includes(category))
        );

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories((currentCategories) =>
      currentCategories.includes(category)
        ? currentCategories.filter(
            (currentCategory) => currentCategory !== category
          )
        : [...currentCategories, category]
    );
  };

  return (
    <main className="min-h-screen bg-[#121212]  text-[#D9D9D9]">
      <Navbar />
      <section className="container mx-auto px-4 pb-24 pt-36 md:pt-40">
        <div className="max-w-4xl">
          <h1 className="text-[34px] font-bold leading-tight text-[#D9D9D9] md:text-[40px]">
            {t("projectsTitle")}
          </h1>
          <p className="mt-4 max-w-3xl text-[18px] leading-snug text-[#A7A7A7]">
            {t("projectsDescription")}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-[18px] font-semibold text-[#D9D9D9]">
            Browse by category
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {categories.map((category) => {
              const isSelected =
                category === "All"
                  ? selectedCategories.length === 0
                  : selectedCategories.includes(category);

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  aria-pressed={isSelected}
                  className={`rounded-full border px-4 py-1 text-[15px] leading-tight transition-colors ${
                    isSelected
                      ? "border-[#D9D9D9] bg-[#D9D9D9] text-[#1E1E1E]"
                      : "border-[#A7A7A7] text-[#B8B8B8] hover:border-white hover:text-white"
                  }`}>
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-12">
          {filteredProjects.map((project) => (
            <ProjectListCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

const ProjectListCard = ({ project }) => {
   const { t } = useTranslation(["translation"]);
  return (
    <Link
      href={project.link}
      className="group grid min-h-[420px] overflow-hidden rounded-[28px] bg-[#D9D9D9] transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-4 focus-visible:ring-offset-[#1E1E1E] md:grid-cols-2">
      <div className="flex min-h-[360px] flex-col px-8 py-10 text-[#858585] md:min-h-[420px] md:px-12">
        <div>
          <h3 className="text-[32px] font-bold leading-tight text-[#858585]">
            {project.title}
          </h3>
          <p className="mt-5 max-w-[480px] text-[18px] leading-snug">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#9C9C9C] px-4 py-1 text-[15px] leading-tight text-[#8B8B8B]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-10">
          <span className="inline-flex rounded-full bg-[#7E7D7D] px-8 py-4 text-[17px] font-medium text-white transition-colors group-hover:bg-[#DC2626]">
            {t("projectsSeeMore")}
          </span>
        </div>
      </div>

      <div className="relative min-h-[320px] overflow-hidden md:min-h-[420px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </Link>
  );
};
