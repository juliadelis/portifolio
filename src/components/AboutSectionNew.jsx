"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslation } from "react-i18next";

const AboutSectionNew = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { t } = useTranslation(["translation"]);

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="py-6 grid grid-cols-3 gap-2 bg-[#D9D9D9] text-[#1E1E1E] rounded-[32px]">
          <div className="flex flex-col gap-2">
            <p>React</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>Next.js</p>
            <p>Node.js</p>
            <p>Git</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Tailwind</p>
            <p>Express</p>
            <p>Vite</p>
            <p>C#</p>
            <p>C#</p>
            <p>UX/UI</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Branding</p>
            <p>{t("methodologies")}</p>
            <p>{t("responsiveDesign")}</p>
            <p>{t("versioning")}</p>
            <p>Web Performance</p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <div className="p-6 grid grid-cols-1 gap-2 bg-[#D9D9D9] text-[#1E1E1E] rounded-[32px]">
          <div className="flex flex-col">
            <p>{t("mba")}</p>

            <span className="italic text-[#7E7D7D]">MBA USP/Esalq</span>
          </div>
          <div className="flex flex-col ">
            <p> {t("pos")}</p>

            <span className="italic text-[#7E7D7D]">
              Instituto de Gestão e Tecnologia da Informação
            </span>
          </div>
          <div className="flex flex-col ">
            <p>{t("graduation")}</p>

            <span className="italic text-[#7E7D7D]">
              Pontifícia Universidade Católica de São Paulo
            </span>
          </div>
        </div>
      ),
    },
    // {
    //   title: "Certifications",
    //   id: "certifications",
    //   content: (
    //     <ul className="list-disc pl-2">
    //       <li className="">
    //         Front End Training
    //         <br />
    //         <span className="italic text-[#ADB7BE]">Alura</span>
    //       </li>
    //     </ul>
    //   ),
    // },
  ];

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-[#B1B1B1] ">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-start py-8  xl:gap-16 sm:py-16 ">
        <div className="col-span-4">
          <Image
            alt="abt"
            src="/images/side-image-about.png"
            width={257.31}
            height={600}
          />
        </div>
        <div className="col-span-7 mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#D9D9D9] mb-4">{t("abt")}</h2>
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
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>
              {t("certification")}
            </TabButton> */}
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionNew;
