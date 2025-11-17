import axios from "axios";
import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("이미지파일업로드");
  const [text, setText] = useState("");
  const [preview, setPreview] = useState("");

  const fileChangeHandler = (e) => {
    console.log(e.target.files[0]);

    const imageFile = e.target.files[0];
    //미리보기
    console.log(URL.createObjectURL(imageFile));
    setFileName(imageFile.name);
    setFile(imageFile);
    setPreview(URL.createObjectURL(imageFile));
  };

  const submitHandler = (e) => {
    e.preventDefault(); // 이동안함
    // alert("전송");
    // 이미지,글자 함께 보낼때 FormData() 사용
    const formData = new FormData();
    formData.append("image", file);
    formData.append("test", text);

    console.log(formData);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    // axios.post("경로", formData)
  };

  return (
    <div>
      <h3>파일업로드</h3>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">{fileName}</label>
          <br />
          <input type="file" id="file" onChange={fileChangeHandler} multiple />
        </div>
        <div>
          <label htmlFor="textinput">name</label>
          <input
            type="text"
            id="textinput"
            onChange={(e) => {
              setText(e.targetValue);
            }}
          />
        </div>
        <button type="submit">전송</button>
        {preview && <img src={preview} width={200}></img>}
      </form>
    </div>
  );
}

export default App;
