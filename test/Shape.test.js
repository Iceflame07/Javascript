const Shapes = require("./Shape");

    test("throw exception when Shape is equal to side1 and side2",()=>{
        let name = "name";
        let side1 = 3;
        let side2 = 3;
        let shapes = new Shapes(name, side1, side2);
        let result = "Recieved the information";
        expect(shapes).toThrowException(result);
    });

