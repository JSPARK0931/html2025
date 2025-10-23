import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const clickFn = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h3>Grand Father / {count}</h3>
      <Father count={count} onClick={clickFn} />
      {/* <button onClick={clickFn}>클릭</button> */}
    </div>
  );
}

function Father({ count, countClick }) {
  return (
    <div style={{ border: "1px solid red", paddig: "10px" }}>
      <h4>Father / {count}</h4>
      <Child count={count} onClick={countClick}></Child>
    </div>
  );
}

function Child({ count, countClick }) {
  return (
    <div style={{ border: "1px solid blue", padding: "10px" }}>
      <h4>Child / {count}</h4>
      <button onClick={countClick}>클릭</button>
    </div>
  );
}

export default App;
