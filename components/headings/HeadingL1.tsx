import React from "react";
import { headingProps } from "../../interfaces/heading";

const HeadingL1 = ({ title }: headingProps) => {
  return (
    <>
      <h2 className="font-bold text-3xl"> {title} </h2>
    </>
  );
};

export default HeadingL1;
