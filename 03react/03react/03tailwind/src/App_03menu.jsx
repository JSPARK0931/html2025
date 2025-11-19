import React from "react";

function App() {
  return (
    <>
      <div className="container bg-amber-300 mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold"> LOGO</h1>
        <ul className="items-center gap-2 hidden md:flex">
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
          <li>menu4</li>
        </ul>
        <div className="w-5 h-5 block md:hidden bg-gray-400"></div>
      </div>
    </>
  );
}

export default App;
