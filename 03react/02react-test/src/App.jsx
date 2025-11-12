import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("이미지파일업로드");
  const [text, setText] = useState("");

  const fileChangeHandler = (e) => {
    console.log(e.target.files[0]);
    const imageFile = e.target.files[0];
    console.log(imageFile);
    setFilename(imageFile.name);
    setFile(imageFile);
  };

  const submitHandler = (e) => {
    e.preventDefault(); // 이동안함
    // alert("전송");
    // 이밎, 글자 함께보낼때 FormData() 객체 사용
    const formData = new FormData();
    formData.append("image", file);
    formData.append("test", text);

    console.log(formData);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
  return (
    // <div>TEST</div>
    <div>
      <h3>파일업로드</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">{filename}</label>
          <br />
          <input type="file" id="file" onChange={fileChangeHandler} />
        </div>
        <div>
          <label htmlFor="textinput">name</label>
          <input
            type="text"
            id="text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default App;
