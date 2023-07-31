const myarr = [
    10,
    (message) => {
        console.log(message);
        return message;
    }
];

const [data, show_message] = myarr;
console.log(data);
console.log(show_message);
console.log(show_message('supawit'));
