import React, { useState, useEffect } from 'react';
import styles from "./StaticTable.module.css";

const StaticTable = () => {
  const array= [
    { id: 1, name: "vcdc", age: 38, country: "India" },
    { id: 2, name: "bdeed", age: 22, country: "Canada" },
    { id: 3, name: "noxc", age: 42, country: "UK" },

    
  ];
  const [data, setData] = useState(null);

  useEffect(() => {
  
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

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
          {array.map((row) => (
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
