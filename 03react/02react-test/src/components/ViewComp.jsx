import React from "react";
import Button from "./button";

function ViewComp(props) {
  const Data = props.cityData;
  return (
    <>
      <h3>Gallery</h3>
      <p>{Data[0]}</p>
      <div>ViewComp</div>
      <div style={{ display: "flex", gap: "10px" }}>
        {props.cityData.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                background: "skyblue",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <h2>{item}</h2>
              <Button title="테스트" color="pink" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ViewComp;
