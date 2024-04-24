"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 3,
    title: "Era Principle Website",
    description:
      "O Era Principle é um site em Next.js de streetwear que combina moda urbana com tecnologia de realidade aumentada (RA), oferecendo uma experiência imersiva aos usuários. A marca busca transcender fronteiras físicas e criar um universo estilístico único, onde a moda e a tecnologia se fundem para criar algo verdadeiramente inovador.",
    image: "/images/projects/mockup-portifolio-era.png",
    tag: ["Tudo", "Web"],
    gitUrl: "https://github.com/juliadelis/eraprincipal",
    previewUrl: "https://eraprincipal.vercel.app/",
  },
  {
    id: 1,
    title: "Horsing Around Website",
    description:
      "O sistema de gerenciamento de cavalos para hípica é uma plataforma completa desenvolvida utilizando as tecnologias React e Node.js. Projetada para facilitar a administração e acompanhamento dos equinos, esta aplicação está preparada para otimizar operações, garantir o cuidado adequado dos cavalos e impulsionar o sucesso da hípica.",
    image: "/images/projects/mockup-portifolio-horsing_around.png",
    tag: ["Tudo", "Web"],
    gitUrl: "https://github.com/juliadelis/horsingAround",
    previewUrl: "https://horsing-around.vercel.app/",
  },
  {
    id: 2,
    title: "React Camp Website",
    description:
      "O projeto de UX/UI para o aplicativo de viagens da agência de camping visa proporcionar uma experiência digital envolvente e centrada no usuário, que não apenas simplifica o processo de planejamento e reserva, mas também inspira uma conexão mais profunda com a natureza e a comunidade de campistas em todo o mundo.",
    image: "/images/projects/mockup-portifolio-wanderer.png",
    tag: ["Tudo", "Web"],
    gitUrl: "https://github.com/juliadelis/wanderer",
    previewUrl: "https://wanderer-three.vercel.app/",
  },
];

function ProjectsSection() {
  const [tag, setTag] = useState("Tudo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      </div>
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
