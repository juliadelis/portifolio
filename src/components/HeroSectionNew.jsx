"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const HeroSectionNew = () => {
  const { t } = useTranslation(["translation"]);

  const cv = t("cv");
  const contactMe = t("contactMe");

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-[55px] lg:leading-normal font-extrabold ">
            <span className="text-[#DC2626]">{t("header")}</span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Julia",
                1000,
                "Web Developer",
                1000,
                "UX/UI Designer",
                1000,
                "Interactive Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {t("description")}
          </p>
          <div>
            <button className="px-6 font-bold py-3 w-full sm:w-fit rounded-full mr-4 text-white bg-gradient-to-r  bg-[#DC2626] hover:bg-slate-200">
              <Link href="/#contact">{contactMe}</Link>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center lg:place-self-end mt-4 lg:mt-0">
          <div className="relative bg-[#181818] rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/hero_image_jd.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionNew;
