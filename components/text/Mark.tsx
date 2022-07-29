import React from "react";
import { onlyChildProp } from "../../interfaces/layout";

const Mark = ({ children }: onlyChildProp) => {
  return (
    <>
      <mark>{children}</mark>
    </>
  );
};

export default Mark;
