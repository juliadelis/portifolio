"use client";
import TitleStructureProjects from "../../../../components/projects/TitleStructureProjects";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import photo1 from "../../../../../public/images/projects/details/elysius/colors1.png";
import photo2 from "../../../../../public/images/projects/details/elysius/colors2.png";
import photo3 from "../../../../../public/images/projects/details/elysius/colors3.png";

const ColorsSection = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <div>
      <div className="container px-4 mt-24 mb-24 mx-auto py-2">
        <TitleStructureProjects
          theme="light"
          index={"01"}
          chapter={t("projectsColors")}
          title={t("ElysiusPageColorsTitle")}
          description={t("ElysiusPageColorsDescription")}
        />
      </div>
      <div className="mt-12 py-6 grid grid-cols-1 md:grid-cols-3 flex-wrap">
        <div className="flex flex-col">
          <Image src={photo1} alt="visuals" priority className="w-full" />
          <ColorRGB
            Hash={"#0B1C3A"}
            R={11}
            G={28}
            B={58}
            C={81}
            M={52}
            Y={0}
            K={77}
            name={t("ElysiusPageColorsOne")}
            textColor="#FAFAFA"
          />
        </div>
        <div className="flex flex-col">
          <ColorRGB
            Hash={"#020A17"}
            R={2}
            G={10}
            B={23}
            C={91}
            M={56}
            Y={0}
            K={91}
            name={t("ElysiusPageColorsTwo")}
            textColor="#FAFAFA"
          />
          <Image src={photo2} alt="visuals" priority className="w-full" />
        </div>
        <div className="flex flex-col">
          {" "}
          <Image src={photo3} alt="visuals" priority className="w-full" />
          <ColorRGB
            Hash={"#FAFAFA"}
            R={250}
            G={250}
            B={250}
            C={0}
            M={0}
            Y={0}
            K={2}
            textColor={"#0B1C3A"}
            name={t("ElysiusPageColorsThree")}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorsSection;

const ColorRGB = ({ R, G, B, Hash, textColor, name, C, M, Y, K }) => {
  const { t } = useTranslation(["translation"]);
  return (
    <div
      className={`flex flex-col gap-10  p-12 justify-end aspect-square`}
      style={{ backgroundColor: `${Hash}`, color: `${textColor}` }}>
      <div className="flex flex-col gap-4">
        <p>{Hash}</p>
        <div className="flex gap-[23px]">
          <p>R{R}</p>
          <p>G{G}</p>
          <p>B{B}</p>
        </div>
        <div className="flex gap-[23px]">
          <p>C{C}</p>
          <p>M{M}</p>
          <p>Y{Y}</p>
          <p>K{K}</p>
        </div>
      </div>
      <div>
        <p className="text-[23px] font-semibold">{name}</p>
      </div>
    </div>
  );
};
