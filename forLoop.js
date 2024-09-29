javascriptforloop
let arr = [1,2,3, "boy"];

let user = {
	age: 12,
	sex: "male",

};

for(let key in user){
	console.log(user[key]);
};

for(let index in arr){
	console.log(index);
	console.log(arr[index]);

}