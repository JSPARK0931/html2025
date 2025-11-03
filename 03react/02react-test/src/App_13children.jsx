import React from "react";

function App() {
  return (
    <div>
      <h3>Parent</h3>
      <Child> 나는 Child입니다.1</Child>
      <ButtonComp> 삭제</ButtonComp>
      <ButtonComp color="red"> 리스트</ButtonComp>
    </div>
  );
}

function Child({ children }) {
  // console.log({ children });
  return (
    <div>
      <h3>Child</h3>
      <p>{children}</p>
    </div>
  );
}

function ButtonComp(props) {
  console.log(props);
  return <button>{props.children}</button>;
}

export default App;
