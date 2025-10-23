import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ModalComp from "./components/post/ModalComp";

function App() {
  // 프로젝트 생성 npm create vite@lastesd -> npm i -> code .
  // npm run dev
  // npm i axios / axios/get() "https://jsonplaceholder.typicode.com/posts"
  // useEffect hook 사용 -> json data get -> console.log (res.data)
  // useState 사용하여 stat관리, json data -> state에 저장
  // 저장 state 화면에 출력, 배열 map(()=>{})
  // 리스트 출력완료시 modal창  component 작업
  // modal open을 위한 state 생성
  // postItem state 생성
  // modal comp에 props 속성값 전달
  // modal comp 자료출력
  // modal open/close 함수제작

  const [postData, setPostData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [postItem, setPostItem] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(res.data);
        setPostData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
  }, []);

  function postHandler(item) {
    setPostItem(item);
    setModalOpen(true);
  }
  function modalClose() {
    setPostItem(null);
    setModalOpen(false);
  }
  return (
    <div>
      <h3>post</h3>
      {modalOpen ? (
        <ModalComp postItem={postItem} modalClose={modalClose} />
      ) : null}
      {/* {postItem?.id} */}
      <ul>
        {/* {postData && postData.map()} */}
        {/* {postData > 0
          ? postData.map((item,i) => {})
          : !postData && <p>데이터가 없습니다.</p>} */}
        {postData.length > 0
          ? postData.map((item, i) => {
              console.log(item);
              return (
                <li
                  key={i}
                  onClick={() => {
                    postHandler(item); //function 전달
                  }}
                >
                  {item.id}. {item.title}
                </li>
              );
            })
          : !postData && <p>데이터가 없습니다.</p>}
      </ul>
    </div>
  );
}

export default App;
