function numbers(array){
    let numbers = {Hamster:10, XRP:200, BTC:3, Lite:42, Semicolon:5};
    let sum = 0;

        for (const total in numbers) {
            sum += numbers [total]
        };
        return sum;
    };
        console.log(numbers);

        module.exports = (numbers);