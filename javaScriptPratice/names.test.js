const {names} = require("./names");

    test("list is equal to names", ()=> {
        let array = ["Emily","Jack","Sophia"];
        let result = names(array);
        let final = [
            {
                name: "Emily",
                status: "delivered"

            }, 
            {

                name: "Jack",
                status: "delivered"

            }, 
            {

                name: "Sophia",
                status: "delivered"

            }
        ]
        expect(result).toEqual(final);

    });