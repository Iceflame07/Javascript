const {greaterThan} = require("./testScores");

    test("numbers greater than 70",()=> {
        let testScores = [25,40,65,81,100,70,12];
        let result = greaterThan(testScores);
        let number = [81,100,70];
        expect(result).toEqual(number);
});