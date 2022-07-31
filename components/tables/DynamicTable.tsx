import React from "react";
import { twoColTableProps } from "./TwoColTable";

const DynamicTable = ({
  heading,
  description,
  cols,
  tableData,
  id,
}: twoColTableProps) => {
  return (
    <>
      <article id={id} className="two-col-table-wrapper">
        {heading && <h5>{heading} :-</h5>}
        {description?.split("\n").map((line) => (
          <p className="list-description" key={line}>
            {line}
          </p>
        ))}
        <table className="two-col-table">
          <thead className="two-col-table__head">
            <tr>
              {cols.map((cell) => (
                <th className="dynamic-table__head--headings" key={cell}>
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={`${row[cols[0]]}-${row[cols[1]]}`}>
                {cols.map((cell) => (
                  <td className="dynamic-table__cells" key={row[cell]}>
                    {row[cell]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
};

export default DynamicTable;
