const {add, scoreIncreaseGreaterThanFive} = require("../scoreIncrease")
    test("add five to each numbers", ()=>{
        const list = [85, 92, 78, 88, 95];
        let result = add(scoreIncrease);
        let answer = [90, 97, 83, 93, 100];
        expect(result).toEqual(answer);
    });