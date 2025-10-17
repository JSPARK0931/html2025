import React from "react";
import Button from "./components/button";
import ViewComp from "./components/ViewComp";
import View01 from "./components/View01";

function App() {
  const city1 = ["서울", "대전", "인천", "춘천"];
  const city2 = ["서울", "대전", "대구", "춘천"];
  return (
    <>
      <Button title="테스트" color="red"></Button>
      <Button title="테스트" color="green"></Button>
      <Button title="테스트" color="blue"></Button>
      <ViewComp cityData={city1} />
      <ViewComp cityData={city2}></ViewComp>
      {city1.map((item, index) => {
        return (
          <>
            <div>
              <View01 title={item}></View01>
            </div>
          </>
        );
      })}

      <div>App</div>
    </>
  );
}

export default App;
