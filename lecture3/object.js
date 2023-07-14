// const book = {
//     title: '2001',
//     author: 'Supawit Saelim',
//     isAvailable: true,


//     checkIn: function () {
//         this.isAvailable = true;
//     },
//     checkOut: function () {
//         this.isAvailable = false;
//     }
// };

// console.log(book);

const book = new Object();
book.title = '2001';
book.author = 'Supawit Saelim';
book.isAvailable = true;

book.checkIn = function () {
    this.isAvailable = true;
};
book.checkOut = function () {
    this.isAvailable = false;
};

console.log(book.checkIn());
