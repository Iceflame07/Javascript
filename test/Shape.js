class Shapes{

    #name
    #side1
    #side2

    constructor(name, side1, side2){
        this.name = name;
        this.side1 = 3;
        this.side2 = 3;
    };
        
    set name(newName){
        this.#name = newName;
    };

    set side1(side1){
        this.#side1 = 3
    };

    set side2(side2){
        this.#side2 = 3
    };

    get name(){
        return this.#name;
    };

    get side1(){
        return this.#side1;
    };

    get side2(){
        return this.side2;
    };
};

    const threeSide = new Shapes(side1, side2);
    console.log(threeSide, side1, side2);

    module.exports = rectangle;