const book = {
    isAvailable: true,
    checkIn: function() {
        this.isAvailable = true;
        return this;
    }
};

console.log( book.checkIn() );

function checkIn() {
    return this;
}

console.log( checkIn() );