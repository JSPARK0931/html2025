import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <h4>로그인테스트 </h4>
      {/* {isLoggedIn && (
        <Greeting isLoggedIn={isLoggedIn} name={"홍길동"}></Greeting>
      )} */}
      {isLoggedIn ? (
        <Greeting isLoggedIn={isLoggedIn} name={"홍길동"} />
      ) : (
        <Greeting isLoggedIn={isLoggedIn} name={"홍길동"} />
      )}
      <button onClick={loginHandler}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
}

//내부 component 조건부 rendering
function Greeting({ isLoggedIn, name }) {
  if (isLoggedIn) {
    return <div>로그인 되었습니다. {name}님 환영합니다. </div>;
  }
  return <div> 로그인이 필요합니다. </div>;
}
export default App;
