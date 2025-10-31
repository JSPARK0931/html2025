import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewComp({ API }) {
  // const param = useParams()
  // console.log("param value =" + param);
  const { num } = useParams();
  console.log(num);
  const [posts, setPosts] = useState([]);
  //   const [loading, setloading] = useState(true);

  const postFetch = async () => {
    // setloading(true);
    try {
      const { data } = await axios.get(`${API}/posts/${num}`);
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      //   setloading(false);
    }
  };
  useEffect(() => {
    postFetch();
  }, []);
  return (
    <div>
      <h3>글보기</h3>
      {/* <div>{loading ? <p>로딩중입니다.</p> : <p>로딩완료.</p>}</div> */}

      <div>
        <h4>{posts.title}</h4>
        <hr />
        <p>{posts.body}</p>
        {/* {posts.map((item, i) => {
          return (
            <div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default ViewComp;
