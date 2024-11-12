//FOREACH

function multiply(array){
    let result =[];
    array.forEach((number)=>{
        let answer = number * 2;
        result.push(answer)
    })
    return result;
};

const sum = (array)=>{
    let total = 0;
    array.forEach((num)=>{
        total += num;
    });
    return total;
};

function numberGreaterThanTwo(array) {
    let result = array.filter((num)=> {
        return num > 2;
    });
    return result;
}

const add = (array)=>{
    let result = array.map((num)=> num + 2);
    return result
};

module.exports = {multiply, sum, numberGreaterThanTwo, add};