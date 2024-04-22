//  the logical || operator
var timeRemaining = 0;
var energy = 10;
console.log("Game Over :" + (timeRemaining == 10 || energy == 0)) ;

// the modulus operator, %, to test if a given number is odd
var num1 = 2;
var num2= 5;
var test1= num1 % 2;
var test2 = num2 % 2;
var result1= (test1 == 0); // () needed to assign the result of the comparaison (true/false)
var result2 = (test2 == 0); // () needed to assign the result of the comparaison (true/false)
console.log("Is" +num1 +" an even number?" + result1);   // output : Is2 an even number?true
console.log("Is" +num1 +" an even number?" + result2);   // output : Is2 an even number?false
