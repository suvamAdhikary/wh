import React from "react";
import { headingProps } from "../../../interfaces/heading";

const Heading5 = ({ title, children, isChildren }: headingProps) => {
  return (
    <>
      <h5> {isChildren ? children : title} </h5>
    </>
  );
};

export default Heading5;
