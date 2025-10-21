import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  //api 데이터 가지고 오기
  //npm install axios, npm i axios
  //useEfeect에 axios.get('url') 사용 async..await
  //api 경로 "https://jsonplaceholder.typicode.com/posts")

  // 1. data 만들거나 정보 파악 ([{},{},{}])
  // 2. 게시판리스트(array.map())
  // 3. click event
  // 4. useState(0)를 작성
  // 5. modal디자인(컴포넌트생성)
  // 6. useState(false) 작성
  // 7. props에 대한 설계 (props, event)
  // 8. 오류해결

  const [postData, setPostData] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const modalViewFn = () => {
    setIsModal(true);
  };
  const modalCloseFn = () => {
    setIsModal(false);
  };

  function openModal(item) {
    console.log(item.id);
    return (
      <>
        <div>모달창</div>
      </>
    );
  }

  useEffect(() => {
    // async function fetchApi(){
    //   cont res = await fetch()
    // }

    // const fetch = async function(){
    //   const res = await fetch()
    // }
    console.log("실행되었습니다.");
    const fetchApi = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data);
      setPostData(res.data);
    };
    fetchApi();
  }, []);

  return (
    <div>
      App
      {postData &&
        postData.map((item, i) => {
          console.log(item, isModal);
          return (
            <>
              <div
                key={i}
                onClick={() => {
                  openModal(item);
                }}
              >
                {item.id}. {item.title}
              </div>
            </>
            // <>
            // <>
            //   <div
            //     onClick={() => {
            //       modalViewFn();
            //     }}
            //   >
            //     {item.id}. {item.title}
            //   </div>
            //   {isModal ? (
            //     <div style={{ border: "1px solid blue" }}>
            //       <p>모달창</p>
            //       <h3>{item.title}</h3>
            //       <p>{item.body}</p>
            //       <button
            //         onClick={() => {
            //           modalCloseFn();
            //         }}
            //       >
            //         닫기
            //       </button>
            //     </div>
            //   ) : null}
            // </>
          );
        })}
    </div>
  );
}

export default App;
