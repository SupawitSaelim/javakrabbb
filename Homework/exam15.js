function bomb(explosions) {
    let totalX = 0;
    let totalY = 0;
    let totalIntensity = 0;

    for (const [x, y, intensity] of explosions) {
        totalX += x * intensity;
        totalY += y * intensity;
        totalIntensity += intensity;
    }

    const centerX = totalX / totalIntensity;
    const centerY = totalY / totalIntensity;

    const roundedCenterX = Math.round(centerX);
    const roundedCenterY = Math.round(centerY);

    return [roundedCenterX, roundedCenterY];
}

console.log(bomb([[0,0,72.886],[0,50,72.886],[25,25,72.886]])) // ouptue : [0, 25]
console.log(bomb([[0,50,145.773],[50,50,206.154],[50,0,145.773]])) //[0, 0]
console.log(bomb([[5,8,48.872],[12,21,35.107],[24,20,22.203]])) //[21, 13]
console.log(bomb([[18,42,35.558],[39,16,106.004],[7,24,32.202]])) //[8, 35]

