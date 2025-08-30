import Image from "next/image";
import TitleStructureProjects from "./TitleStructureProjects.jsx";

const LogotypeProjects = ({
  index,
  chapter,
  title,
  description,
  backgroundImage,
}) => {
  return (
    <div className=" bg-[#1E1E1E] gap-6 md:gap-28  content-center justify-center rounded-[32px] py-24 px-8 flex flex-wrap  ">
      <TitleStructureProjects
        index={index}
        chapter={chapter}
        title={title}
        description={description}
      />

      <div className="relative w-[600px] h-[150px] md:h-[350px]">
        <Image
          src={backgroundImage}
          alt="Logotype"
          fill
          className=" rounded-[32px]"
          priority
        />
      </div>
    </div>
  );
};

export default LogotypeProjects;
