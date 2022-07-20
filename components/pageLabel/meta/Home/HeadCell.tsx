import Image from "next/image";
import React from "react";
import { headCellProps } from "../../../../interfaces/meta";

const HeadCell = ({ title, icon }: headCellProps) => {
  return (
    <>
      <figure className="meta-home__head-cell">
        <div className="meta-home__head-cell--icon">
          <Image src={icon} layout={"fill"} alt={title} />
        </div>
        <figcaption className="meta-home__head-cell--text">{title}</figcaption>
      </figure>
    </>
  );
};

export default HeadCell;
