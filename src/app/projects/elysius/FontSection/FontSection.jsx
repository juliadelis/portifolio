"use client";
import TitleStructureProjects from "../../../../components/projects/TitleStructureProjects";
import { useTranslation } from "react-i18next";
import localFont from "next/font/local";

const glamore = localFont({
  src: "../../../../../public/fonts/Glamore.ttf",
  variable: "--font-glamore",
});

const FontSection = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <div>
      <div className="container px-4 mt-24 mb-24 mx-auto py-2">
        <TitleStructureProjects
          theme="light"
          index={"02"}
          chapter={t("projectsFont")}
          title={t("ElysiusPageFontTitle")}
          description={t("ElysiusPageFontDescription")}
        />
      </div>
      <div className="mt-12 h-screen py-6 grid grid-cols-1 md:grid-cols-2 flex-wrap">
        <Font
          title={"Glamore"}
          subTitle={"Headline"}
          bg={"#0B1C3A"}
          description={t("ElysiusPageFontDescriptionOne")}
          textColor={"#FAFAFA"}
          font={glamore.style.fontFamily}
          tags={["Type 01", "H1"]}
        />

        <Font
          title={"Inter Sans Serif"}
          subTitle={"Display"}
          bg={"#FAFAFA"}
          description={t("ElysiusPageFontDescriptionTwo")}
          textColor={"#0B1C3A"}
          font={""}
          tags={["Type 02", "H2", "Paragraph"]}
          theme="Dark"
        />
      </div>
    </div>
  );
};

export default FontSection;

const Font = ({
  tags,
  bg,
  textColor,
  title,
  subTitle,
  font,
  description,
  theme,
}) => {
  const { t } = useTranslation(["translation"]);
  const palette = {
    textBase: `text-[${textColor}]`,
  };

  return (
    <div
      className={`flex flex-col gap-10  p-12 justify-end h-full`}
      style={{
        backgroundColor: `${bg}`,
        textColor: `${textColor}`,
      }}>
      <div
        className={`flex flex-col justify-between h-full ${palette.textBase}`}>
        <div>
          <p className="text-[28px]" style={{ fontFamily: `${font}` }}>
            {title}
          </p>
          <p>{subTitle}</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-[23px]">
            <p>{description}</p>
          </div>
          <div className="flex gap-3">
            {tags?.map((tag) => (
              <div key={tag} className="h-fit">
                <ProjectTagDetails theme={theme} name={tag} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectTagDetails = ({ name, theme = "dark" }) => {
  const isDark = theme === "dark";

  const palette = {
    textBase: isDark ? "text-[#fafafa]" : "text-[#0B1C3A]",
    border: isDark ? "#fafafa" : "#0B1C3A",
  };

  return (
    <button
      className={`text-[14px]  rounded-full border px-3 py-1 ${palette.textBase} `}
      style={{ borderColor: `${palette.border}` }}>
      {name}
    </button>
  );
};
