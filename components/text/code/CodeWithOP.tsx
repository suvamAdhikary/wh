import React from "react";
import { codeWithOPProps } from "../../../interfaces/code";

const CodeWithOP = ({ code, op }: codeWithOPProps) => {
  return (
    <>
      <pre className="code-parent">
        <code>{code}</code>
        <hr />
        <samp>{op}</samp>
        <div className="code__bottom"></div>
      </pre>
    </>
  );
};

export default CodeWithOP;
