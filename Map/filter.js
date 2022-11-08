const fahrenheitTemps = [41, 33.8, 30.2, 19.4, 12.2, 5, 15.8];

const belowFreezing = fahrenheitTemps.filter(temp => {return temp < 32})

console.log(belowFreezing);