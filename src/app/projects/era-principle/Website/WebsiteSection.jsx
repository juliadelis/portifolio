"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import TitleStructureProjects from "../../../../components/projects/TitleStructureProjects";
import photoDisplay from "../../../../../public/images/projects/details/era/era-site.png";

const WebsiteSection = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <div className="container mt-24 mb-24 mx-auto py-2">
      <TitleStructureProjects
        theme="light"
        index={"03"}
        chapter={"Website"}
        title={t("EraPageWebsiteTitle")}
        description={t("EraPageWebsiteDescription")}
      />
      <div className="mt-12">
        <Image src={photoDisplay} alt="visuals" priority className="w-full" />
      </div>
    </div>
  );
};

export default WebsiteSection;
