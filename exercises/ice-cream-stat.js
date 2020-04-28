const iceCreamStats = [
  { name: 'Amanda', gallonsEaten: 3.8 },
  { name: 'Geoff', gallonsEaten: 5.2 },
  { name: 'Tyler', gallonsEaten: 1.9 },
  { name: 'Richard', gallonsEaten: 7923 },
];

let stats = iceCreamStats.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.gallonsEaten;
}, 0);

console.log(stats);