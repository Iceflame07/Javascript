const Human = require("./oop");

    test("throws exeption when age is less than 0",()=>{
        let name = "williams";
        let age = -4;
        let human = ()=> new Human(name, age);
        let errorMessage = "Age should not be less than 0";
        expect(human).toThrowError(errorMessage);
    });