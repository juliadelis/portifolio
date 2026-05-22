"use client";
import Image from "next/image";
import Gallery1 from "../../../../../public/images/projects/details/horsing/logoGallery/img-logo-1.png";
import Gallery2 from "../../../../../public/images/projects/details/horsing/logoGallery/img-logo-2.png";
import Gallery3 from "../../../../../public/images/projects/details/horsing/logoGallery/img-logo-3.svg";
import Gallery4 from "../../../../../public/images/projects/details/horsing/logoGallery/img-logo-4.svg";
import Gallery5 from "../../../../../public/images/projects/details/horsing/logoGallery/img-logo-5.png";
import Gallery6 from "../../../../../public/images/projects/details/horsing/logoGallery/img-logo-6.png";

const LogoGalleryHorsing = () => {
  return (
    <div className="w-full  mt-24 mb-24 py-2 relative">
      <div className="grid grid-cols-12 gap-6 items-stretch">
        <div className="col-span-5">
          <div className="w-full h-full">
            <Image
              src={Gallery1}
              alt="galeria-1"
              className="w-full h-full rounded-[32px] object-cover"
              priority
            />
          </div>
        </div>
        <div className="col-span-7 flex flex-col gap-12 h-full">
          <div>
            <Image
              src={Gallery2}
              alt="galeria-2"
              className="w-full rounded-[32px]"
              priority
            />
          </div>
<div>
            <Image
              src={Gallery3}
              alt="galeria-2"
              className="w-full rounded-[32px]"
              priority
            />
          </div>
         
        </div>
      </div>

      <div className="relative grid grid-cols-12 mt-9 gap-7">
        <div className="col-span-4 ">
          <Image
            src={Gallery4}
            alt="galeria-1"
            className="mx-auto rounded-[32px]"
            priority
          />
        </div>
        <div className="col-span-8 rounded-[32px] content-center  ">
          <Image
            src={Gallery5}
            alt="galeria-2"
            className="mx-auto my-auto rounded-[32px]"
            priority
          />
        </div>
      </div>
       <div className="relative grid grid-cols-12 mt-9 gap-7">
        <div className="col-span-12 ">
          <Image
            src={Gallery6}
            alt="galeria-1"
            className="mx-auto rounded-[32px]"
            priority
          />
        </div>
       
      </div>
    </div>
  );
};

export default LogoGalleryHorsing;
