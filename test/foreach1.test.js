const {multiply, sum, numberGreaterThanTwo, add} = require("../foreach2")

test("multiply each number by 2",()=>{
    const arrayOfNumbers = [1,2,3,4,5,];
    let result = multiply(arrayOfNumbers)
    let answer = [2,4,6,8,10]
    expect(result).toEqual(answer);
});

test("sum of the numbers",()=>{
    const arrayOfNumbers = [1,2,3,4,5];
    let result = sum(arrayOfNumbers);
    let answer = 15;
    expect(result).toBe(answer);

});

test("numbers greater than 2",()=>{
    const arrayOfNumbers = [1,2,3,4,5];
    let result = numberGreaterThanTwo(arrayOfNumbers);
    let answer = [3,4,5];
    expect(result).toEqual(answer)
});

test("add two to each numbers", ()=>{
    const arrayOfNumbers = [1,2,3,4,5];
    let result = add(arrayOfNumbers);
    let answer = [3,4,5,6,7];
    expect(result).toEqual(answer);
})

