import React from "react";
import { onlyChildProp } from "../../interfaces/layout";

const Emphasis = ({ children }: onlyChildProp) => {
  return (
    <>
      <em className="emphasis">{children}</em>
    </>
  );
};

export default Emphasis;
