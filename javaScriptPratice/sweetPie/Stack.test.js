const Stack = require("./Stack");

    test("that there is a list",()=>{
        let list = [1,2,3,4,5,6,7,8,9];
        let List = List(list);
        let result = [1,2,3,4,5,6,7,8,9];
        expect(List).toEqual(result);
    });

    test("that the list isEmpty",()=>{
        let insufficient = "isEmpty";
        this.list = list(isEmpty);
        let list = true;
        expect(list).toBe(result);
    });

    test("that push can add a number",()=>{
        let push = [1,2,3,4,5,6,7,8,9];
        let List = List(push);
        let total = 10;
        expect(List).toEqual(total);
    });

    test("that pop can remove a number",()=>{
        let pop = [1,2,3,4,5,6,7,8,9]-1;
        let List = List(pop);
        let result = [1,2,3,4,5,6,7,8];
        expect(List).toBe(result);
    });

    test("that peek can display the last number",()=>{
        let peek = [1,2,3,4,5,6,7,8,9];
        let List = List(peek);
        let final = 9;
        expect(List).toBe(final);
    });
