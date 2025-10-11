"use client";
import Image from "next/image";
import Gallery1 from "../../../../../public/images/projects/details/jdelis/logoGallery/bgimage_jdelis_details.png";
import Gallery2 from "../../../../../public/images/projects/details/jdelis/logoGallery/bg-image-2.svg";
import Gallery3 from "../../../../../public/images/projects/details/jdelis/logoGallery/bg-image-3.png";
import Gallery4 from "../../../../../public/images/projects/details/jdelis/logoGallery/bg-image-4.png";
import Gallery5 from "../../../../../public/images/projects/details/jdelis/logoGallery/bg-image-5.svg";
import Gallery6 from "../../../../../public/images/projects/details/jdelis/logoGallery/bg-image-6.svg";

const LogoGalleryPortifolio = () => {
  return (
    <div className="w-full  mt-24 mb-24 py-2 relative">
      <div className="grid grid-cols-12 gap-6 items-stretch">
        <div className="col-span-3">
          <div className="w-full h-full">
            <Image
              src={Gallery1}
              alt="galeria-1"
              className="w-full h-full rounded-[32px] object-cover"
              priority
            />
          </div>
        </div>
        <div className="col-span-9 flex flex-col gap-12 h-full">
          <div>
            <Image
              src={Gallery2}
              alt="galeria-2"
              className="w-full rounded-[32px]"
              priority
            />
          </div>

          <div className="grid grid-cols-8 gap-6 h-full">
            <div className="col-span-6">
              <Image
                src={Gallery3}
                alt="galeria-3"
                className="w-full h-full rounded-[32px] object-cover"
                priority
              />
            </div>
            <div className="col-span-2">
              <Image
                src={Gallery4}
                alt="galeria-4"
                className="w-full h-full rounded-[32px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-12 mt-9 gap-7">
        <div className="col-span-4 ">
          <Image
            src={Gallery5}
            alt="galeria-1"
            className="mx-auto rounded-[32px]"
            priority
          />
        </div>
        <div className="col-span-8 rounded-[32px] content-center  ">
          <Image
            src={Gallery6}
            alt="galeria-2"
            className="mx-auto my-auto rounded-[32px]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default LogoGalleryPortifolio;
