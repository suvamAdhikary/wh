import React from "react";
import HeadingL1 from "../../../headings/HeadingL1";
import NavOnMain from "../../../layout/NavOnMain";

const Android = () => {
  const topics = [
    {
      name: "Introduction to Mobile Development",
      link: "/meta/android/introduction",
    },
    {
      name: "Programming with JavaScript",
      link: "#",
    },
    {
      name: "Version Control",
      link: "#",
    },
    {
      name: "React Basics",
      link: "#",
    },
    {
      name: "React Native",
      link: "#",
    },
    {
      name: "Mobile Architecture",
      link: "#",
    },
    {
      name: "The Web and Databases in Android",
      link: "#",
    },
    {
      name: "Programming Fundamentals in Kotlin",
      link: "#",
    },
    {
      name: "Principles of UI/UX Design",
      link: "#",
    },
    {
      name: "Create the User Interface in Android Studio",
      link: "#",
    },
    {
      name: "Android Mobile Lifecycle and Software Development Approaches",
      link: "#",
    },
    {
      name: "Capstone (React App)",
      link: "#",
    },
    {
      name: "Android App Capstone",
      link: "#",
    },
    {
      name: "Coding Interview Prep",
      link: "#",
    },
  ];
  return (
    <>
      <HeadingL1 title="Meta React Native Specialization And Android Developer" />
      <NavOnMain menuList={topics} />
    </>
  );
};

export default Android;
