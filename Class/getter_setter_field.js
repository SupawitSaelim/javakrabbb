class MyClass {
    #histories = Array();
    /**
     * @param {number} data
     */
    set setHistory(data) {
        this.#histories.push(data);
    }
    get getHistory() {
        return this.#histories;
    }
}

const history = new MyClass();
history.setHistory = 55;
history.setHistory = 23;
history.setHistory = 80;
const result = history.getHistory;
console.log(result)