const myObj = {
    goNormal() {
        setTimeout(function () {
            console.log('Normal function: ', this)
        }, 1000);
    },
    goArrow() {
        setTimeout(() => {
            console.log('Arrow function: ', this)
        }, 2000);
    }
}

myObj.goNormal();
myObj.goArrow();
