function removeDups (arr) {
    return arr.filter((item,index) => arr.indexOf(item) === index);
}

let arr = ["apple", "mango", "apple",
		"orange", "mango", "mango"];

function removeDuplicates(arr) {
	let result = [...new Set(arr)]
    return result
}

console.log(removeDuplicates(arr));


console.log(removeDups([1, 0, 1, 0]))
console.log(removeDups(["The", "big", "cat"]))
console.log(removeDups(["John", "Taylor", "John"]))

