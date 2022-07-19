import React from "react";

export interface unOrderdListProps {
  heading: string;
  description?: string;
  listData: string[];
  id?: string;
}

const UnOrderdList = ({
  heading,
  listData,
  description,
  id,
}: unOrderdListProps) => {
  return (
    <>
      <article id={id} className="common-unorderd-list-wrapper">
        {heading && <h5>{heading} :-</h5>}
        {description?.split("\n").map((line) => (
          <p className="list-description" key={line}>
            {line}
          </p>
        ))}
        <ul className="common-unorderd-list">
          {listData?.map((el, i) => (
            <li className="common-unorderd-list__item" key={`${el}-${i}`}>
              {el}
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export default UnOrderdList;
