import React from "react";
import { useState } from "react";

function App() {
  // const isLoggedIn = true;
  const [isLoggedIn, setIsLoggedIN] = useState(true);
  const loginHandler = () => {
    setIsLoggedIN(!isLoggedIn);
  };
  return (
    <div>
      App
      {isLoggedIn && <Greeting isLoggedIn={isLoggedIn} name="홍길동" />}
      {/* <button
        onClick={() => {
          setIsLoggedIN(true);
        }}
      >
        로그인
      </button> */}
      <button onClick={loginHandler}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
}
//내부 component 조건부 rendering
function Greeting({ isLoggedIn, name }) {
  if (isLoggedIn) {
    return <h1>로그인되었습니다. {name}님 환영합니다.</h1>;
  }
  return <div>로그인이필요합니다.</div>;
}

export default App;
