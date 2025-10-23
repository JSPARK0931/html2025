import React from "react";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const isValid = email.includes("@"); //true, false
  return (
    <div>
      <h3> 유효성검사 includes </h3>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <p>{email}</p>
      <p style={{ color: isValid ? "green" : "red" }}>
        {isValid ? "올바른 이메일입니다." : "올바른이메일이 아닙니다."}
        {/* {!isValid ? "올바른이메일이 아닙니다." : ""} */}
      </p>
    </div>
  );
}

export default App;
