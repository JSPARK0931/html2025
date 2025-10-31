import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function BoardComp() {
  //params   /board/1
  const { id } = useParams(); // http://localhost:5173/board/1  /board/:id
  const { name1, age1 } = useParams();

  //query params  /board?han=test&name=hong
  const [searchParams] = useSearchParams(); // http://localhost:5173/board?name=han&age=10
  const name = searchParams.get("name");
  const age = searchParams.get("age");

  return (
    <div>
      BoardComp <br />
      params: {id} / {name1} / {age1} <br />
      searchParams : {name} / {age}
    </div>
  );
}

export default BoardComp;
