import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [boardData, setBoardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:8080/api/board");
      console.log(data);
      setBoardData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {boardData.map((item, i) => {
        return (
          <div key={i}>
            {item.id} / {item.title} / {item.content}
          </div>
        );
      })}
    </div>
  );
}

export default App;
