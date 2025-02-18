const {numbers} = require("./squareOfNumbers");
    
    test("numbers in a array ", ()=>{
        let numbers = (2,4,6,8,10);
        let result = numbers;
        let answer = [10,20,30,40,50];
        expect(result).toBe(numbers);
})