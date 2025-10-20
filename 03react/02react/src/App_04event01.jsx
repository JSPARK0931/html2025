import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const clickFn = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ padding: "10px" }}>
      <h3>할아버지 / {count}</h3>
      <Father count={count} countClikck={clickFn} />
      {/* <button onClick={clickFn}>클릭</button> */}
    </div>
  );
}

function Father({ count, countClikck }) {
  return (
    <div style={{ border: "5px solid #f00", padding: "10px" }}>
      <h4>아버지 / {count}</h4>
      <Child count={count} countClikck={countClikck} />
    </div>
  );
  c;
}

function Child({ count, countClikck }) {
  return (
    <div style={{ border: "5px solid #00f", padding: "10px" }}>
      <h4>아들 / {count}</h4>
      <button onClick={countClikck}>클릭</button>
    </div>
  );
}

export default App;
