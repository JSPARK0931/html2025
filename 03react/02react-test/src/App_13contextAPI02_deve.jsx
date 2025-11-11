import React from "react";

import ParentComp from "./components/context/ParentComp";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <UserProvider>
      <ParentComp></ParentComp>
    </UserProvider>
  );
}

export default App;
