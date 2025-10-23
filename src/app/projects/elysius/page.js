"use client";
import { useTranslation } from "react-i18next";
import Navbar from "../../../components/Navbar";
import ProjectHeader from "../../../components/projects/HeaderProjects.jsx";
import CaseStudyScroll from "../../../components/projects/CaseStudyScroll.jsx";
import BackToTopButton from "../../../components/BackToTopButton.jsx";
import BigPhoto from "./BigPhoto/BigPhoto.jsx";
import ColorsSection from "./Colors/Colors.jsx";
import FontSection from "./FontSection/FontSection.jsx";
import WebsiteSection from "./Website/WebsiteSection.jsx";
import GallerySection from "./Gallery/GallerySection.jsx";
import EndingSection from "../../../components/projects/Ending/EndingProject.jsx";

import backgroundImage from "../../../../public/images/projects/details/elysius/backgroundImage.png";
import photoDisplay1 from "../../../../public/images/projects/details/elysius/mobile-img.png";

export default function Elysius() {
  const { t } = useTranslation(["translation"]);
  const tags = ["Web Design", "React", "Typescript", "UX/UI"];
  return (
    <main className="flex min-h-screen flex-col bg-[#F0F0F0] ">
      <Navbar theme="light" />
      <div id="project-header" className="container mt-24 px-4 mx-auto py-2">
        <ProjectHeader
          title={t("ElysiusPageTitle")}
          description={t("ElysiusPageDescription")}
          backgroundImage={backgroundImage}
          tags={tags}
        />
      </div>
      <div className="container px-4 mx-auto mt-10  py-12">
        <CaseStudyScroll
          about={t("ElysiusPageAbout")}
          challange={t("ElysiusPageChallenge")}
          solution={t("ElysiusPageSolution")}
          sidebarColor={"#0B1C3A"}
          underlineColor={"rgba(11,28,58,0.3)"}
        />
      </div>

      <div className="my-48 overflow-hidden">
        <BigPhoto maxWidth right={"-70px"} photo={photoDisplay1} />
      </div>

      <div>
        <ColorsSection />
      </div>

      <div>
        <FontSection />
      </div>
      <div>
        <WebsiteSection />
      </div>
      <div>
        <GallerySection />
      </div>

      <div className="container px-4  mx-auto mb-20">
        <EndingSection
          description={t("ElysiusPageEnding")}
          colorCode="#0B1C3A"
          codeLink={"https://github.com/juliadelis/elysius"}
        />
      </div>

      <BackToTopButton color="#0B1C3A" hoverColor="#020A17" />
    </main>
  );
}
