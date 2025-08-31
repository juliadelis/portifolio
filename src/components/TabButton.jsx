import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: {
    width: 0,
  },
  active: {
    width: "calc(100% - 0.75rem)",
  },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#D9D9D9]" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 text-xl font-semibold hover:text-[#D9D9D9] ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-red-600 mt-2 mr-3"></motion.div>
    </button>
  );
};

export default TabButton;
