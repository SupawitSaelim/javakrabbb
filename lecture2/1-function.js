function printHello(name) {
    console.log("Hello " + name + "!");
    return name + ' hello!';
}

console.log(printHello.name); // method to get function name

let result = printHello('Supawit !');
console.log(result);