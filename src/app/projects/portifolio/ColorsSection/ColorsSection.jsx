"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import TitleStructureProjects from "../../../../components/projects/TitleStructureProjects";
import Color1 from "../../../../../public/images/projects/details/jdelis/colors-1.png";
import Color2 from "../../../../../public/images/projects/details/jdelis/colors-2.png";
import Color3 from "../../../../../public/images/projects/details/jdelis/colors-3.png";
import Color4 from "../../../../../public/images/projects/details/jdelis/colors-4.png";

const ColorsPortifolioSection = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <div className="container mt-24 mb-24 mx-auto py-2">
      <TitleStructureProjects
        theme="light"
        index={"02"}
        chapter={t("projectsColors")}
        title={t("PortifolioPageColorsTitle")}
        description={t("PortifolioPageColorsDescription")}
      />
      <div className="mt-12 gap-x-8 py-6 gap-y-6 grid grid-cols-2 md:grid-cols-4 flex-wrap">
        <ColorCard
          name={t("PortifolioPageColorsOne")}
          titleColor="#F0F0F0"
          hash={"#F0F0F0"}
          rgb={"240 240 240"}
          cmyk={"0 0 0 6"}
          textColor="#1E1E1E"
          imageSrc={Color1}
          borderColor="#7E7D7D"
        />
        <ColorCard
          titleColor="#FFFFFF"
          name={t("PortifolioPageColorsTwo")}
          hash={"#1E1E1E"}
          rgb={"30 30 30"}
          cmyk={"0 0 0 88"}
          imageSrc={Color2}
        />
        <ColorCard
          titleColor="#FFFFFF"
          name={t("PortifolioPageColorsThree")}
          hash={"#DC2626"}
          rgb={"220 38 38"}
          cmyk={"0 82 82 13"}
          imageSrc={Color3}
        />
        <ColorCard
          titleColor="#000000"
          name={t("PortifolioPageColorsFour")}
          hash={"#FFFFFF"}
          rgb={"225 225 225"}
          cmyk={"0 0 0 0"}
          textColor="#1E1E1E"
          imageSrc={Color4}
        />
      </div>
    </div>
  );
};

export default ColorsPortifolioSection;

const ColorCard = ({
  name,
  imageSrc,
  hash,
  rgb,
  cmyk,
  borderColor = "#E5E5E5",
  titleColor = "#FFFFFF",
  textColor = "#FFFFFF",
}) => {
  const { t } = useTranslation(["translation"]);

  return (
    <div
      className="rounded-[32px] overflow-hidden  flex flex-col shadow-md p-3 gap-8"
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: hash,
      }}>
      <div className="h-[186px] w-full relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover rounded-[20px]"
        />
        <h3
          className="absolute top-2 left-3 text-[18px]"
          style={{ color: titleColor }}>
          {name}
        </h3>
      </div>

      {/* Info Section */}
      <div className=" flex flex-col gap-3">
        <div
          className="text-sm flex justify-between"
          style={{ color: textColor }}>
          <p className="font-semibold">Hex</p> <p>{hash}</p>
        </div>
        <div
          className="text-sm flex justify-between"
          style={{ color: textColor }}>
          <p className="font-semibold">RGB</p> <p>{rgb}</p>
        </div>
        <div
          className="text-sm flex justify-between"
          style={{ color: textColor }}>
          <p className="font-semibold">CMYK</p>
          <p>{cmyk}</p>
        </div>
      </div>
    </div>
  );
};
