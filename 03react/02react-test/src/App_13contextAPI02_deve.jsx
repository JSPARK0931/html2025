import React from "react";
import { UserProvider } from "../../02react/src/Context/UserContext";
import ParentComp from "./components/context/ParentComp";

function App() {
  return (
    <UserProvider>
      <ParentComp></ParentComp>
    </UserProvider>
  );
}

export default App;
