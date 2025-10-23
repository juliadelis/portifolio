"use client";
import TitleStructureProjects from "../../../../components/projects/TitleStructureProjects";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import photo1 from "../../../../../public/images/projects/details/elysius/web1.png";

const WebsiteSection = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <div>
      <div className="container px-4 mt-24 mb-24 mx-auto py-2">
        <TitleStructureProjects
          theme="light"
          index={"03"}
          chapter={"Website"}
          title={t("ElysiusPageWebsiteTitle")}
          description={t("ElysiusPageWebsiteDescription")}
        />
      </div>
      <div className="mt-12 w-full py-6 flex flex-col items-center justify-center">
        <Image src={photo1} alt="visuals" priority className="w-full" />
      </div>
    </div>
  );
};

export default WebsiteSection;
