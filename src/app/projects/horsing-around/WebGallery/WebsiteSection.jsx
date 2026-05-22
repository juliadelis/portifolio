"use client";

import Image from "next/image";

import heroBg from "../../../../../public/images/projects/details/horsing/website/web-bg.png";
import loginAndHome from "../../../../../public/images/projects/details/horsing/website/web-1.png";
import horsesList from "../../../../../public/images/projects/details/horsing/website/web-3.png";
import horseDetails from "../../../../../public/images/projects/details/horsing/website/web-4.png";
import addHorse from "../../../../../public/images/projects/details/horsing/website/web-5.png";
import team from "../../../../../public/images/projects/details/horsing/website/web-6.png";
import saddleBg from "../../../../../public/images/projects/details/horsing/website/web-7.png";

const WebGallerySection = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F0F0F0]">
      <div className="relative min-h-[620px] w-full overflow-hidden md:min-h-[760px] lg:min-h-[900px]">
        <Image
          src={heroBg}
          alt="Horses in a field"
          fill
          sizes="100vw"
          className="object-cover object-[42%_50%]"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-6xl items-center justify-end px-6 py-16 md:min-h-[760px] md:px-10 lg:min-h-[900px]">
          <div className="w-[86vw] max-w-[620px] translate-y-6 md:w-[58vw] lg:w-[570px] lg:translate-x-10">
            <Image
              src={loginAndHome}
              alt="Horsing Around login and dashboard screens"
              className="h-auto w-full drop-shadow-[0_28px_32px_rgba(0,0,0,0.35)]"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto min-h-[880px] w-full max-w-6xl px-6 py-20 md:min-h-[1120px] md:px-10 md:py-28 lg:min-h-[1240px]">
        <GalleryMockup
          src={horsesList}
          alt="Horse list screen"
          className="ml-auto w-[78vw] max-w-[520px] md:mr-8 md:w-[48vw] lg:mr-20 lg:w-[520px]"
        />
        <GalleryMockup
          src={horseDetails}
          alt="Horse details screen"
          className=" w-[86vw] max-w-[620px] md:mt-[-72px] md:w-[56vw] lg:ml-14 lg:w-[620px]"
        />
        <GalleryMockup
          src={team}
          alt="Team management screen"
          className="ml-auto  w-[78vw] max-w-[520px] md:mt-[-48px] md:mr-6 md:w-[48vw] lg:mr-24 lg:w-[520px]"
        />
        <GalleryMockup
          src={addHorse}
          alt="Add horse form screen"
          className=" w-[84vw] max-w-[600px] md:mt-[-52px] md:w-[54vw] lg:w-[600px]"
        />
      </div>

      <div className="relative h-[560px] w-full md:h-[760px] lg:h-[920px]">
        <Image
          src={saddleBg}
          alt="Western saddle on a white horse"
          fill
          sizes="100vw"
          className="object-cover object-[54%_48%]"
        />
      </div>
    </section>
  );
};

const GalleryMockup = ({ src, alt, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        className="h-auto w-full drop-shadow-[18px_22px_22px_rgba(0,0,0,0.28)]"
      />
    </div>
  );
};

export default WebGallerySection;
