import React from "react";
import { tBodyCellProps } from "../../../../interfaces/meta";

const TBodyCell = ({ title, description }: tBodyCellProps) => {
  return (
    <>
      <div className="meta-home__tbody-cell">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </>
  );
};

export default TBodyCell;
