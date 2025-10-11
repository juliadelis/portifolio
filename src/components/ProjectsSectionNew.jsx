"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

function ProjectsSectionNew() {
  const { t } = useTranslation(["translation"]);
  const [tag, setTag] = useState("Tudo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectEraDescription = t("EraPageDescription");
  const projectJDelisDescription = t("PortifolioPageMiniDescription");
  // const projectTreeDescription = t("projectTreeDescription");

  const projectsData = [
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
      ],
      link: "/projects/portifolio",
    },
    {
      id: 2,
      title: "Era Principle Website",
      description: projectEraDescription,
      image: "/images/projects/details/era/gallery-one-era.png",
      tag: ["Tudo", "Web"],
      tags: ["Web Design", "React", "JavaScript", "Branding", "Logo"],
      link: "/projects/era-principle",
    },
    // {
    //   id: 1,
    //   title: "Horsing Around Website",
    //   description: projectTwoDescription,
    //   image: "/images/projects/mockup-portifolio-horsing_around.png",
    //   tag: ["Tudo", "Web"],
    //   gitUrl: "https://github.com/juliadelis/horsingAround",
    //   previewUrl: "https://horsing-around.vercel.app/",
    // },
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
  );

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
    </section>
  );
}

export default ProjectsSectionNew;
