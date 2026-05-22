"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

function ProjectsSectionNew() {
  const { t } = useTranslation(["translation"]);
  const [tag, setTag] = useState("Tudo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectEraDescription = t("EraPageDescription");
  const projectHorsingDescription = t("HorsingAroundPageDescription");
  const projectElysiusDescription = t("ElysiusPageMiniDescription");
  const projectJDelisDescription = t("PortifolioPageMiniDescription");
  // const projectTreeDescription = t("projectTreeDescription");

  const projectsData = [
    {
       id: 4,
       title: "Horsing Around Application",
       description: projectHorsingDescription,
        image: "/images/projects/details/horsing/cover5.png",
      tag: ["Tudo", "Web"],
      tags: ["Web Design", "React", "Typescript", "UX/UI", "Logo", "Branding", "Content"],
      link: "/projects/horsing-around",
     },
    {
      id: 3,
      title: "Elysius Website",
      description: projectElysiusDescription,
      image: "/images/projects/details/elysius/cover.png",
      tag: ["Tudo", "Web"],
      tags: ["Web Design", "React", "Typescript", "UX/UI"],
      link: "/projects/elysius",
    },
    {
      id: 1,
      title: "JDelis Website",
      description: projectJDelisDescription,
      image: "/images/projects/details/jdelis/colors-3.png",
      tag: ["Tudo", "Web"],
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
      description: projectEraDescription,
      image: "/images/projects/details/era/gallery-one-era.png",
      tag: ["Tudo", "Web"],
      tags: ["Web Design", "React", "JavaScript", "Branding", "Logo", "UX/UI"],
      link: "/projects/era-principle",
    },

     
    // {
    //   id: 2,
    //   title: "React Camp Website",
    //   description: projectTreeDescription,
    //   image: "/images/projects/mockup-portifolio-wanderer.png",
    //   tag: ["Tudo", "Web"],
    //   gitUrl: "https://github.com/juliadelis/wanderer",
    //   previewUrl: "https://wanderer-three.vercel.app/",
    // },
  ];

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  ).slice(0, 3);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-left text-4xl font-bold text-white mt-4 mb-4">
        {t("projectsTitle")}
      </h2>
      <p className="mb-8">{t("projectsDescription")}</p>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Tudo"
          isSelected={tag === "Tudo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul
        ref={ref}
        className="grid md:grid-cols-3 gap-8 md:gap-12 items-stretch">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            className="list-none"
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "inicial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              projectLink={project.link}
              tags={project.tags}
              className="h-full flex flex-col"
              // gitUrl={project.gitUrl}
              // previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <div className="mt-10 flex justify-start">
        <Link
          href="/projects"
          className="px-6 font-bold py-3 w-full sm:w-fit rounded-full mr-4 text-white bg-gradient-to-r  bg-[#DC2626] transition-all hover:shadow-[8px_5px_51.9px_#dc26264c] ">
          {t("projectAllButton")}
        </Link>
      </div>
    </section>
  );
}

export default ProjectsSectionNew;
