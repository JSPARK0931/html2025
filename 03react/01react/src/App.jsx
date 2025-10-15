import React from "react";
import "./App.css";

function App() {
  const viewText = "안녕하세요";
  const city = ["서울", "부산", "대구", "광주"];
  return (
    <>
      <div className="container bg-primary text-white">{viewText}</div>
      <h3>{viewText}</h3>
      <img src="./vita.svg" alt="" />
      <div className="row">
        {city.map((item, index) => {
          return (
            <>
              <div className="col">{item}</div>
            </>
          );
        })}

        {city.map((item, index) => {
          console.log("out===> ", item, index);
          return (
            <div className="col" key={index}>
              {item}
            </div>
          );
        })}

        {city.map((item, index) => {
          return (
            <>
              <div className="col">{item}</div>
            </>
          );
        })}

        {/* {city.map(()=>{return(<div></div>)})} */}
        {/* {city.map(item)=>{
          return (
            <div className ="col">{item}</div>
          )
        }} */}
        {/* <div className="col">1</div>
        <div className="col">2</div>
        <div className="col">3</div>
        <div className="col">4</div> */}
      </div>
    </>
  );
}

export default App;
