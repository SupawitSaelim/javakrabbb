try{
    const data = 10;
    data++;
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}