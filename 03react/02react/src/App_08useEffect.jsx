import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [mydata, setMydata] = useState([]);
  console.log("작동되었습니다.");

  // useEffect(함수,[의존성배열]);
  useEffect(() => {
    console.log("useEffect");
  }, [count, isLogin]);
  // useEffect(()=>{},[])
  useEffect(() => {
    async function fetchData() {
      console.log("데이터가 들어옴");
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log(data);
      setMydata(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      App / {count}
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          클릭
        </button>
        <button
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          클릭
        </button>
        {/* mydata=[{userId:1, id:1, title:'', body:''},{},{}] */}
        {mydata && "자료가 있어요."}
        {mydata &&
          mydata.map((item, i) => {
            return (
              <div>
                <h3>
                  {" "}
                  {item.id} / {item.title}{" "}
                </h3>
              </div>
            );
          })}
        {/* {mydata.map((item, i) => {
          return <div key={item.id}>{item.title}</div>;
        })} */}
      </div>
    </div>
  );
}

export default App;
