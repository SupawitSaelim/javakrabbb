let furniture = ['Table', 'Chairs', 'Couch'];

let index = 0;
while (index < furniture.length) {
    let text = furniture[index].split('');
    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
    index++;
}
    