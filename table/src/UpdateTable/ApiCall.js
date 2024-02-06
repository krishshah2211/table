import React, { useState, useEffect } from "react";

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
}

export default MyComponent;