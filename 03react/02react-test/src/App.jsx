import React, { useState } from "react";
import Button from "./components/state/Button";
import "./App.css";

function App() {
  const [isModal, setIsModal] = useState(false);
  // console.log(isModal);
  return (
    <>
      <div>
        <h3>모달창만들기</h3>
        {/* {isModal ? <p>창이열림</p> : <p>창이닫침</p>} */}
        {isModal ? (
          <div className="vModal">
            <div className="title">
              <h3>모달창</h3>
              <div
                onClick={() => {
                  setIsModal(false);
                }}
              >
                X
              </div>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corrupti, ex.
            </p>
            {/* Modal내부 닫기버튼 */}
            <div
              onClick={() => {
                setIsModal(false);
              }}
            >
              <Button title="창닫기" color="blue"></Button>
            </div>
          </div>
        ) : null}
      </div>
      <div className="titleBtn">
        <div
          onClick={() => {
            setIsModal(!isModal);
          }}
        >
          <Button title="창띄우기" color="red"></Button>
        </div>
        {/* <div
          onClick={() => {
            setIsModal(true);
          }}
        >
          <Button title="창띄우기" color="red"></Button>
        </div>
        <div
          onClick={() => {
            setIsModal(false);
          }}
        >
          <Button title="창닫기"></Button>
        </div> */}
      </div>
    </>
  );
}

export default App;
