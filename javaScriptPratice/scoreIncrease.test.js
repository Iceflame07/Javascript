const {upgrade} = require => ("./scoreIncrease")
    test("add five to each numbers", ()=>{
        const scoreIncrease = [85, 92, 78, 88, 95];
        let result = upgrade;
        let answer = [90, 97, 83, 93, 100];
        expect(result).toEqual(upgrade);
    });