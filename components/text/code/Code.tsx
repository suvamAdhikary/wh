import React from "react";
import { onlyChildProp } from "../../../interfaces/layout";

const Code = ({ children }: onlyChildProp) => {
  return (
    <>
      <pre className="code-parent">
        <code>{children}</code>
        <div className="code__bottom"></div>
      </pre>
    </>
  );
};

export default Code;
