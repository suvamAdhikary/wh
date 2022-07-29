import React from "react";
import { headingProps } from "../../../interfaces/heading";

const Heading6 = ({ title }: headingProps) => {
  return (
    <>
      <h6> {title} </h6>
    </>
  );
};

export default Heading6;
