const {multiply, evenNumbers, squareNumbers} = require("./index")


test("multiply two numbers", ()=> {
    let firstNumber = 4; //Arrange
    const secondNumber = 5;
    let result = multiply(firstNumber, secondNumber) //Act
    let answer = 20; 
    expect (result).toBe(answer); //Assert
});

test("square a number", ()=>{
    let number = 2; //Arrange
    let result = squareNumbers(number); //Act
    let answer = 4;
    expect (result).toBe(answer); //Assert
});

test("test for even numbers", ()=>{
    let arrayOfNumbers = [1,2,3,4,5,8]; //Arrange
    let result = evenNumber(arrayOfNumbers);
    let answer = [2,4,8];
    expect(result).toEqual(answer);
});