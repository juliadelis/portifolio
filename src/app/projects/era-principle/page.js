"use client";
import { useTranslation } from "react-i18next";
import Navbar from "../../../components/Navbar.jsx";
import BackToTopButton from "../../../components/BackToTopButton.jsx";
import ProjectHeader from "../../../components/projects/HeaderProjects.jsx";
import backgroundImage from "../../../../public/images/projects/details/era/era_principle_cover.png";
import CaseStudyScroll from "../../../components/projects/CaseStudyScroll.jsx";
import GalleryEra from "./gallery/GalleryEra.jsx";
import BigPhoto from "./BigPhoto/BigPhoto.jsx";
import LogoGalleryEra from "./logoGallery/GalleryEra.jsx";
import ColorsSection from "./colors/ColorsSection.jsx";
import WebsiteSection from "./Website/WebsiteSection.jsx";
import EndingSection from "../../../components/projects/Ending/EndingProject.jsx";

import LogotypeProjects from "../../../components/projects/LogotypeProjects.jsx";
import logoImage from "../../../../public/images/projects/details/era/era_logotype.svg";
import VideoSection from "./VideoSection/VideoSection.jsx";
import photoDisplay1 from "../../../../public/images/projects/details/era/ERA_display.png";
import photoDisplay2 from "../../../../public/images/projects/details/era/era-galery-1.webp";

export default function EraPrincipal() {
  const { t } = useTranslation(["translation"]);
  const tags = [
    "Web Design",
    "React",
    "Javascript",
    "Content",
    "Logo",
    "UX/UI",
    "Branding",
  ];

  const desc = t("EraPageDescription");

  return (
    <main className="flex min-h-screen flex-col bg-[#F0F0F0] ">
      <Navbar theme="light" />
      <div className="w-full mt-24 mx-auto py-4">
        <div id="project-header" className="container px-4 md:p-0 md:mx-auto">
          <ProjectHeader
            title={t("EraPageTitle")}
            description={desc}
            backgroundImage={backgroundImage}
            tags={tags}
          />
        </div>

        <div className="container mx-auto mt-10  py-12">
          <CaseStudyScroll
            about={t("EraPageAbout")}
            challange={t("EraPageChallenge")}
            solution={t("EraPageSolution")}
            sidebarColor={"#A842F9"}
            underlineColor={"rgb(168, 66, 249, 0.3)"}
          />
        </div>

        <div className="container px-4 md:p-0  md:mx-auto mt-24">
          <LogotypeProjects
            chapter={t("projectsLogotype")}
            title={t("EraPageLogoTitle")}
            description={t("EraPageLogoDescription")}
            index="01"
            className="min-h-screen"
            backgroundImage={logoImage}
          />
        </div>

        <div>
          <GalleryEra />
        </div>

        <div>
          <LogoGalleryEra />
        </div>
        <div className="container px-4 md:p-0 mx-auto">
          <ColorsSection />
        </div>
        <BigPhoto photo={photoDisplay1} />
        <div className="container px-4 md:p-0 mx-auto">
          <WebsiteSection />
        </div>
        <div>
          <VideoSection />
        </div>
        <BigPhoto photo={photoDisplay2} />
        <div className="container px-4 md:p-0 mx-auto">
          <EndingSection
            description={t("EraPageEnding")}
            projectLink={"https://eraprincipal.vercel.app/"}
            codeLink={"https://github.com/juliadelis/eraprincipal"}
          />
        </div>
      </div>
      <BackToTopButton />
    </main>
  );
}
