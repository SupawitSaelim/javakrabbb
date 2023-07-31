//Values Type
function increment (num) {
    num++
    return num
}

let original = 1
let result = increment(original)
console.log(original,result);


//Reference Type
function increment2 (obj) {
    obj.num++
    return obj
}
let originalObj = {
    num: 1
}
let newObj = increment2(originalObj)
console.log(originalObj)
console.log(newObj)