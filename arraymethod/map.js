/*
* const callback = function (value, index, array) {
    // statement
    return updatedValue;
}
*/
const myarr = [97.2, 97.4, 97.5, 97.8];
//map is used to create a new array from an existing array by calling a callback function on each element of the array
const newarr = myarr.map((value) => {
    let celTemp = (value - 32) * 5/9;
    return parseFloat(celTemp.toFixed(3));
});

console.log(newarr);