"use client";
import Image from "next/image";

import img1 from "../../../../../public/images/projects/details/elysius/web3.png";
import img2 from "../../../../../public/images/projects/details/elysius/web2.png";
import img3 from "../../../../../public/images/projects/details/elysius/web4.png";
import adorno from "../../../../../public/images/projects/details/elysius/adorno_galery.svg";
import gif from "../../../../../public/images/projects/details/elysius/Mockup-ipad-site-elysius2.gif";

export default function GallerySection() {
  const images = [img1, img2, img3];

  return (
    <div className="w-full flex flex-col justify-center items-center py-12">
      <div className="relative flex flex-col md:flex-row justify-center items-start md:items-center gap-8 md:gap-12 w-full max-w-[1800px] px-6 md:px-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative w-full md:w-[55%] lg:w-[45%] xl:w-[38%]  overflow-hidden transition-all duration-500 ${
              index === 0
                ? "md:ml-[-28%] md:mt-16"
                : index === 2
                ? "md:mr-[-28%] md:mt-16"
                : "z-10 md:scale-105 "
            }`}>
            <Image
              src={src}
              alt={`gallery-${index}`}
              className="object-contain w-full h-auto"
              placeholder="blur"
              priority
            />
          </div>
        ))}
      </div>

      <div className="my-24">
        <Image src={adorno} alt={`gallery`} className=" w-screen h-auto" />
        <div className="container mx-auto">
          <Image src={gif} alt={`gallery`} className=" h-auto" />
        </div>

        <Image src={adorno} alt={`gallery`} className=" w-screen h-auto" />
      </div>
    </div>
  );
}
