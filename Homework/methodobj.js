const obj1 = {
    greeting: function(name){
        console.log(`Hello ${name}`);
    },
    goodbye: function(name){
        console.log(`Goodbye ${name}`);
    }
};

obj1.greeting('John');
obj1.goodbye('John');

//no property. You can call function without property name

console.log('No property');
const obj2 = {
    greeting(name){
        console.log(`Hello ${name}`);
    },
    goodbye(name){
        console.log(`Goodbye ${name}`);
    }
};
 
obj2.greeting('Sarah');
obj2.goodbye('Sarah');