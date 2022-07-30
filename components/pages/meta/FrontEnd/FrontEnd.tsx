import React from "react";
import HeadingL1 from "../../../text/headings/HeadingL1";
import NavOnMain from "../../../layout/NavOnMain";

const FrontEnd = () => {
  const topics = [
    {
      name: "Introduction to Front-End Development",
      link: "/meta/front-end/introduction",
    },
    {
      name: "Programming with JavaScript",
      link: "/meta/front-end/javaScript",
    },
    {
      name: "Version Control",
      link: "#",
    },
    {
      name: "HTML and CSS in depth",
      link: "#",
    },
    {
      name: "React Basics",
      link: "#",
    },
    {
      name: "Advanced React",
      link: "#",
    },
    {
      name: "Principles of UI/UX Design",
      link: "#",
    },
    {
      name: "Front-End Developer Capstone",
      link: "#",
    },
    {
      name: "Coding Interview Preparation",
      link: "#",
    },
  ];

  return (
    <>
      <HeadingL1 title="Meta Front-End Developer" />
      <NavOnMain menuList={topics} />
    </>
  );
};

export default FrontEnd;
