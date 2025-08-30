"use client";
import Navbar from "../../../components/Navbar";
import ProjectHeader from "../../../components/projects/HeaderProjects.jsx";
import CaseStudyScroll from "../../../components/projects/CaseStudyScroll.jsx";
import LogotypeProjects from "../../../components/projects/LogotypeProjects.jsx";
import backgroundImage from "../../../../public/images/projects/details/jdelis/bgimage_jdelis_details.png";
import logoImage from "../../../../public/images/jdelis.svg";

export default function Portifolio() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F0F0F0] ">
      <Navbar theme="light" />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectHeader
          title={"Portifolio"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula erat sed arcu vulputate, in dictum nunc porttitor. Morbi vulputate pretium imperdiet. Sed dignissim odio sed lectus scelerisque vehicula."
          }
          backgroundImage={backgroundImage}
        />
        <div className="container mx-auto mt-10 px-12 py-12">
          <CaseStudyScroll />
        </div>

        <div className="mt-24">
          <LogotypeProjects
            title={"Titulo sobre o logo"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula erat sed arcu vulputate, in dictum nunc porttitor. Morbi vulputate pretium imperdiet. Sed dignissim odio sed lectus scelerisque vehicula."
            }
            index="01"
            className="min-h-screen"
            backgroundImage={logoImage}
          />
        </div>
      </div>
    </main>
  );
}
