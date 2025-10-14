console.log("완료");

const a = 10;
const b = 100;

// export default a;
const han = function () {
  console.log("HI~~");
};

export const han1 = () => {
  console.log("화살표");
};
//function
//export default han;
//value
//export default a;

//여러개
//export{a,b, han()};
export default han;
export { a, b };

//export const a = 10;
//export const b = 100;
