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
      <div className="container mt-24 mx-auto py-2">
        <ProjectHeader
          title={"JDelis"}
          description={
            "Com o objetivo de apresentar minha trajetória como Designer de Interação e Desenvolvedora Front-End, nasce esse projeto, unindo criatividade, interatividade e experiências digitais que engajam."
          }
          backgroundImage={backgroundImage}
        />
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
          />
        </div>

        <div className="mt-24">
          <LogotypeProjects
            chapter={"Logo"}
            title={"Incorporando identidade"}
            description={
              "O logotipo combina elegância e personalidade através de uma tipografia sofisticada e fluida. O contraste entre curvas suaves e traços marcantes traduz os pilares da minha identidade: criatividade, dinamismo e autenticidade. Essa composição equilibra o olhar artístico do design com a precisão do desenvolvimento, transmitindo uma presença moderna e confiante que reflete minha jornada."
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
