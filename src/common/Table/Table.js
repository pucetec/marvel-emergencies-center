import React from "react";

const Table = ({ headers, bodyRows }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {typeof row === "string" ? <td>{row}</td> : row}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;