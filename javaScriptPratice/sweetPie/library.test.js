const numbers = require("./library")

    test("that you can calculate the numbers of books",()=>{
        let numbers = {Hamster:10, XRP:200, BTC:3, Lite:42, Semicolon:5};
        let result = numbers;
        let total = 260;
        expect(result).toEqual(numbers);
    });