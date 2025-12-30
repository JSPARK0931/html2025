import React from "react";
import testStore from "../store/testStore";

function HomeComp() {
  //   const name = testStore((state) => {
  //     return state.name;
  //   });
  //   const name = testStore((state) => state.name);
  const { name, count, inc } = testStore();

  return (
    <div>
      <h3>home</h3>
      이름 : {name} / {count}
      <br />
      <button onClick={inc}>one up</button>
    </div>
  );
}

export default HomeComp;
