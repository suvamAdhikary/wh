import React from "react";
import { headingProps } from "../../../interfaces/heading";

const HeadingL3 = ({ title }: headingProps) => {
  return (
    <>
      <h3> {title} </h3>
    </>
  );
};

export default HeadingL3;
