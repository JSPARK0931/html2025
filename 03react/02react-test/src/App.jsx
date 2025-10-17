import React, { useState } from "react";
import Button from "./components/state/Button";

function App() {
  const [count, setCount] = useState(1);
  const [view, setView] = useState(false);

  function fn1() {
    setCount(count + 1);
  }
  const fn2 = function () {
    setCount(count + 1);
  };

  const fn3 = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h3>state</h3>
        <button onClick={fn1}>{count}</button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
        <br />
        <br />

        <div onClick={fn2}>
          <Button title="글쓰기"></Button>
        </div>

        <div onClick={fn3}>
          <Button title="글수정" color="red"></Button>
        </div>

        <div>
          <Button title="글리스트" color="blue"></Button>
        </div>
      </div>
    </>
  );
}

export default App;
