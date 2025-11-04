import React, { createContext, useState } from "react";

const ViewContext = createContext();
function App() {
  // const view = "안녕하세요";
  const [view, setView] = useState("안녕하세요");
  return (
    <div>
      <h3>Cntext API</h3>
      <p>{view}</p>
      <button
        onClick={() => {
          setView("안녕하세요.");
        }}
      >
        변경
      </button>
      ViewContext.Provier
      <ChildComp></ChildComp>
    </div>
  );
}

function ChildComp() {
  return (
    <div>
      <h3>Child</h3>
    </div>
  );
}
export default App;
