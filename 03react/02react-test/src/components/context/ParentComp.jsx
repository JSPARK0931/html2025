import React from "react";
import ChildComp from "./ChildComp";

function ParentComp() {
  return (
    <div>
      ParentComp
      <h3>Parent</h3>
      <ChildComp></ChildComp>
    </div>
  );
}

export default ParentComp;
