let values1 = ['Apple', 1, false];
let values2 = ['Fries', 9, true,'Mars'];
let values3 = ['Mars', 9, 'Apple'];

//compare the 3 arrays and find any common elements
for (let i = 0; i < values1.length; i++) { //check values1 and values2
    for (let j = 0; j < values2.length; j++) {
        if (values1[i] === values2[j]) {
            console.log("Common element: " + values1[i] + " in array 1 and 2");
        }
    }
}
for (let i = 0; i < values2.length; i++) {  //check values2 and values3
    for (let j = 0; j < values3.length; j++) {
        if (values2[i] === values3[j]) {
            console.log("Common element: " + values2[i] + " in array 2 and 3");
        }
    }
}
for (let i = 0; i < values1.length; i++) { //check values1 and values3
    for (let j = 0; j < values3.length; j++) {
        if (values1[i] === values3[j]) {
            console.log("Common element: " + values1[i] + " in array 1 and 3");
        }
    }
}

