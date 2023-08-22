const MoveCap = (str) => {
    let change_to_str = str.toString();
    let myarr = change_to_str.split("");

    let arr_up = Array();
    const upper = myarr.find((value) => {
        if(value == value.toUpperCase()) {
            arr_up.push(value)
        };
    })
    const smallest = myarr.find((value) => {
        if (value == value.toLowerCase()) {
            arr_up.push(value)
        }
    })
    return arr_up.join('')
}



console.log(MoveCap('hApPy'))
console.log(MoveCap('moveMENT'))
console.log(MoveCap('shOrtCAKE'))

