import React from "react";
import { headingProps } from "../../interfaces/heading";

const HeadingL1 = ({ title }: headingProps) => {
  return (
    <>
      <h1 className="heading-one"> {title} </h1>
    </>
  );
};

export default HeadingL1;
