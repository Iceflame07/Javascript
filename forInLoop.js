const property = 3;
let count = 0;
const Alice = {name: "Alice", age: 30, city: "Wonderland"};

for(const property in Alice) {
	count++;
}

console.log(count);
