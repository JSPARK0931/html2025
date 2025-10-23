import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const chCnt = () => {
    setCount(count + 1);
  };
  const viewText = "HELLO!!";
  function chCnt1() {
    setCount(count + 1);
  }
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>부모component</h3>
      <div>{count}</div>
      <Child view={viewText} vCount={count} onClick={chCnt}></Child>
      <NextChild view={viewText} vCount={count} onClick={chCnt1}></NextChild>
      <button onClick={chCnt}>클릭</button>
    </div>
  );

  function Child({ view, vCount, onClick }) {
    return (
      <>
        <div style={{ border: "1px solid red" }}>
          <h4>child</h4>
          <p>
            {view} / {vCount}
          </p>
          <button onClick={onClick}>클릭</button>
        </div>
      </>
    );
  }

  function NextChild({ view, vCount, onClick }) {
    return (
      <>
        <div style={{ border: "1px solid blue" }}>
          <h4>Next Child</h4>
          <p>
            {view} / {vCount}
          </p>
          <button onClick={onClick}>클릭</button>
        </div>
      </>
    );
  }
}

export default App;
