function expenses(array){
  let expenses = {groceries: 150, dinningout: 100, transportation: 50, entertainment: 80};
  let sum = 0;

  for (const amount in expenses) {
    sum += expenses [amount]
 
  };
  return sum;

};
    console.log(expenses);
  module.exports = {expenses};