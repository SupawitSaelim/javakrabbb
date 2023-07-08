function reversString(value) {
    let reversedValue = "";

    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    });

    return reversedValue;
}

console.log(reversString("Hello World!"));