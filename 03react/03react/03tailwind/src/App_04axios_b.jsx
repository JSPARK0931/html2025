import axios from "axios";
import React, { useEffect, useState } from "react";
import { getBoard } from "./api/boardApi";

function App() {
  const [boardData, setBoardData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBoard();
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
