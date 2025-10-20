import React, { useState } from "react";
import "./tab.css";

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
      Tab Menu ({tab})
      <div>
        <ul className="tab">
          <li
            className={`han ${tab == 0 ? "active" : ""}`}
            // className={tab == 0 ? 'active' : ''}
            onClick={() => {
              tabNum(0);
            }}
          >
            tab1
          </li>
          <li
            className={tab == 1 ? "active" : ""}
            onClick={() => {
              tabNum(1);
            }}
          >
            tab2
          </li>
          <li
            className={tab == 2 ? "active" : ""}
            onClick={() => {
              tabNum(2);
            }}
          >
            tab3
          </li>
        </ul>
        <div className="content">
          <h4>{data[tab].title}</h4>
          <p>{data[tab].content}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
