import React from 'react';
import testStore from '../store/testStore';

function HomeComp() {
  //   const name = testStore((state) => {
  //     return state.name;
  //   });
  //   const name = testStore((state) => state.name);
  const { name, count, increase, decrease } = testStore();

  return (
    <div>
      <h3>home</h3>
      이름 : {name} / {count}
      <div>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </div>
    </div>
  );
}

export default HomeComp;
