import React from "react";
import { cn } from "@/lib/utils";

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
      ? Object.keys(!data[0])
      : [];

  if (columns.length) {
    // Check if all columns are present in the data
    data.forEach((row, index) => {
      const rowKeys = Object.keys(row);
      const InvalidKeys = rowKeys.filter((data) => !headers.includes(data));
      if (InvalidKeys.length > 0) {
        throw new Error(`
          \n Data Not Found at ${index} and got Invalid Keys ${InvalidKeys.join(",")} \n
          Allowed Keys are ${headers.join(",")} `);
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
    <table className="grid grid-cols-1 overflow-x-auto">
      <thead>
        <tr className="top-0 uppercase">
          {/* Map over the headers and render a th element for each one */}
          {headers.map((column, index) => {
            const isSticky = stickyColumns.includes(column);
            const leftSticky =
              isSticky && headers.indexOf(column) < headers.length / 2;
            const rightSticky =
              isSticky && headers.indexOf(column) > headers.length / 2;

            const rowStyle = styleRows.find((row) => index === row.position);
            return (
              <th
                key={index}
                className={`
                  box-content
                  border-[2px]
                  px-4
                  py-2
                  border-blue-300
                  ${leftSticky ? "sticky left-0 z-10 bg-blue-400" : ""}
                  ${rightSticky ? "sticky right-0 z-10 bg-blue-400" : ""}
                `}
              >
                {column}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="overflow-y-scroll">
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => {
              const isSticky = stickyColumns.includes(header);
              const leftSticky =
                isSticky && headers.indexOf(header) < headers.length / 2;
              const rightSticky =
                isSticky && headers.indexOf(header) > headers.length / 2;
              const rowStyle = styleRows.find(
                (row) => rowIndex === row.position
              );

              return (
                <td
                  key={colIndex}
                  className={cn(
                    "border-[2px] px-4 py-2 border-blue-300 bg-gradient-to-tr to-transparent text-center text-gray-200",
                    rightSticky && "sticky  bg-blue-400 right-0",
                    leftSticky && "sticky  bg-blue-400 left-0",
                    rowStyle && rowStyle.style
                  )}
                >
                  {formatCellValue(rowData[header])}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
