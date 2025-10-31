import axios from "axios";
import React, { useEffect, useState } from "react";

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
  useEffect(() => {
    console.log("실행되었습니다.");
    const fetchAPI = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res);
      console.log(res.data);
      setPostData(res.data);
    };
    fetchAPI();
  }, []);
  return (
    <div>
      APP
      {postData &&
        postData.map((item, i) => {
          return (
            <div key={i}>
              {item.id}. {item.title}
            </div>
          );
        })}
    </div>
  );
}

export default App;
