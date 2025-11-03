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

// const UserContext = createContext();
// function App(){
//   return (
//     <UserContext.Provider>
//        <ParentComp></ParentComp>
//     </UserContext.Provider>
//   )
// }

export default App;
