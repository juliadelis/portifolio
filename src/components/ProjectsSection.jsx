"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

function ProjectsSection() {
  const { t } = useTranslation(["translation"]);
  const [tag, setTag] = useState("Tudo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectOneDescription = t("projectOneDescription");
  const projectTwoDescription = t("projectTwoDescription");
  const projectTreeDescription = t("projectTreeDescription");

  const projectsData = [
    {
      id: 3,
      title: "Era Principle Website",
      description: projectOneDescription,
      image: "/images/projects/mockup-portifolio-era.png",
      tag: ["Tudo", "Web"],
      gitUrl: "https://github.com/juliadelis/eraprincipal",
      previewUrl: "https://eraprincipal.vercel.app/",
    },
    {
      id: 1,
      title: "Horsing Around Website",
      description: projectTwoDescription,
      image: "/images/projects/mockup-portifolio-horsing_around.png",
      tag: ["Tudo", "Web"],
      gitUrl: "https://github.com/juliadelis/horsingAround",
      previewUrl: "https://horsing-around.vercel.app/",
    },
    {
      id: 2,
      title: "React Camp Website",
      description: projectTreeDescription,
      image: "/images/projects/mockup-portifolio-wanderer.png",
      tag: ["Tudo", "Web"],
      gitUrl: "https://github.com/juliadelis/wanderer",
      previewUrl: "https://wanderer-three.vercel.app/",
    },
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {t("projectsTitle")}
      </h2>
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
