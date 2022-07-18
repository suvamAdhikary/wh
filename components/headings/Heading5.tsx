import React from "react";
import { headingProps } from "../../interfaces/heading";

const Heading5 = ({ title }: headingProps) => {
  return (
    <>
      <h5> {title} </h5>
    </>
  );
};

export default Heading5;
