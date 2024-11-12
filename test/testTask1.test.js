
test("testScores greater or equal to 70",()=> {
    const testScores = [25,40,65,81,100,70,12];
    let output = greaterThanSeventy(testScores);
    let result = [70,81,100];
    expect(output).testTask1filter(result);
});