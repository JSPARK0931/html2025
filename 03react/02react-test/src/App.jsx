import React from "react";

const data = [
  {
    title: "안녕하세요1",
    content:
      "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit dignissimos culpa natus laborum ad ipsa nostrum ex minima optio!",
    name: "이순신",
    date: "2025-10-20",
  },
  {
    title: "안녕하세요2",
    content:
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit dignissimos culpa natus laborum ad ipsa nostrum ex minima optio!",
    name: "홍길동",
    date: "2025-10-18",
  },
  {
    title: "안녕하세요3",
    content:
      "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit dignissimos culpa natus laborum ad ipsa nostrum ex minima optio!",
    name: "김철수",
    date: "2025-10-16",
  },
  {
    title: "안녕하세요4",
    content:
      "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit dignissimos culpa natus laborum ad ipsa nostrum ex minima optio!",
    name: "홍길동",
    date: "2025-10-15",
  },
];

function App() {
  // 1. data 만들거나 정보 파악 ([{},{},{}])
  // 2. 게시판리스트(array.map())
  // 3. click event
  // 4. useState(0)를 작성
  // 5. modal디자인(컴포넌트생성)
  // 6. useState(false) 작성
  // 7. props에 대한 설계 (props, event)
  // 8. 오류해결

  return (
    <div>
      <h3>text list</h3>
      <ul>
        {data.map((item, i) => {
          return (
            <li>
              {item.title} / {item.name} / {item.date}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
