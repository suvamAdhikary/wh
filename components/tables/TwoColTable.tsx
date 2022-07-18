import React from "react";

export interface twoColTableProps {
  heading: string;
  description?: string;
  cols: string[];
  tableData: any[];
  id?: string;
}

const TwoColTable = ({
  heading,
  description,
  cols,
  tableData,
  id,
}: twoColTableProps) => {
  return (
    <>
      <article id={id} className="two-col-table-wrapper">
        <h5>{heading} :-</h5>
        <p>{description}</p>
        <table className="two-col-table">
          <thead className="two-col-table__head">
            <tr>
              {cols.map((cell) => (
                <th className="two-col-table__head--headings" key={cell}>
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={`${row[cols[0]]}-${row[cols[1]]}`}>
                {cols.map((cell) => (
                  <td className="two-col-table__cells" key={row[cell]}>
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

export default TwoColTable;
