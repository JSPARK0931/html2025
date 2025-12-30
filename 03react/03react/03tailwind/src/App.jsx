import React, { useEffect, useState } from "react";
import { useBoard } from "./context/BoardContext";

function App() {
  const { boardData, fetchData, totalCount, addBoard } = useBoard();

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchData(0, 2);
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // alert("test");
    const newBoard = { title, name, content };

    await addBoard(newBoard);
    setTitle("");
    setName("");
    setContent("");

    alert("데이터 전송완료");
  };

  //   const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   alert("test");
  // };

  return (
    <div>
      <h3>board / 총 게시물 {totalCount} 개</h3>
      {boardData &&
        boardData.map((item, i) => {
          return (
            <div key={i}>
              {item.id} / {item.title} / {item.content}
            </div>
          );
        })}
      <div>
        <h3>글작성하기</h3>
        <div>
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-3">
            <div className="flex gap-3">
              <label htmlFor="">title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className=" bg-gray-300"
              />
            </div>
            <div className="flex gap-3">
              <label htmlFor="">name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className=" bg-gray-300"
              />
            </div>
            <div className="flex gap-3">
              <label htmlFor="">content</label>
              <input
                type="text"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                className=" bg-gray-300"
              />
            </div>
            <button className="w-50 border rounded p-2 bg-blue-300 text-white text-sm hover:bg-blue-800">
              글작성완료
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
