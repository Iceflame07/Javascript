
function Human(name, age){
    this.name = name;
    this.age = age;

    this.profile = function(){
        return `Hello I am $(this.name) and I am $(this.age) years old`
    };

};

let personOne = new Human("williams", 5);
    //console.log(personOne.profile());

    Human.prototype.sense = false;
    console.log(personOne.sense);