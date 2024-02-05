import React from "react";
import styles from "./StaticTable.module.css";

const DynamicTable = () => {
  const data = [
    { id: 1, name: "vcdc", age: 38, country: "India" },
    { id: 2, name: "bdeed", age: 22, country: "Canada" },
    { id: 3, name: "noxc", age: 42, country: "UK" },
  ];

  return (
    <div className={`${styles.container} custom-container`}>
      <h2 className="custom-heading">Dynamic Table</h2>
      <table className={`${styles.table} custom-table`}>
        <thead>
          <tr className={`${styles.tableRow} custom-table-row`}>
            <th className={`${styles.tableHeader} custom-table-header`}>ID</th>
            <th className={`${styles.tableHeader} custom-table-header`}>Name</th>
            <th className={`${styles.tableHeader} custom-table-header`}>Age</th>
            <th className={`${styles.tableHeader} custom-table-header`}>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={`${styles.tableRow} custom-table-row`}>
              <td className={`${styles.tableData} custom-table-data`}>{row.id}</td>
              <td className={`${styles.tableData} custom-table-data`}>{row.name}</td>
              <td className={`${styles.tableData} custom-table-data`}>{row.age}</td>
              <td className={`${styles.tableData} custom-table-data`}>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default DynamicTable;
