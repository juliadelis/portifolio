"use client";
import { useTranslation } from "react-i18next";
import GalleryOne from "../../../../../public/images/projects/details/era/gallery-one-era.png";
import GalleryTwo from "../../../../../public/images/projects/details/era/gallery-two-era.png";
import GalleryThree from "../../../../../public/images/projects/details/era/gallery-three-era.svg";
import GalleryFour from "../../../../../public/images/projects/details/era/gallery-four-era.svg";
import GalleryFive from "../../../../../public/images/projects/details/era/gallery-five-era.png";
import GallerySix from "../../../../../public/images/projects/details/era/gallery-six-era.png";
import GallerySeven from "../../../../../public/images/projects/details/era/gallery-seven-era.png";
import GalleryEight from "../../../../../public/images/projects/details/era/gallery-eight-era.svg";
import Image from "next/image";

const GalleryEra = () => {
  return (
    <div className="container mt-24 mb-24 mx-auto py-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[49px]">
        <div className="flex flex-col gap-[46px]">
          <Image
            src={GalleryOne}
            alt="galeria-1"
            width={560}
            className="rounded-[8px]"
          />
          <Image
            src={GalleryTwo}
            alt="galeria-2"
            width={560}
            className="rounded-[8px]"
          />
        </div>
        <div className="flex flex-col gap-[46px] md:mt-[100px]">
          <Image
            src={GalleryThree}
            alt="galeria-1"
            className="rounded-[8px] relative"
            width={560}
          />
          <Image
            src={GalleryFour}
            alt="galeria-2"
            className="rounded-[8px] relative"
            width={560}
          />
        </div>
        <div className="flex flex-col gap-[46px]">
          <Image
            src={GalleryFive}
            alt="galeria-1"
            className="rounded-[8px]"
            width={560}
          />
          <Image
            src={GallerySix}
            alt="galeria-2"
            className="rounded-[8px]"
            width={560}
          />
        </div>
        <div className="flex flex-col gap-[46px] md:mt-[100px]">
          <Image
            src={GallerySeven}
            alt="galeria-1"
            className="rounded-[8px]"
            width={560}
          />
          <Image
            src={GalleryEight}
            alt="galeria-2"
            className="rounded-[8px] relative"
            width={560}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryEra;
