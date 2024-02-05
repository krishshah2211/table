import React ,{useState,useEffect}from "react";
import styles from "./StaticTable.module.css";


    function MyComponent() {
        console.log("HIIII")
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
        // const url = "https://jsonplaceholder.typicode.com/users";
        // const [data, setData] = useState([]);
      
        // const fetchInfo = () => {
        //   return fetch(url)
        //     .then((res) => res.json())
        //     .then((d) => setData(d))
        // }
      
      
        // useEffect(() => {
        //   fetchInfo();
        // }, []);
      
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
            <th className={`${styles.tableHeader} custom-table-header`}>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataObj) => (
            
            <tr key={dataObj.id} className={`${styles.tableRow} custom-table-row`}>
              <td className={`${styles.tableData} custom-table-data`}>{dataObj.id}</td>
              <td className={`${styles.tableData} custom-table-data`}>{dataObj.name}</td>
              <td className={`${styles.tableData} custom-table-data`}>{dataObj.age}</td>
              <td className={`${styles.tableData} custom-table-data`}>{dataObj.country}</td>
                 <td className={`${styles.tableData} custom-table-data`}>{dataObj.url}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
      {/* <p key={dataObj.id}></p> */}
    </div>
  );
  
};

export default MyComponent;
