import React, { createContext, useContext, useState } from "react";

const ViewContext = createContext();

function App() {
  //const view = "안녕하세요";

  const [view, setView] = useState("안녕하세요");

  return (
    <div style={{ border: "2px solid #000" }} className="p-3">
      <h3>Context API</h3>
      <p> {view}</p>
      <button
        onClick={() => {
          setView("안녕하세요.");
        }}
      >
        변경
      </button>
      <ViewContext.Provider value={{ view, setView }}>
        <ChildComp view={view} />
      </ViewContext.Provider>
    </div>
  );
}

function ChildComp({ view }) {
  const view1 = useContext(ViewContext).view;
  const setView1 = useContext(ViewContext).setView;

  console.log({ view });
  return (
    <div style={{ border: "2px solid #eb0909ff" }} className="p-3">
      <h3>Child</h3>

      <p>props_view : {view}</p>
      <p>view : {view1}</p>
      <button
        onClick={() => {
          setView1("만나서 반갑습니다.");
        }}
      >
        변경
      </button>
      <ChildOneComp view={view} />
    </div>
  );
}

function ChildOneComp({ view }) {
  const view2 = useContext(ViewContext).view;
  const setView2 = useContext(ViewContext).setView;
  return (
    <div style={{ border: "2px solid #0918f0ff" }} className="p-3">
      <h3>Child-One</h3>
      <p>props_view : {view}</p>
      <p>context view : {view2}</p>
      <button
        onClick={() => {
          setView2("홍길동님 반갑습니다.");
        }}
      >
        변경
      </button>
    </div>

    // <button onClick={()=>{
    //   setView("홍길동님 반갑습니다.")
    // }} >
    //   변경
    // </button>
  );
}

export default App;
