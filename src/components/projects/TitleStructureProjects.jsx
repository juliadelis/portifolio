const TitleStructureProjects = ({
  index,
  chapter,
  title,
  description,
  theme = "dark",
}) => {
  const isDark = theme === "dark";

  const palette = {
    textBase: isDark ? "text-[#B1B1B1]" : "text-[#1E1E1E]",
    Title: isDark ? "text-white" : "text-[#7E7D7D]",
  };
  return (
    <div className="flex justify-between w-full gap-[45px] flex-wrap lg:flex-nowrap">
      <div className=" flex gap-[30px]">
        <h3 className={`text-[32px] ${palette.Title} `}>{index}</h3>
        <h3 className={`text-[32px] ${palette.Title}`}>{chapter}</h3>
      </div>
      <div className="w-[68%] flex flex-col gap-[15px] align-top content-top">
        <h3 className={`text-[32px]  ${palette.textBase}`}>{title}</h3>
        <p className={`text-[18px]  ${palette.textBase}`}>{description}</p>
      </div>
    </div>
  );
};

export default TitleStructureProjects;
