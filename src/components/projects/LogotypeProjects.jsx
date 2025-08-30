import Image from "next/image";

const LogotypeProjects = ({ index, title, description, backgroundImage }) => {
  return (
    <div className=" bg-[#1E1E1E] gap-6 md:gap-28  content-center justify-center rounded-[32px] py-24 px-8 flex flex-wrap  ">
      <div className="flex justify-between w-full gap-[45px] flex-wrap lg:flex-nowrap">
        <div className="w-[65%] flex gap-[30px]">
          <h3 className="text-[32px]">{index}</h3>
          <h3 className="text-[32px]">Logotype</h3>
        </div>
        <div className="flex flex-col gap-[15px] align-top content-top">
          <h3 className="text-[32px] text-[#B1B1B1]">{title}</h3>
          <p className="text-[18px] text-[#B1B1B1]">{description}</p>
        </div>
      </div>

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
