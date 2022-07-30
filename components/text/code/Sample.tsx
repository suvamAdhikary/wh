import React from "react";
import { onlyChildProp } from "../../../interfaces/layout";

const Sample = ({ children }: onlyChildProp) => {
  return (
    <>
      <samp>{children}</samp>
    </>
  );
};

export default Sample;
