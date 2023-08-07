function myFuntion() {
    let counter = 0;
    function mycloser(){
        counter++;
        console.log(counter);
    }
    return mycloser;
}

const mycloser = myFuntion();
mycloser();
mycloser();
mycloser();
mycloser();