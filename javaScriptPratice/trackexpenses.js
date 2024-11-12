let trackexpenses = {groceries: 150, dinningout: 100, transportation: 50, entertainment: 80};
let sum = 0;

for (const sum in trackexpenses) {
  console.log(`trackexpenses.${sum} = ${trackexpenses[sum]}`);
};
