import React from "react";

function ModalComp({ num, data, modalClose }) {
  return (
    <div>
      <div>
        <h3>{data[num].title}</h3>
        <div>
          {data[num].name} / {data[num].date}
        </div>
      </div>
      <p>{data[num].content}</p>
      <button onClick={modalClose}>닫기</button>
    </div>
  );
}

export default ModalComp;
