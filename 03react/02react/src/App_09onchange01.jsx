import React from "react";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "홍길동",
    email: "test@test.com",
    id: "",
    pwd: "",
    agredd: false,
  });
  const eventHandler = (e) => {
    console.log("============================");
    console.log(e.target);
    console.log("============================");
    const { name, value, type, checked } = e.target;
    console.log(name, value);
    console.log("----------------------------");
    setForm({ ...form, [name]: type == "checkbox" ? checked : value });

    // ...form은 중괄호를 벗기므로, 중괄호를 다시 넣어준다
    // setForm({ ...form, [e.target.name]: e.traget.type == "checkbox" ? e.target.checked : e.target.value });
    // setForm({ ...form, [e.target.name]: e.target.value });

    //setForm({ name: "홍길동", email: "test@test.com", ["name"]: e.target.value})
  };

  // const arr =['부산', '서울']
  // arr[0]

  // const han = {name:"test", content:"test1"}
  // han.name
  // han.["name"]

  return (
    <div>
      <h3>회원가입</h3>
      <p>
        {form.name} / {form.email} /{form.id} /{form.pwd}/
        {form.agree && <span>체그</span>}
      </p>
      <input
        type="text"
        name="name"
        onChange={eventHandler}
        placeholer="이름"
      />
      <br />
      <input
        type="text"
        name="email"
        onChange={eventHandler}
        placeholer="email"
      />
      <br />
      <input type="text" name="id" onChange={eventHandler} placeholer="id" />
      <br />
      <input
        type="text"
        name="pwd"
        onChange={eventHandler}
        placeholer="패스워드"
      />
      <br />
      회원가입문서를 확인
      <input
        type="checkbox"
        name="agree"
        onChange={eventHandler}
        placeholer="이름"
      />
      <br />
    </div>
  );
}

export default App;
