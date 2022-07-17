import React from "react";
import { headingProps } from "../../interfaces/heading";

const Heading6 = ({ title }: headingProps) => {
  return (
    <>
      <h2 className="font-bold text-sm"> {title} </h2>
    </>
  );
};

export default Heading6;
