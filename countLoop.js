const arrayWord = "Hello World";
let count = 0;
let vowel = ['a','e','i','o','u'];
let number = 0;

for(let count = 0; count < arrayWord.length; count++){
	for(let value = 0; value < vowel.length; value++){

	if(arrayWord.charAt(count) == vowel[value]) number++;
	  
	
	}

}
console.log(number);
