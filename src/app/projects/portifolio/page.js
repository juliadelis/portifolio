"use client";
import { useTranslation } from "react-i18next";
import Navbar from "../../../components/Navbar";
import ProjectHeader from "../../../components/projects/HeaderProjects.jsx";
import CaseStudyScroll from "../../../components/projects/CaseStudyScroll.jsx";
import LogotypeProjects from "../../../components/projects/LogotypeProjects.jsx";
import backgroundImage from "../../../../public/images/projects/details/jdelis/bgimage_jdelis_details_2.png";
import logoImage from "../../../../public/images/jdelis.svg";

export default function Portifolio() {
  const { t } = useTranslation(["translation"]);
  const tags = ["Web Design", "React", "Javascript", "Content", "Logo"];
  return (
    <main className="flex min-h-screen flex-col bg-[#F0F0F0] ">
      <Navbar theme="light" />
      <div className="container mt-24 mx-auto py-2">
        <ProjectHeader
          title={t("PortifolioPageTitle")}
          description={t("PortifolioPageDescription")}
          backgroundImage={backgroundImage}
          tags={tags}
        />
        <div className="container mx-auto mt-10  py-12">
          <CaseStudyScroll
            about={t("PortifolioPageAbout")}
            challange={t("PortifolioPageChallenge")}
            solution={t("PortifolioPageSolution")}
            sidebarColor={"rgb(220, 38, 38)"}
            underlineColor={"rgba(220,38,38,0.3)"}
          />
        </div>

        <div className="mt-24">
          <LogotypeProjects
            chapter={t("projectsLogotype")}
            title={t("PortifolioPageLogoTitle")}
            description={t("PortifolioPageLogoDescription")}
            index="01"
            className="min-h-screen"
            backgroundImage={logoImage}
          />
        </div>
      </div>
    </main>
  );
}
