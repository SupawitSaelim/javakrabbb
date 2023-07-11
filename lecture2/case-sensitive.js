const status = 'error';

function wow(){
    if (status.toUpperCase() === 'ERROR') {
        console.log('Something went wrong!');
    }else {
        console.log('Looks great!!');
    }
}