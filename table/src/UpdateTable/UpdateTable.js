import React, { useState, useEffect } from "react";
import styles from "./StaticTable.module.css";

function MyComponent() {
  console.log("HIIII");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log("res", response);
        return response.json();
      })

      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={`${styles.container} custom-container`}>
      <h2 className="custom-heading">Dynamic Table</h2>
      <table className={`${styles.table} custom-table`}>
        <thead>
          <tr className={`${styles.tableRow} custom-table-row`}>
            <th className={`${styles.tableHeader} custom-table-header`}>
              albumId
            </th>
            <th className={`${styles.tableHeader} custom-table-header`}>id</th>
            <th className={`${styles.tableHeader} custom-table-header`}>
              title
            </th>
            <th className={`${styles.tableHeader} custom-table-header`}>url</th>
            <th className={`${styles.tableHeader} custom-table-header`}>
              thumbnailUrl
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataObj) => (
            <tr
              key={dataObj.id}
              className={`${styles.tableRow} custom-table-row`}
            >
              <td className={`${styles.tableData} custom-table-data`}>
                {dataObj.albumId}
              </td>
              <td className={`${styles.tableData} custom-table-data`}>
                {dataObj.id}
              </td>
              <td className={`${styles.tableData} custom-table-data`}>
                {dataObj.title}
              </td>

              <td className={`${styles.tableData} custom-table-data`}>
                {dataObj.url}
              </td>

              <td className={`${styles.tableData} custom-table-data`}>
                {dataObj.thumbnailUrl}
                <img src={dataObj.thumbnailUrl} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyComponent;
