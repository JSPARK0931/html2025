import React from "react";
import { usePost } from "../../Context/PostContext";

function ChildComp() {
  //const text = usePost().view;
  // view = 안녕하세요. setView = setView()
  const { view, setView, viewHandler, vData } = usePost();
  return (
    <div>
      ChildComp / {view}
      <p>
        <button
          onClick={() => {
            setView("홍길동님. 안녕하세요.");
          }}
        >
          변경
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            viewHandler();
          }}
        >
          클릭
        </button>
      </p>
      {vData ? <p>데이터가있음.</p> : <p>데이터가없음.</p>}
      {vData &&
        vData.map((item, i) => {
          return (
            <div key={i}>
              <h4>
                {item.id} . {item.title}
              </h4>
            </div>
          );
        })}
    </div>
  );
}

export default ChildComp;
