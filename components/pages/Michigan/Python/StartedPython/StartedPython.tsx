import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../context/AppContext";
import NavInMain from "../../../../layout/NavInMain";
import UnOrderdList from "../../../../lists/UnOrderdList";
import HeadingL1 from "../../../../text/headings/HeadingL1";

const StartedPython = () => {
  const [activeTab, setActiveTab] = useState<string>("");

  const { showBackBtn, hideBackBtn } = useApp();

  const handleTabSelection = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  const hereAgain = () => {
    setActiveTab("");
  };

  useEffect(() => {
    showBackBtn();

    return () => {
      hideBackBtn();
    };
  }, [showBackBtn, hideBackBtn]);

  const topics = [
    {
      name: "Chapter One - Why we Program?",
      value: "ChapterOne-WhyweProgram?",
      cta: () => {},
    },
    {
      name: "Chapter Two: Variables and Expressions",
      value: "ChapterTwo:VariablesandExpressions)",
      cta: () => {},
    },
    {
      name: "Chapter Three: Conditional Code",
      value: "ChapterThree:ConditionalCode",
      cta: () => {},
    },
    {
      name: "Chapter Four: Functions",
      value: "ChapterFour:Functions",
      cta: () => {},
    },
    {
      name: "Chapter Five: Loops and Iteration",
      value: "ChapterFive:LoopsandIteration",
      cta: () => {},
    },
  ];

  const learningObjectives = {
    title: "Learning Objectives",
    list: [
      "Install Python and write your first program.",
      "Describe the basics of the Python programming language.",
      "Use variables to store, retrieve and calculate information.",
      "Utilize core programming tools such as functions and loops.",
    ],
  };

  return (
    <>
      {activeTab === "ChapterOne-WhyweProgram?" ? (
        <></>
      ) : activeTab === "ChapterTwo:VariablesandExpressions" ? (
        <></>
      ) : activeTab === "ChapterThree:ConditionalCode" ? (
        <></>
      ) : activeTab === "ChapterFour:Functions" ? (
        <></>
      ) : activeTab === "ChapterFive:LoopsandIteration" ? (
        <></>
      ) : (
        <>
          <HeadingL1 title="Using Python to Access Web Data" />
          <UnOrderdList
            heading={learningObjectives.title}
            listData={learningObjectives.list}
          />
          <NavInMain menuList={topics} cta={handleTabSelection} />
        </>
      )}
    </>
  );
};

export default StartedPython;
