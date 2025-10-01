import Navbar from "../../../components/Navbar.jsx";
import ProjectHeader from "../../../components/projects/HeaderProjects.jsx";
import backgroundImage from "../../../../public/images/projects/details/era/era_principle_cover.png";
import CaseStudyScroll from "../../../components/projects/CaseStudyScroll.jsx";
import LogotypeProjects from "../../../components/projects/LogotypeProjects.jsx";
import logoImage from "../../../../public/images/projects/details/era/era_logotype.svg";
import GalleryEra from "./gallery/GalleryEra.jsx";
import LogoGalleryEra from "./logoGallery/GalleryEra.jsx";

export default function EraPrincipal() {
  const tags = [
    "Web Design",
    "React",
    "Javascript",
    "Content",
    "Logo",
    "UX/UI",
    "Branding",
  ];

  const desc =
    "Com o objetivo de apresentar minha trajetória como Designer de Interação e Desenvolvedora Front-End, nasce esse projeto, unindo criatividade, interatividade e experiências digitais que engajam.";

  return (
    <main className="flex min-h-screen flex-col bg-[#F0F0F0] ">
      <Navbar theme="light" />
      <div className=" mt-24 mx-auto py-4">
        <div className="container mx-auto">
          <ProjectHeader
            title={"ERA Principle"}
            description={desc}
            backgroundImage={backgroundImage}
            tags={tags}
          />
        </div>

        <div className="container mx-auto mt-10  py-12">
          <CaseStudyScroll
            about={
              "Este portfólio foi desenvolvido para traduzir minha trajetória como Designer de Interação e minha atuação atual como Desenvolvedora Front-End. A proposta é apresentar meus projetos de forma que transmita os pilares que orientam meu trabalho: criatividade, interatividade, dinamismo e experiências que engajam. A identidade visual do site foi criada do zero, refletindo meu olhar tanto de design quanto de desenvolvimento."
            }
            challange={
              "O maior desafio foi criar uma identidade visual que representasse quem eu sou e como quero me apresentar ao mundo. Era importante equilibrar meu lado criativo como designer e minha atuação técnica como desenvolvedora, construindo uma linguagem que fosse clara, envolvente e autêntica. Além disso, o site precisava ser ao mesmo tempo um espaço de autoexpressão e uma vitrine profissional para destacar meus projetos e minhas habilidades."
            }
            solution={
              "A solução foi desenvolver uma identidade visual própria que unisse estética e funcionalidade, refletindo minha forma de trabalhar e me comunicar. Optei por um design moderno e interativo, que favorece a navegação fluida e a imersão em cada projeto. Cores, tipografia e composições foram pensadas para transmitir dinamismo e criatividade, enquanto a estrutura do site valoriza a clareza e a experiência do usuário. Assim, este portfólio se tornou mais do que uma coleção de trabalhos: é também a expressão da minha jornada e da maneira como enxergo a criação digital."
            }
            sidebarColor={"#A842F9"}
            underlineColor={"rgb(168, 66, 249, 0.3)"}
          />
        </div>

        <div className="container mx-auto mt-24">
          <LogotypeProjects
            chapter={"Logotype"}
            title={"Intertwined Identity"}
            description={
              "With a unique typographic logo and the key element of motion design, we seek to convey the idea of innovation. The movement of the intertwined logo evokes a sense of interaction and also pays tribute to streetwear, adding a graffiti-inspired touch."
            }
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
      </div>
    </main>
  );
}
