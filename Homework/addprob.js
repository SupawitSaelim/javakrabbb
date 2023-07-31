const addProperty = (obj, prop, value ) => {
    if (prop in obj) {
        console.log('Property name is duplicated');
        return; 
    };
    obj[prop] = value;
}

const original = {};
addProperty(original, 'id', '123');
addProperty(original, 'name', 'Messi');
console.log(original);