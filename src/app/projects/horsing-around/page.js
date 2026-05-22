"use client";
import { useTranslation } from "react-i18next";
import Navbar from "../../../components/Navbar";
import ProjectHeader from "../../../components/projects/HeaderProjects.jsx";
import CaseStudyScroll from "../../../components/projects/CaseStudyScroll.jsx";
import LogotypeProjects from "../../../components/projects/LogotypeProjects.jsx";
import LogoGalleryHorsing from "./LogoGallery/LogoGalley.jsx";
import ColorsHorsingSection from "./ColorsSection/ColorsSection.jsx";
import WebsiteSection from "./Website/WebsiteSection.jsx";
import WebGallerySection from "./WebGallery/WebsiteSection.jsx";
import EndingSection from "../../../components/projects/Ending/EndingProject.jsx";
import BackToTopButton from "../../../components/BackToTopButton.jsx";

import backgroundImage from "../../../../public/images/projects/details/horsing/bg_cover.png";
import logoImage from "../../../../public/images/projects/details/horsing/logo.svg";

export default function Portifolio() {
  const { t } = useTranslation(["translation"]);
  const tags = [
    "Web Design",
    "React",
    "Javascript",
    "Content",
    "Logo",
    "UX/UI",
  ];
  return (
    <main className="flex min-h-screen flex-col bg-[#F0F0F0] ">
      <Navbar theme="light" />
      <div id="project-header" className="container mt-24 px-4 mx-auto py-2">
        <ProjectHeader
          title={t("HorsingAroundPageTitle")}
          description={t("HorsingAroundPageDescription")}
          backgroundImage={backgroundImage}
          tags={tags}
        />
      </div>
      <div className="container px-4 mx-auto mt-10  py-12">
        <CaseStudyScroll
          about={t("HorsingAroundPageAbout")}
          challange={t("HorsingAroundPageChallenge")}
          solution={t("HorsingAroundPageSolution")}
          sidebarColor={"rgb(255, 208, 138)"}
          underlineColor={"rgba(255,208,138)"}
        />
      </div>

      <div className="container px-4 mt-24 mx-auto py-2">
        <LogotypeProjects
          chapter={t("projectsLogotype")}
          title={t("HorsingAroundPageLogoTitle")}
          description={t("HorsingAroundPageLogoDescription")}
          index="01"
          className="min-h-screen"
          backgroundImage={logoImage}
        />
      </div>
      <div className="container px-4 mt-24 mx-auto py-2">
        <LogoGalleryHorsing />
      </div>
      <div>
        <ColorsHorsingSection />
      </div>
      <div className="px-4">
        <WebsiteSection />
      </div>
      <div>
        <WebGallerySection />
      </div>
      <div className="container relative z-20  px-4  mx-auto mb-20">
        <EndingSection
        projectLink={"https://horsing-around.vercel.app/"}
        colorLink="#FFD08A"
          description={t("HorsingAroundPageEnding")}
          colorCode="#333129"
          codeLink={"https://github.com/juliadelis/horsingAround"}
        />
      </div>
      <BackToTopButton color="#333129" hoverColor="#333129" />
    </main>
  );
}
