import React from "react";
import HeadingL1 from "../../../headings/HeadingL1";
import NavOnMain from "../../../layout/NavOnMain";

const PythonMain = () => {
  const topics = [
    {
      name: "Programming for Everybody (Getting Started with Python)",
      link: "/university-of-michigan/python/start-with-python",
    },
    {
      name: "Python Data Structures",
      link: "/university-of-michigan/python/data-structures",
    },
    {
      name: "Using Python to Access Web Data",
      link: "/university-of-michigan/python/web-data",
    },
    {
      name: "Using Databases with Python",
      link: "#",
    },
    {
      name: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
      link: "#",
    },
  ];

  return (
    <>
      <HeadingL1 title="Python for Everybody" />
      <NavOnMain menuList={topics} />
    </>
  );
};

export default PythonMain;
