let dog = {};
Object.setPrototype(dog)
dog.name = "Bulldog";
dog.color = "brown";
dog.age = 28;

console.log(dog)

Object.setprototypeOf(Animal, newDog);
newDog.name = "newDog";
newDog.color = "noColor";
newDog.age = 0;
newDog.sex = "male";
console.log(Animal.newDog)
