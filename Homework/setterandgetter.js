const myObj = {
    data: null,
    getData(){
        return this.data;
    },
    setData(newdata){
        this.data = newdata;
    }
}
myObj.setData(10);
let result = myObj.getData();
console.log(result); 