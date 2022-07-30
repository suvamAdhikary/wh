import React from "react";
import HeadingL1 from "../../../text/headings/HeadingL1";
import NavOnMain from "../../../layout/NavOnMain";

const BackEnd = () => {
  const topics = [
    {
      name: "Introduction to Back-End Development",
      link: "/meta/back-end/introduction",
    },
    {
      name: "Programming in Python",
      link: "#",
    },
    {
      name: "Version Control",
      link: "#",
    },
    {
      name: "Databases",
      link: "#",
    },
    {
      name: "Django Web Framework",
      link: "#",
    },
    {
      name: "APIs",
      link: "#",
    },
    {
      name: "The Full Stack",
      link: "#",
    },
    {
      name: "Cloud Computing",
      link: "#",
    },
    {
      name: "Back-End Developer Capstone",
      link: "#",
    },
    {
      name: "Coding Interview Preparation",
      link: "#",
    },
  ];
  return (
    <>
      <HeadingL1 title="Meta Back-End Developer" />
      <NavOnMain menuList={topics} />
    </>
  );
};

export default BackEnd;
