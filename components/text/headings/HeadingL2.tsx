import React from "react";
import { headingProps } from "../../../interfaces/heading";

const HeadingL2 = ({ title }: headingProps) => {
  return (
    <>
      <h2> {title} </h2>
    </>
  );
};

export default HeadingL2;
