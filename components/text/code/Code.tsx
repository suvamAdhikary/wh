import React from "react";
import { onlyChildProp } from "../../../interfaces/layout";

const Code = ({ children }: onlyChildProp) => {
  return (
    <>
      <pre className="code-parent">
        <samp>{children}</samp>
        <div className="code__bottom"></div>
      </pre>
    </>
  );
};

export default Code;
