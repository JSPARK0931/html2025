import React from "react";
import { Link } from "react-router-dom";

function ListComp({ posts }) {
  if (!posts.length) {
    return <p>개시글이 없습니다.</p>;
  }

  return (
    <div>
      <h3>글리스트</h3>
      <div>
        {posts.map((item, i) => {
          return (
            <li key={i}>
              <Link to={`/board/view/${item.id}`} className="nav-link">
                {i + 1}. {item.title}
              </Link>
            </li>
          );
        })}
        {/* {posts.map(() => {})} */}
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/board/write" className="btn btn-primary">
          글쓰기
        </Link>
      </div>
    </div>
  );
}

export default ListComp;
