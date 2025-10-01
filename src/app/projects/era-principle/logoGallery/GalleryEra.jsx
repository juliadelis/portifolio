"use client";
import Gallery1 from "../../../../../public/images/projects/details/era/logoGallery/era_logo_d1.svg";
import Gallery2 from "../../../../../public/images/projects/details/era/logoGallery/era_logo_d2.svg";
import Gallery3 from "../../../../../public/images/projects/details/era/logoGallery/era_logo_d3.svg";
import Gallery4 from "../../../../../public/images/projects/details/era/logoGallery/era_logo_d4.svg";
import Gallery5 from "../../../../../public/images/projects/details/era/logoGallery/era_logo_d5.svg";
import Gallery6 from "../../../../../public/images/projects/details/era/logoGallery/era_logo_d6.svg";
import Gallery7 from "../../../../../public/images/projects/details/era/logoGallery/era_logo_d7.svg";
import Gallery8 from "../../../../../public/images/projects/details/era/logoGallery/era_logo_d8.svg";
import Gallery9 from "../../../../../public/images/projects/details/era/logoGallery/era_logo_d9.svg";
import Gallery10 from "../../../../../public/images/projects/details/era/logoGallery/era_logo_d10.svg";
import arame1 from "../../../../../public/images/projects/details/era/logoGallery/Arame-3-angle.svg";
import arame2 from "../../../../../public/images/projects/details/era/logoGallery/Arame-2-angle.svg";
import Image from "next/image";

const LogoGalleryEra = () => {
  return (
    <div className=" w-[100vw] mt-24 mb-24 py-2 relative">
      <div className="absolute top-0 left-0 w-full z-20">
        <Image src={arame1} alt="arame" priority className="w-full" />
      </div>
      <div className="relative md:mt-32 grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-8 bg-[#A842F9] py-[97px] ">
          <Image src={Gallery1} alt="galeria-1" className="mx-auto" priority />
        </div>
        <div className="col-span-4 bg-[#FFF1F1]  py-[97px]">
          <Image src={Gallery2} alt="galeria-2" className="mx-auto" priority />
        </div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-4 bg-[#FFF1F1] py-[97px] ">
          <Image src={Gallery3} alt="galeria-1" className="mx-auto" priority />
        </div>
        <div className="col-span-8 bg-[#0B0B0C]  py-[97px]">
          <Image src={Gallery4} alt="galeria-2" className="mx-auto" priority />
        </div>
      </div>
      <div className="absolute  top-[1200px] md:top-[700px] left-0 w-full z-20">
        <Image src={arame2} alt="arame" priority className="w-full" />
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-6 bg-[#A842F9] py-[97px] ">
          <Image src={Gallery5} alt="galeria-1" className="mx-auto" priority />
        </div>
        <div className="col-span-3 bg-[#1B59F8]  py-[97px] ">
          <Image
            src={Gallery6}
            alt="galeria-2"
            className="m-auto h-full"
            priority
          />
        </div>
        <div className="col-span-3 bg-[#0B0B0C]  py-[97px]">
          <Image
            src={Gallery7}
            alt="galeria-2"
            className="mx-auto h-full"
            priority
          />
        </div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-3 bg-[#0B0B0C] py-[97px] ">
          <Image src={Gallery8} alt="galeria-1" className="mx-auto" priority />
        </div>
        <div className="col-span-3 bg-[#3BC2E2]  py-[97px] ">
          <Image
            src={Gallery9}
            alt="galeria-2"
            className="m-auto h-full"
            priority
          />
        </div>
        <div className="col-span-6 bg-[#FFF1F1]  py-[97px]">
          <Image
            src={Gallery10}
            alt="galeria-2"
            className="mx-auto h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default LogoGalleryEra;
