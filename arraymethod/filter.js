/* filter method
const callback = function (value, index, array) {
    // statement
    return boolean;
}
*/

const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newarr = myarr.filter((value) => {
    return value % 2 === 0;
});

console.log(newarr);

//between filter and map, which one is better to use?
//filter is better to use when you want to filter out some elements from an array
//map is better to use when you want to create a new array from an existing array