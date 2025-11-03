import React, { createContext, useContext, useState } from "react";

const UseContext = createContext();
// const LoginContext = createContext();

function App() {
  // const view = '안녕하세요';

  const [view, setView] = useState("안녕하세요");

  return (
    <div style={{ border: "1px solid #000" }} className="p-3">
      <h3>Context Api</h3>

      {/* <UseContext.Provider value={{ view: view, setView: setView }}> */}
      <UseContext.Provider value={{ view, setView }}>
        <ChildComp />
      </UseContext.Provider>
    </div>
  );
}

function ChildComp() {
  return (
    <div style={{ border: "1px solid #000" }} className="p-3">
      <h3>child</h3>
      {/* <p>{view}</p> */}
      <ChildOneComp />

      {/* <button
        onClick={() => {
          setView('만나서 반갑습니다.');
        }}
      >
        클릭
      </button> */}
    </div>
  );
}

function ChildOneComp() {
  // const view = useContext(UseContext);
  // *** const { view, setView } = useContext(UseContext); //{ view: view, setView: setView }
  // const stateView = useContext(UseContext); // 사용시 stateView.view stateView.setView
  const view = useContext(UseContext).view;
  const setView = useContext(UseContext).setView;

  return (
    <div style={{ border: "1px solid #000" }} className="p-3">
      <h3>child one</h3>
      <p>{view}</p>

      <button
        onClick={() => {
          setView("홍길동님 반갑습니다.");
        }}
      >
        변경
      </button>
    </div>
  );
}

export default App;
