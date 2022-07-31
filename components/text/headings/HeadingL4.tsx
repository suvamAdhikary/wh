import React from "react";
import { headingProps } from "../../../interfaces/heading";

const HeadingL4 = ({ title, children, isChildren }: headingProps) => {
  return (
    <>
      <h4> {isChildren ? children : title} </h4>
    </>
  );
};

export default HeadingL4;
