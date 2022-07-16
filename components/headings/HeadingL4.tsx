import React from "react";
import { headingProps } from "../../interfaces/heading";

const HeadingL4 = ({ title }: headingProps) => {
  return (
    <>
      <h2 className="font-bold text-lg"> {title} </h2>
    </>
  );
};

export default HeadingL4;