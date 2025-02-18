Object
let animal = {
    name: "unknown",
    color: "",
    age: 0,
    sound: function(){
        return `$(this.name) make a  sound`
    }
};

//let animal ={}

let cat = Object.create(animal);
cat.name = "pussyCat";
cat.color = "black";
cat.age = 1;
console.log(cat.sount())

Prototype
let newCat = Object.create(cat);
newCat.name = "redEye pussyCat";
newCat.color = "blue";

console.log(newCat);



