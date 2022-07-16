import React from "react";
import { headingProps } from "../../interfaces/heading";

const HeadingL3 = ({ title }: headingProps) => {
  return (
    <>
      <h2 className="font-bold text-xl"> {title} </h2>
    </>
  );
};

export default HeadingL3;
