import React, { useState } from "react";

function App() {
  const data = [
    {
      title: "안녕하세요1",
      content:
        "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit dignissimos culpa natus laborum ad ipsa nostrum ex minima optio!",
    },
    {
      title: "안녕하세요2",
      content:
        "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit dignissimos culpa natus laborum ad ipsa nostrum ex minima optio!",
    },
    {
      title: "안녕하세요3",
      content:
        "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit dignissimos culpa natus laborum ad ipsa nostrum ex minima optio!",
    },
  ];

  const [tab, setTab] = useState(0);
  const tabNum = (index) => {
    setTab(index);
  };

  return (
    <div>
      Tab Menu {tab}
      <div>
        <ul className="tab">
          <li
            onClick={() => {
              tabNum(0);
            }}
          >
            tab1
          </li>
          <li
            onClick={() => {
              tabNum(1);
            }}
          >
            tab2
          </li>
          <li
            onClick={() => {
              tabNum(2);
            }}
          >
            tab3
          </li>
          <li
            onClick={() => {
              tabNum(3);
            }}
          >
            tab4
          </li>
        </ul>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default App;
