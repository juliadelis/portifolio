import Image from "next/image";
import ProjectTagDetails from "../ProjectTagDetails";

const ProjectHeader = ({ title, description, backgroundImage, tags }) => {
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

      <div className="relative gap-y-8 grid grid-cols-1 lg:grid-cols-12 justify-between w-full  flex-wrap lg:flex-nowrap">
        <div className="col-span-8 ">
          <h2 className="text-[48px]">{title}</h2>
          <p className="text-[18px]">{description}</p>
        </div>
        <div className="col-span-4 flex flex-wrap gap-[15px] content-start md:content-end h-auto align-end xl:justify-end">
          {tags?.map((tag) => (
            <div key={tag} className="h-fit">
              <ProjectTagDetails name={tag} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
