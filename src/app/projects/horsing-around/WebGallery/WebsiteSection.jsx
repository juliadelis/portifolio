"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import photo1 from "../../../../../public/images/projects/details/jdelis/webGallery/img-1.png";
import photo2 from "../../../../../public/images/projects/details/jdelis/webGallery/img-2.png";
import photo3 from "../../../../../public/images/projects/details/jdelis/webGallery/img-3.png";
import photo4 from "../../../../../public/images/projects/details/jdelis/webGallery/img-4.png";
import photo5 from "../../../../../public/images/projects/details/jdelis/webGallery/img-5.png";
import photo6 from "../../../../../public/images/projects/details/jdelis/webGallery/img-6.png";
import photo7 from "../../../../../public/images/projects/details/jdelis/webGallery/img-7.png";
import photo8 from "../../../../../public/images/projects/details/jdelis/webGallery/img-8.png";

const WebGallerySection = () => {
  const sectionRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = rect.top - windowHeight;

      const end = rect.bottom;

      const totalScroll = end - start;
      const scrolled = windowHeight - rect.top;
      const progress = Math.min(Math.max(scrolled / totalScroll, 0), 1);

      const translateX = progress * -90; // 0 → -100%
      setScrollX(translateX);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className=" py-2 w-full overflow-hidden">
      <div className="grid grid-cols-1 grid-flow-col md:grid-cols-4 gap-6 w-full max-w-[100vw]">
        <div className="flex flex-col gap-9 pt-6">
          <div className="rounded-br-[24px] rounded-tr-[24px] overflow-hidden">
            <Image
              src={photo1}
              alt="Gallery Image 1"
              className="w-full h-[240px] object-cover object-right"
              priority
            />
          </div>
          <div className="flex gap-6">
            <div className="w-1/2 h-[200px] rounded-br-[24px] rounded-tr-[24px] overflow-hidden">
              <Image
                src={photo6}
                alt="Gallery Image 6"
                className="w-full h-full object-cover object-right"
                priority
              />
            </div>
            <div className="w-1/2 h-[200px] rounded-[24px] overflow-hidden">
              <Image
                src={photo5}
                alt="Gallery Image 5"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="h-[545px] rounded-[24px] overflow-hidden">
          <Image
            src={photo2}
            alt="Gallery Image 2"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="h-[505px] pt-6 overflow-hidden rounded-[24px] hidden md:flex">
          <Image
            src={photo8}
            alt="Gallery Image 8"
            className="w-full h-full object-cover rounded-[24px] max-w-[230px]"
          />
        </div>

        <div className="flex flex-col gap-9 pt-6">
          <div className="h-[220px] rounded-[24px] overflow-hidden hidden md:flex">
            <Image
              src={photo3}
              alt="Gallery Image 3"
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="h-[220px] rounded-[24px] overflow-hidden hidden md:flex">
            <Image
              src={photo4}
              alt="Gallery Image 4"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div ref={sectionRef} className="relative h-[100vh] mt-24">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            className="absolute top-0 left-0  will-change-transform"
            style={{
              width: "2506px",
              transform: `translateX(${scrollX}%)`,
            }}>
            <Image
              src={photo7}
              alt="Gallery Image 7"
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebGallerySection;
