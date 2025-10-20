import React from "react";

function ModalComp({ content, modalClose }) {
  const style = {
    wrap: {
      width: "300px",
      padding: "16px",
      background: "lightgray",
      borderRadius: "10px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
    },
    text: {
      background: "skyblue",
    },
    close: {
      paddig: "10px",
      cursor: "pointer",
    },
  };
  return (
    <div style={style.wrap}>
      <div style={style.header}>
        <h3>{content.title}</h3>
        <div onClick={modalClose} style={style.close}>
          X
        </div>
      </div>
      <p style={style.text}>{content.vContent}</p>
      <button onClick={modalClose}>닫기</button>
    </div>
  );
}

export default ModalComp;
