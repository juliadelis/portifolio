"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  const { t } = useTranslation(["translation"]);

  const xp = t("xp");

  const formation = t("formation");
  const skills = t("skills");

  const achiementsList = [
    {
      metric: xp,
      value: "5",
      postfix: "+",
    },
    {
      metric: formation,
      value: "3",
    },
    {
      metric: skills,
      value: "10",
      postfix: "+",
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col sm:flex-row gap-8 sm:gap-0 items-center justify-between">
        {achiementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4">
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  local="pt-br"
                  className="text-white"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
