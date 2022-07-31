import React from "react";
import HeadingL3 from "../../../../../text/headings/HeadingL3";
import Operators from "./JS/Operators";
import Comments from "./JS/Comments";
import Semicolon from "./JS/Semicolon";
import Console from "./JS/Console";
import Variables from "./JS/Variables";
import DataTypes from "./JS/DataTypes";
import Improvements from "./JS/Improvements";
import ListOfLinks from "../../../../../lists/ListOfLinks";

const WelcomeToProgramming = () => {
  const additionalResources = {
    title: "Additional Resources",
    list: [
      {
        title: "Mozilla Developer Network Expressions and Operators",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators",
      },
      {
        title:
          "Mozilla Developer Network Operator Precedence and Associativity",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence",
      },
      {
        title: "JavaScript Primitive Values",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/Primitive",
      },
      {
        title: "ECMA262 Specification",
        link: "https://tc39.es/ecma262/",
      },
      {
        title: "jQuery Official Website",
        link: "https://jquery.com/",
      },
      {
        title: "React Official Website",
        link: "https://reactjs.org/",
      },
      {
        title: "StackOverflow Developer Survey 2021 Most Popular Technologies",
        link: "https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies",
      },
      {
        title: "Emojis",
        link: "http://unicode.org/emoji/charts/full-emoji-list.html#1f600",
      },
    ],
  };

  return (
    <>
      <HeadingL3 title="Welcome to Programming" />
      <HeadingL3 title="Writing First Javascript Code" />
      <Comments />
      <Semicolon />
      <Console />
      <Variables />
      <DataTypes />
      <Operators />
      <Improvements />
      <ListOfLinks
        title={additionalResources.title}
        list={additionalResources.list}
      />
    </>
  );
};

export default WelcomeToProgramming;
