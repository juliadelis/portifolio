import React from "react";

const ProjectTagDetails = ({ name, theme = "dark" }) => {
  const isDark = theme === "dark";

  const palette = {
    textBase: isDark ? "text-[#ADB7BE]" : "text-[#33353F]",
    hover: isDark ? "hover:text-white" : "hover:text-[#111827]",
  };

  return (
    <button
      className={`text-[18px]  rounded-full border-2 px-3 py-1 ${palette.textBase} `}>
      {name}
    </button>
  );
};

export default ProjectTagDetails;
