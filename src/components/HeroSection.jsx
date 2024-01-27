"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-800">
              Olá, sou {""}
            </span>
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
                "Designer de Iteração",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Uma profissional dedicada, especializada em programação e design,
            cuja paixão reside em criar experiências inovadoras e envolventes.
          </p>
          <div>
            <button className="px-6 font-bold py-3 w-full sm:w-fit rounded-full mr-4 text-white bg-gradient-to-r  from-[#AB2C31] to-[#360E0F] hover:bg-slate-200">
              Me contrate
            </button>
            <button className="px-6 font-bold py-3 w-full sm:w-fit rounded-full bg-transparent border border-[#AB2C31] hover:bg-[#360E0F] text-white  mt-3">
              Baixar CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative bg-[#181818] rounded-full w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]">
            <Image
              src="/images/eu-hd-sem-circulo.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
