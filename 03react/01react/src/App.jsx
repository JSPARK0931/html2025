import React from "react";
import react from "./assets/react.svg";

function App() {
  const test = 10;
  const view = {
    color: "white",
    backgroundColor: "pink",
  };
  let isLogin = true;

  const city = ["서울", "부산", "대구", "광주"];
  return (
    // JSX문법 div는 하나만 허용함
    // class => className
    // 두개이상시 pragnant이용
    // <>
    //   <div className=''>
    //     <h3>TEST</h3>
    //     <p>{test}</p>
    //     <div className="container"></div>
    //   </div>
    // </>
    <>
      <div className="container bg-primary" style={view}>
        1111 <br />
        <img src={react} alt="" />
        {isLogin ? <p>로그인완료</p> : <p>로그인하세요</p>}
        {test == 10 ? <p>로그인완료</p> : <p>로그인하세요</p>}
      </div>
      {city.map((item, index) => {
        return (
          <>
            <div key={index}>
              {item} : {index}
            </div>
          </>
        );
      })}
    </>
  );
}

export default App;
