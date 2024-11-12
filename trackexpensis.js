let trackexpenses = {groceries: 150, dinningout: 100, transportation: 50, entertainment: 80};
let sum = trackexpenses + property

for (const property in trackexpenses) {
  console.log(`trackexpenses.${property} = ${trackexpenses[property]}`);
}

