const MaxHigh = (str) => {
    let num = str;
    let mystr = num.toString();
    let myarr = mystr.split("");
    const max = myarr.reduce((prev,curr) => {
        return Math.max(prev, curr)
    });
    return max
}

str = 379
str2 = 2
str3 = 377401

console.log(MaxHigh(str)) // Output: 9
console.log(MaxHigh(str2)) // Output: 2
console.log(MaxHigh(str3)) // Output: 7
