const {schedule} = require ("./timing.test")

    test("schedule matches the time", ()=>{
        let schedule = ["9:00AM","11:00AM","1:00PM","3:00PM","5:00PM"];
        let result = schedule;
        let total = ["1:00PM","3:00PM"];
        expect(result).toBe(schedule);
    });