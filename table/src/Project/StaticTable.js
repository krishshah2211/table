import React from "react";
import styles from "./StaticTable.module.css";

const StaticTable = () => {
  const data = [
    { id: 1, name: "vcdc", age: 38, country: "India" },
    { id: 2, name: "bdeed", age: 22, country: "Canada" },
    { id: 3, name: "noxc", age: 42, country: "UK" },
    
  ];

  return (
    <div className={ styles.container}>
      <h2>Dynamic Table</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaticTable;
