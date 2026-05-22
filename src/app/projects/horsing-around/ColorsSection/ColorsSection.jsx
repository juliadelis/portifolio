"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import TitleStructureProjects from "../../../../components/projects/TitleStructureProjects";
import Color1 from "../../../../../public/images/projects/details/horsing/color/color-1.png";
import Color2 from "../../../../../public/images/projects/details/horsing/color/color-2.png";
import Color3 from "../../../../../public/images/projects/details/horsing/color/color-3.png";
import Color4 from "../../../../../public/images/projects/details/horsing/color/color-4.png";
import Color5 from "../../../../../public/images/projects/details/horsing/color/color-5.png";

const ColorsHorsingSection = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <div className="container mt-24 mb-24 mx-auto py-2">
      <div className="px-4">
      <TitleStructureProjects
        theme="light"
        index={"02"}
        chapter={t("projectsColors")}
        title={t("HorsingAroundPageColorsTitle")}
        description={t("HorsingAroundPageColorsDescription")}
      />
      </div>
      <div className="mt-12 grid grid-cols-2 overflow-hidden md:grid-cols-6">
        <ColorCard
          name={t("HorsingAroundPageColorsOne")}
          className="md:col-span-2"
          hash="#22211C"
          rgb="34 33 28"
          cmyk="0 3 17 86"
          imageSrc={Color1}
          imageClassName="object-[34%_50%]"
        />
        <ColorCard
          name={t("HorsingAroundPageColorsTwo")}
          className="md:col-span-2"
          hash="#333129"
          rgb="51 49 41"
          cmyk="0 4 20 80"
          imageSrc={Color2}
          imageClassName="object-[48%_50%]"
        />
        <ColorCard
          name={t("HorsingAroundPageColorsThree")}
          className="md:col-span-2"
          hash="#DCDCD6"
          rgb="220 220 214"
          cmyk="0 0 3 14"
          textColor="#1E1E1E"
          imageSrc={Color3}
          imageClassName="object-[56%_50%]"
        />
        <ColorCard
          name={t("HorsingAroundPageColorsFour")}
          className="md:col-span-3"
          hash="#AFAFA7"
          rgb="175 175 167"
          cmyk="0 0 5 31"
          textColor="#FFFFFF"
          imageSrc={Color4}
          imageClassName="object-[42%_50%]"
        />
        <ColorCard
          name={t("HorsingAroundPageColorsFive")}
          className="md:col-span-3"
          hash="#FFD08A"
          rgb="255 208 138"
          cmyk="0 18 46 0"
          textColor="#1E1E1E"
          imageSrc={Color5}
          imageClassName="object-[52%_50%]"
        />
      </div>
    </div>
  );
};

export default ColorsHorsingSection;

const ColorCard = ({
  name,
  imageSrc,
  hash,
  rgb,
  cmyk,
  className = "",
  imageClassName = "object-center",
  textColor = "#F5F2EA",
}) => {
  const [r, g, b] = rgb.split(" ");
  const [c, m, y, k] = cmyk.split(" ");

  return (
    <div
    style={{ backgroundColor: hash }}
      className={`flex min-h-[280px] flex-col overflow-hidden  ${className}`}>
      <div className="relative h-[310px] w-full md:h-[484px] lg:h-[484px]">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(min-width: 768px) 33vw, 50vw"
          className={`object-cover ${imageClassName}`}
        />
      </div>

      <div
        className="flex min-h-[104px] flex-col justify-end px-6 py-7"
        style={{ backgroundColor: hash, color: textColor }}>
        <div className="mb-3 flex flex-col gap-3 text-[14px] uppercase leading-none tracking-normal">
          <p>{hash}</p>
          <div className="flex gap-[23px]">
            <p>R{r}</p>
            <p>G{g}</p>
            <p>B{b}</p>
          </div>
          <div className="flex gap-[23px]">
            <p>C{c}</p>
            <p>M{m}</p>
            <p>Y{y}</p>
            <p>K{k}</p>
          </div>
        </div>
        <h3 className="text-[20px] mt-2 font-medium leading-tight tracking-normal md:text-[30px]">
          {name}
        </h3>
      </div>
    </div>
  );
};
