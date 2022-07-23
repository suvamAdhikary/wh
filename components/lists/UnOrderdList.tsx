import React from "react";
import Heading6 from "../headings/Heading6";

export interface unOrderdListProps {
  heading: string;
  description?: string;
  listData: any[];
  id?: string;
  isMultiList?: boolean;
}

const UnOrderdList = ({
  heading,
  listData,
  description,
  id,
  isMultiList,
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
        {isMultiList ? (
          <>
            {listData?.map(({ heading, list }) => (
              <section key={`${heading}`}>
                <Heading6 title={heading} />
                <ul className="common-unorderd-list">
                  {list?.map((el: string, index: number) => (
                    <li
                      className="common-unorderd-list__item"
                      key={`${el}-${index}`}
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </>
        ) : (
          <>
            <ul className="common-unorderd-list">
              {listData?.map(
                (el, i) =>
                  typeof el === "string" && (
                    <li
                      className="common-unorderd-list__item"
                      key={`${el}-${i}`}
                    >
                      {el}
                    </li>
                  )
              )}
            </ul>
          </>
        )}
      </article>
    </>
  );
};

export default UnOrderdList;
