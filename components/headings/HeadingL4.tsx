import React from "react";
import { headingProps } from "../../interfaces/heading";

const HeadingL4 = ({ title }: headingProps) => {
  return (
    <>
      <h4 className="font-bold text-lg"> {title} </h4>
    </>
  );
};

export default HeadingL4;
