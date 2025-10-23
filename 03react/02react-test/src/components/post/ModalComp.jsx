import React from "react";

function ModalComp({ postItem, modalClose }) {
  return (
    <div>
      ModalComp
      <div>
        <h3>
          {postItem.id}. {postItem.title}
        </h3>
        <div onClick={modalClose}>X</div>
        <p>{postItem.body}</p>
        <button onClick={modalClose}>닫가</button>
      </div>
    </div>
  );
}

export default ModalComp;
