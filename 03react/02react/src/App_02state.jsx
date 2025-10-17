import React, { useState } from "react";
import Button from "./components/state/Button";

function App() {
  const [count, setCount] = useState(1);
  const [view, setView] = useState(false);
  // const [allCity] = useState([
  //   { city: "서울", cont: "test" },
  //   { city: "부산", cont: "test" },
  // ]);
  // console.log(count[0]);
  // console.log(allCity[0].city);
  // console.log(allCity[1]["city"]);
  function han() {
    setCount(count + 1);
  }

  const han1 = function () {
    setCount(count + 1);
  };

  const han2 = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h3>state</h3>
        <button onClick={han2}>{count}</button>
        {/* <button onClick=>{count}</button> */}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
        <div onClick={han1}>
          <Button title="글쓰기"></Button>
        </div>

        <Button title="글수정" color="red"></Button>
        <Button title="글리스트" color="blue"></Button>
      </div>
    </>
  );
}

export default App;
