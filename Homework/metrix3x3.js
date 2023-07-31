const size = 3;
const matrix = Array();

for (let x = 0; x <size; x++){
    const row = [];
    for (let y = 0; y<size; y++){
        row.push(`${x},${y}`);
    }
    matrix.push(row);
}
