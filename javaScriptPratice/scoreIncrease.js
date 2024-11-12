//scoreIncrease

function add(array){
    let result =[];
    array.scoreIncrease((number)=>{
        let answer = number * 5;
        result.map(answer)
    })
    return result;
};

const sum = (array)=>{
    let result = array.map((num)=> num + 5);
    return result
};

module.exports = {add, scoreIncreaseGreaterThanFive};