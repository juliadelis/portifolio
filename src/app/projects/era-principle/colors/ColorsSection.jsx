"use client";
import TitleStructureProjects from "../../../../components/projects/TitleStructureProjects";
import { useTranslation } from "react-i18next";
const { StarIconLogo } = require("./Start");

const ColorsSection = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <div className="container mt-24 mb-24 mx-auto py-2">
      <TitleStructureProjects
        theme="light"
        index={"02"}
        chapter={t("projectsColors")}
        title={t("EraPageColorsTitle")}
        description={t("EraPageColorsDescription")}
      />
      <div className="mt-12 py-6 gap-y-6 grid grid-cols-2 md:grid-cols-7 flex-wrap">
        <ColorRGB Hash={"#0B0B0C"} R={11} G={11} B={12} />
        <ColorRGB Hash={"#FFF1F1"} stroke={"#0B0B0C"} R={254} G={240} B={241} />
        <ColorRGB Hash={"#FAFF1D"} R={250} G={255} B={29} />
        <ColorRGB Hash={"#A842F9"} R={168} G={66} B={249} />
        <ColorRGB Hash={"#F87521"} R={248} G={117} B={33} />
        <ColorRGB Hash={"#F84609"} R={248} G={70} B={9} />
        <ColorRGB Hash={"#3BC2E2"} R={59} G={194} B={226} />
        <ColorRGB Hash={"#D2FF1D"} R={210} G={255} B={29} />
        <ColorRGB Hash={"#BF92EA"} R={191} G={146} B={234} />
        <ColorRGB Hash={"#1A54E8"} R={26} G={84} B={232} />
      </div>
    </div>
  );
};

export default ColorsSection;

const ColorRGB = ({ R, G, B, Hash, stroke }) => {
  const { t } = useTranslation(["translation"]);
  return (
    <div className="flex flex-col gap-5 text-[#1E1E1E]">
      <StarIconLogo color={Hash} stroke={stroke} />

      <div className="flex flex-col">
        <p className="font-bold">{Hash}</p>
        <p>R: {R}</p>
        <p>G: {G}</p>
        <p>B: {B}</p>
      </div>
    </div>
  );
};
