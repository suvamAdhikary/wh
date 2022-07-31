import React from "react";
import { onlyChildProp } from "../../interfaces/layout";

const ULItem = ({ children }: onlyChildProp) => {
  return (
    <>
      <li className="common-unorderd-list__item">{children}</li>
    </>
  );
};

export default ULItem;
