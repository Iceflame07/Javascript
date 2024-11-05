let expenses = {groceries: 150, dining out: 100, transportation: 50, entertainment: 80};
let sum = expenses + property


for (const property in expenses) {
  console.log(`expenses.${property} = ${expenses[property]}`);
}

