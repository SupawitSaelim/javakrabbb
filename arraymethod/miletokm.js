const myarr = [
    {model: "Dokota X1", distance : 230},
    {model: "Hunya 3",distance : 320},
    {model: "AMJ Crown",distance : 440},
];

const newArray = myarr.map((obj) => {
    let kilometres = (obj.distance * 1.6).toFixed(2);
    return {model: obj.model, distance: kilometres};
});

console.log(newArray);