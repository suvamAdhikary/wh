import React from "react";

export interface twoColTableProps {
  heading: string;
  description?: string;
  cols: string[];
  tableData: any[];
}

const TwoColTable = ({
  heading,
  description,
  cols,
  tableData,
}: twoColTableProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 py-2 px-2 pl-6 border border-solid border-sky-400">
        <h4>{heading} :-</h4>
        <p>{description}</p>
        <table className="border-2 border-solid border-gray-400 border-collapse">
          <thead className="bg-sky-400 text-white">
            <tr>
              {cols.map((cell) => (
                <th
                  className="border border-solid border-gray-300 px-2 py-1"
                  key={cell}
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-sky-100">
            {tableData.map((row) => (
              <tr key={`${row[cols[0]]}-${row[cols[1]]}`}>
                {cols.map((cell) => (
                  <td
                    className="border border-solid border-gray-300 px-2 py-1 text-center"
                    key={row[cell]}
                  >
                    {row[cell]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TwoColTable;
