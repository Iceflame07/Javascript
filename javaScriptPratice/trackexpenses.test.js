const {expenses} = require ("./trackexpenses")

    test("sum in expenses",()=>{
        let expenses = {groceries: 150, dinningout: 100, transportation: 50, entertainment: 80};
        let result = expenses;
        let sum = 380;
        expect(result).toEqual(expenses);
    });