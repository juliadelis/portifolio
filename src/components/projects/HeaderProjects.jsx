import Image from "next/image";
import ProjectTagDetails from "../ProjectTagDetails";

const ProjectHeader = ({ title, description, backgroundImage }) => {
  return (
    <div className="relative bg-[#1E1E1E] w-full h-[70vh] rounded-[32px] p-8 flex flex-wrap items-end bg-cover bg-center bg-no-repeat">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover w-full rounded-[32px]"
        priority
      />

      {/* <div className="absolute inset-0 bg-black/50 rounded-[32px]" /> */}

      <div className="relative flex justify-between w-full gap-[45px] flex-wrap lg:flex-nowrap">
        <div className="w-[65%]">
          <h2 className="text-[48px]">{title}</h2>
          <p className="text-[18px]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-[15px] content-end h-auto align-end justify-end">
          <div className="h-fit">
            <ProjectTagDetails name={"Web Design"} />
          </div>
          <div className="h-fit">
            <ProjectTagDetails name={"React"} />
          </div>
          <div className="h-fit">
            <ProjectTagDetails name={"Javascript"} />
          </div>

          <div className="h-fit">
            <ProjectTagDetails name={"Content"} />
          </div>
          <div className="h-fit">
            <ProjectTagDetails name={"Logo"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
