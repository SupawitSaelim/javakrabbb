const start = Date.now();

console.log('Staarting timer...');

setTimeout( () => {
    const millis = Date.now() - start;
    console.log(`secons elapsed = ${Math.floor(millis/1000)}`);
},2000);