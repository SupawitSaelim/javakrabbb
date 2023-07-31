const obj = {
    data : [3, 2, 5, 7, 9, 1, 4, 6, 8],
    getmin(){
        return Math.min(...this.data);
    },
    getmax(){
        return Math.max(...this.data);
    },
    showInfo(){
        return `Min: ${this.getmin()} Max: ${this.getmax()}`;
    }
    
}

console.log(obj.showInfo());