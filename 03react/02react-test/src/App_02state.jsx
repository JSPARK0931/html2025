import React, { useState } from "react";
import Button from "./components/state/Button";

function App() {
  const [count, setCount] = useState(0);

  function fn0() {
    setCount(count + 1);
  }

  const fn1 = () => {
    setCount(count + 1);
  };

  const fn2 = function () {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h3>03 state</h3>
        <button onClick={fn0}>{count}</button>
        <button onClick={fn1}>{count}</button>
        <button onClick={fn2}>{count}</button>
        <div onClick={fn1}>
          <Button title="글쓰기"></Button>
        </div>
        <Button title="글수정" color="blue"></Button>
        <Button title="글삭제" color="red"></Button>
      </div>
    </>
  );
}

export default App;
