import React from "react";
import { headingProps } from "../../interfaces/heading";

const HeadingL2 = ({ title }: headingProps) => {
  return (
    <>
      <h2 className="font-bold text-2xl"> {title} </h2>
    </>
  );
};

export default HeadingL2;
