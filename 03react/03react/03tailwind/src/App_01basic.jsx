import React from "react";

function App() {
  return (
    <div>
      <h1>test</h1>
      {/* font */}
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm text-[rgb(100,30,200)]">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-extrabold">text-xl</div>
      <div className="text-2xl font-extrabold">text-2xl</div>
      {/* background */}
      <div className="bg-amber-300">test</div>
      <div className="w-20 h-20 bg-blue-300">box</div>
      <div className="w-[300px] h-[300px] bg-red-300">box</div>
      {/* padding */}
      <div className="bg-gray-400  py-5 flex lg:flex-wrap gap-5">
        <div className="bg-amber-300 w-1/2 sm:w-1/2 lg:w-full h-full mx-5 p-5">
          inner1
        </div>
        <div className="bg-amber-300 w-1/2 sm:w-1/2 lg:w-full h-full mx-5 p-5">
          inner2
        </div>
      </div>
      {/* boarder */}
      <div className="border-1 p-5 rounded text-xl mb-5">test</div>
      {/* flex   */}
      <div className="flex gap-4 flex-row items-center justify-center">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 border flex-1">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
      <div style={{ height: 300 }}></div>
    </div>
  );
}

export default App;
