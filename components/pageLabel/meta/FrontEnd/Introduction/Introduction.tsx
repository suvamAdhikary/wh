import React from "react";
import HeadingL1 from "../../../../headings/HeadingL1";
import UnOrderdList from "../../../../lists/UnOrderdList";
import StartWithWebDev from "./StartWithWebDev/StartWithWebDev";

const Introduction = () => {
  const learningObjectives = {
    title: "Learning Objectives",
    list: [
      "Describe the front-end developer role",
      "Explain the core and underlying technologies that power the internet",
      "Use HTML to create a simple webpage",
      "Use CSS to control the appearance of a simple webpage",
      "Explain what React is",
      "Describe the applications and characteristics of the most popular UI frameworks",
    ],
  };

  return (
    <>
      <HeadingL1 title="Introduction to Front-End Development" />
      <UnOrderdList
        heading={learningObjectives.title}
        listData={learningObjectives.list}
      />
      <StartWithWebDev />
    </>
  );
};

export default Introduction;
