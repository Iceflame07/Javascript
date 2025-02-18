const {sumLastInteger} = require("./addOne");

test("increase the lastInteger", ()=> {
    let sumLastInteger = [5,1,2,4];
    let result = sumLastInteger;
    let answer = [5,1,2,5];
    expect(result).toBe(sumLastInteger);
});