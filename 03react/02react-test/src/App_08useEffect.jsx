import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [mydata, setMydata] = useState([]);

  //useEffect(함수, [의존성배열]);

  useEffect(() => {
    console.log("useEffect");
  }, [count, isLogin]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("데이터 GET");
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      // const { data } = await fetch(
      //   "https://jsonplaceholder.typicode.com/posts"
      // );
      console.log(data);
      setMydata(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      App/{count}
      <div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count클릭
        </button>
        <button
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          login클릭
        </button>
        {mydata && "자료있음"}
        {mydata &&
          mydata.map((item, i) => {
            return (
              <div>
                <h3>
                  {item.id} / {item.title}
                </h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
