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
        chapter={"Colors"}
        title={"New Realities"}
        description={
          "The choice of colors reflects this balance between contrast and energy. Eight bold, vivid tones were selected to stand out against neutral black and white, ensuring that the experience feels both dynamic and striking. Together, they embody the duality at the heart of ERA—simplicity on the surface, and a world of color when technology unlocks its hidden layers."
        }
      />
      <div className="py-6 flex justify-between flex-wrap">
        <ColorRGB Hash={"#0B0B0C"} R={11} G={11} B={12} />
        <ColorRGB Hash={"#FFF1F1"} stroke={"#0B0B0C"} R={254} G={240} B={241} />
        <ColorRGB Hash={"#FAFF1D"} R={250} G={255} B={29} />
        <ColorRGB Hash={"#A842F9"} R={168} G={66} B={249} />
        <ColorRGB Hash={"#F87521"} R={248} G={117} B={33} />
        <ColorRGB Hash={"#F84609"} R={248} G={70} B={9} />
        <ColorRGB Hash={"#3BC2E2"} R={59} G={194} B={226} />
      </div>
    </div>
  );
};

export default ColorsSection;

const ColorRGB = ({ R, G, B, Hash, stroke }) => {
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
