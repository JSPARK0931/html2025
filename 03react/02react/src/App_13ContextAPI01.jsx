import React, { createContext, useState, useContext } from "react";

const UseContext = createContext();
// const LoginContext = createContext();

function App() {
  //const view = "안녕하세요";

  const [view, setView] = useState("안녕하세요");
  return (
    <div style={{ border: "2px solid #000" }} className="p-3">
      <h3>Context API</h3>
      {/* <LoginContext.Provider> */}
      {/* <UseContext.Provider value={{ view: view, setView: setView }}> */}
      <UseContext.Provider value={{ view, setView }}>
        <ChildComp />
      </UseContext.Provider>

      {/* </LoginContext.Provider> */}
    </div>
  );
}

function ChildComp() {
  return (
    <div style={{ border: "2px solid #3906f1ff " }} className="p-3">
      Child
      {/* <p>{view}</p> */}
      <ChildOneComp />
      {/* <button
        onClick={() => {
          setView("만나서반갑습니다.");
        }}
      >
        클릭
      </button> */}
    </div>
  );
}
function ChildOneComp() {
  // const view = UseContext(useContext);
  // const { view, setView } = UseContext(useContext); //{view:view setView:setView}
  //const stateView = UseContext(useContext);
  const view = useContext(UseContext).view;
  const setView = useContext(UseContext).setView;

  return (
    <div style={{ border: "2px solid #fc07dbff" }} className="p-3">
      <h3>Child one</h3>
      <p>{view}</p>

      <button
        onClick={() => {
          setView("홍길동님 반갑습니다. ");
        }}
      >
        변경
      </button>
    </div>
  );
}

export default App;
