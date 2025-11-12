import React from "react";
import ParentComp from "./components/context1/ParentComp";
import { PostProvider } from "./Context/PostContext";

function App() {
  return (
    <PostProvider>
      <div>
        <h3>Context API</h3>
        <ParentComp />
      </div>
    </PostProvider>
  );
}

export default App;
