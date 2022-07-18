import React from "react";
import NavBtnLrg from "../../../buttons/NavBtnLrg";
import HeadingL1 from "../../../headings/HeadingL1";

const FrontEnd = () => {
  const topics = [
    {
      text: "Introduction to Front-End Development",
      link: "/meta/front-end/introduction",
    },
    {
      text: "Programming with JavaScript",
      link: "#",
    },
    {
      text: "Version Control",
      link: "#",
    },
    {
      text: "HTML and CSS in depth",
      link: "#",
    },
    {
      text: "React Basics",
      link: "#",
    },
    {
      text: "Advanced React",
      link: "#",
    },
    {
      text: "Principles of UI/UX Design",
      link: "#",
    },
    {
      text: "Front-End Developer Capstone",
      link: "#",
    },
    {
      text: "Coding Interview Preparation",
      link: "#",
    },
  ];

  return (
    <>
      <HeadingL1 title="Meta Front-End Developer" />
      <nav>
        <ul className="nav-on-main">
          {topics.map((topic) => (
            <NavBtnLrg key={topic.text} link={topic.link} text={topic.text} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default FrontEnd;
