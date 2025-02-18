class Human{

    #name;
    #age;
    #sex;

    constructor(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    };

    set name(newName){
        this.#name = newName;
    };

    describe = ()=>{
        return `My name is $(this.#name), I am $(this.#age)  years old`
    };
    set age(age){
        if(age > 0){
            this.#age = age;
        }else{
            throw new Error("Age should not be less than 0");
    }};

    set sex(sex){
        this.#sex = sex
    };

    get name(){
        return this.#name;
    };

    get age(){
        return this.#age;
    };

    get sex(){
        return this.sex;
    };
}

const personOne = new Human("Buks", 20, "SheMale");
const personTwo = new Human("Williams", 2);
console.log(personOne.describe());

class Man extends Human{

        #sex;

    constructor(name, age, sex){
        super(name, age);
        this.#sex = "male";
   }
}


module.exports = Human;