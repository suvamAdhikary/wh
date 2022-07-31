import React, { useEffect, useState } from "react";
import { useApp } from "../../../../../context/AppContext";
import NavInMain from "../../../../layout/NavInMain";
import UnOrderdList from "../../../../lists/UnOrderdList";
import HeadingL1 from "../../../../text/headings/HeadingL1";

const PythonDataStructures = () => {
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
      name: "Chapter Six: Strings",
      value: "ChapterSix:Strings",
      cta: () => {},
    },
    {
      name: "Chapter Seven: Files",
      value: "ChapterSeven:Files",
      cta: () => {},
    },
    {
      name: "Chapter Eight: Lists",
      value: "ChapterEight:Lists",
      cta: () => {},
    },
    {
      name: "Chapter Nine: Dictionaries",
      value: "ChapterNine:Dictionaries",
      cta: () => {},
    },
    {
      name: "Chapter Ten: Tuples",
      value: "ChapterTen:Tuples",
      cta: () => {},
    },
  ];

  const learningObjectives = {
    title: "Learning Objectives",
    list: [
      "Explain the principles of data structures & how they are used.",
      "Create programs that are able to read and write data from files.",
      "Store data as key/value pairs using Python dictionaries.",
      "Accomplish multi-step tasks like sorting or looping using tuples.",
    ],
  };

  return (
    <>
      {activeTab === "ChapterSix:Strings" ? (
        <></>
      ) : activeTab === "ChapterSeven:Files" ? (
        <></>
      ) : activeTab === "ChapterEight:Lists" ? (
        <></>
      ) : activeTab === "ChapterNine:Dictionaries" ? (
        <></>
      ) : activeTab === "ChapterTen:Tuples" ? (
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

export default PythonDataStructures;
