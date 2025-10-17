import React from "react";

function Button(props) {
  return (
    <div
      style={{
        width: "100px",
        background: props.color,
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
        color: "white",
      }}
    >
      {props.title} {props.color}
    </div>
  );
}

export default Button;
