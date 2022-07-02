import React from "react";

export interface unOrderdListProps {
  heading: string;
  description?: string;
  listData: string[];
}

const UnOrderdList = ({
  heading,
  listData,
  description,
}: unOrderdListProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 py-2 px-2 pl-6 border border-solid border-sky-400">
        {heading && <h4>{heading} :-</h4>}
        <p>{description}</p>
        <ul>
          {listData?.map((el) => (
            <li className="list-disc" key={el}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UnOrderdList;
