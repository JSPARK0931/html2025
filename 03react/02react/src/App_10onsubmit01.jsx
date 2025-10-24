import React from "react";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    userId: "",
    userEmail: "",
  });
  const eventHandler = (e) => {
    // alert("OK");
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = (e) => {
    // alert("회원가입완료");
    e.preventDefault();

    if (!formData.name.trim()) {
      alert("이름을 입력하세요.");
    }

    if (!formData.userId.trim()) {
      alert("아이디를 입력하세요.");
    } else if (formData.userId.length < 4) {
      alert("아이디는 4자 이상이어야 합니다.");
    }

    if (!formData.userEmail.trim()) {
      alert("이메일을 입력하세요");
      // } else if (!formData.useremail.includes('@')) {
      //   alert('이메일 형식이 아닙니다.');

      // / … / → 정규식의 시작과 끝
      // ^ → 문자열의 시작
      // $ → 문자열의 끝
      // [...] → 문자 집합 (대괄호 안의 어떤 문자든 OK)
      // [^...] → 괄호 안의 문자들은 제외
      // (^가 대괄호 안에 있을 때는 “부정(not)”의 의미)
      // \s → 공백 문자 (space, tab, 줄바꿈 등)
      // @, . → 각각 “@”, “.”라는 문자 그대로
      // + → 앞의 패턴이 1개 이상 반복
      //  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    } else if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(formData.userEmail)) {
      alert("이메일 형식이 아닙니다.");
    }
  };
  return (
    <div>
      <div>
        <div className="container">
          <h3>회원가입</h3>
        </div>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <label
                htmlFor="name"
                className="form-label"
                style={{ width: "100px" }}
              >
                이름 {formData.name}
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="이름을 입력하세요."
                onChange={eventHandler}
              />
            </div>

            <div style={{ color: "red" }}>이름을 작성하세요</div>
          </div>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <label
                htmlFor="userId"
                className="form-label"
                style={{ width: "100px" }}
              >
                아이디
              </label>
              <input
                type="text"
                className="form-control"
                id="userId"
                name="userId"
                placeholder="아이디를 입력하세요."
                onChange={eventHandler}
              />
            </div>

            <div style={{ color: "red" }}>아이디를 입력하세요</div>
          </div>
          <div className="mb-3">
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <label
                htmlFor="userEmail"
                className="form-label"
                style={{ width: "100px" }}
              >
                이메일
              </label>
              <input
                type="text"
                className="form-control"
                id="userEmail"
                name="userEmail"
                placeholder="이메일을 입력하세요."
                onChange={eventHandler}
              />
              <div style={{ color: "red" }}>이메일을 입력하세요</div>
            </div>
          </div>

          <div className="text-end">
            <button className="btn btn-primary">회원가입완료</button>
          </div>
        </form>
      </div>
      {JSON.stringify(formData)}
    </div>
  );
}

export default App;
