import React from "react";

type Props = {};

export const code = `
import React from "react";

interface Column {
  head: string;
  element?: React.ReactNode;
  width?: string;
}

interface StyleProp {
  position: number;
  style: string;
}

type TableProp = {
  data: Record<string, React.ReactNode>[];
  columns: (string | Column)[];
  stickyColumns?: string[];
  styleRows?: StyleProp[];
};

export const Table: React.FC<TableProp> = ({
  data,
  columns = [],
  stickyColumns = [],
  styleRows = [],
}: TableProp) => {
  const headers = columns.length //Taking First Row if Column not Provided
    ? columns.map((col) => (typeof col === "string" ? col : col.head))
    : data && data.length
      ? Object.keys(data[0])
      : [];

  if (columns.length) {
    // Check if all columns are present in the data
    data.forEach((row, index) => {
      const rowKeys = Object.keys(row);
      const InvalidKeys = rowKeys.filter((data) => !headers.includes(data));
      if (InvalidKeys.length > 0) {
        throw new Error(
           Data Not Found at $ {index} and got Invalid Keys $ {InvalidKeys.join(",")} \n
          Allowed Keys are $ {headers.join(",")} );
      }
    });
  }

  if (!data && !columns) {
    return (
      <div className="text-center w-full">
        {" "}
        Data Not Found ! <br />
        Please Provide the Data
      </div>
    );
  }

  const formatCellValue = (cell: any) => {
    if (React.isValidElement(cell)) return cell;
    if (cell === undefined || cell === null) return "-";
    if (typeof cell === "boolean") return cell.toString();
    if (typeof cell == "object") return JSON.stringify(cell);
    return cell;
  };

  const rows = data.map((row) => {
    return headers.map((col) => {
      return row[col];
    });
  });

  return (
    <table className="w-full">
      <thead>
        <tr className="sticky top-0 uppercase">
          {headers.map((column, index) => (
            <th
              key={index}
              className="box-content border-[2px] p-2 border-blue-300  "
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="overflow-y-scroll">
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((column, index) => (
              <td
                key={index}
                className="border-[2px] p-2 border-blue-300 bg-gradient-to-tr to-transparent"
              >
                {formatCellValue(row[column])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

`;
