import React from "react";
import { onlyChildProp } from "../../interfaces/layout";

const Para = ({ children }: onlyChildProp) => {
  return (
    <>
      <p className="paragraph">{children}</p>
    </>
  );
};

export default Para;
