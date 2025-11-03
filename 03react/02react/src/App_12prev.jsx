import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function addHandler() {
    // setCount(count + 5);
    // setCount(count + 4);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      App
      <p>{count}</p>
      <button onClick={addHandler}>증가</button>
    </div>
  );
}

export default App;
