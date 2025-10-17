import React from "react";

function Button({ title = "글작성", color = "skyblue", width = "100" }) {
  //   console.log(props);
  console.log(title, color, width);
  const btnStyle = {
    // width: `${width}px`,
    display: "inline-block",
    background: color,
    borderRadius: "20px",
    padding: "8px 30px",
    // textAlign: "center",
    color: "white",
    cursor: "pointer",
  };
  return (
    <>
      <div style={btnStyle}>{title}</div>
    </>
  );
}

export default Button;
