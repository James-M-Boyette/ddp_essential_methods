const oldTemps = [5, 1, -1, -7, -11, -15, -9]

const newTemps = oldTemps.map(cTemp => (cTemp * 9/5) + 32 )

console.log(newTemps);