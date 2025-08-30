"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { t } = useTranslation(["translation"]);

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2 grid grid-cols-2 gap-2">
          <li>Next</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Tailwind</li>
          <li>Sass</li>
          <li>Git</li>

          <li>Express</li>
          <li>Vite</li>
          <li>C#</li>
          <li>{t("methodologies")}</li>
          <li>UX/UI</li>
          <li>{t("responsiveDesign")}</li>
          <li>{t("versioning")}</li>
          <li>Web Performance</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>
            {t("mba")}
            <br />
            <span className="italic text-[#ADB7BE]">MBA USP/Esalq</span>
          </li>
          <li>
            {t("pos")}
            <br />
            <span className="italic text-[#ADB7BE]">
              Instituto de Gestão e Tecnologia da Informação
            </span>
          </li>
          <li>
            {t("graduation")}
            <br />
            <span className="italic text-[#ADB7BE]">
              Pontifícia Universidade Católica de São Paulo
            </span>
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li className="">
            Front End Training
            <br />
            <span className="italic text-[#ADB7BE]">Alura</span>
          </li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="abt"
          className="rounded mb-4 lg:mb-0"
          src="/images/about-image.jpg"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t("abt")}</h2>
          <p className="text-base md:text-lg ">{t("abtText")}</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>
              {" "}
              Skills
            </TabButton>{" "}
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              {t("education")}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>
              {t("certification")}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
