// const equation = (valuse) => {
//     return valuse = eval(valuse);
// }

// console.log(equation('1+1+1'));
// console.log(equation('7*4-2'));
// console.log(equation('1+1+1+1+1'));



//method 2
const equation = (values) => {
    return Function(`"use strict"; return (${values});`)();
  };
  
  console.log(equation('1+1+1')); // Output: 3
  console.log(equation('7*4-2')); // Output: 26
  console.log(equation('1+1+1+1+1')); // Output: 5
  