import React from "react";
import Button from "./button";

function View01(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <Button title="보기" color="blue"></Button>
    </div>
  );
}

export default View01;
