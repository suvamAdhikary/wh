import React from "react";
import { onlyChildProp } from "../../interfaces/layout";

const KeyBD = ({ children }: onlyChildProp) => {
  return (
    <>
      <kbd>{children}</kbd>
    </>
  );
};

export default KeyBD;
