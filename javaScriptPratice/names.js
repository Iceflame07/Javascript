function names(array){
    let result = [];

    for(let element of array){
        let object = {
            name: element,
            status: "delivered"
        };
        result.push(object);
    };
    return result;
};

 module.exports = {names};