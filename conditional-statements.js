 // if, else if , else  

var fruit = 'apple';
 if (fruit == 'orange'){
   console.log( " Not My favrite fruit");
 }
else if  (fruit == 'mango'){
   console.log( " Not My favrite fruit");
 }
else if  (fruit == 'banana'){
   console.log( " Not My favrite fruit");
 }
else if  (fruit == 'apple'){
   console.log("My favrite fruit is " + fruit); // output  My favrite fruit is apple
 }
else {
  console.log("Gess again");
};



// Switch statement 
var fruit = 'apple';
switch  (fruit){ // variable in the () outside the statement
  case 'orange' : // is switch : no  need for comparaison
    console.log( " Not My favrite fruit");
break;
case 'mango' : // is switch : no  need for comparaison
    console.log( " Not My favrite fruit");
break;
  case 'banana' : // is switch : no  need for comparaison
    console.log( " Not My favrite fruit");
break; // if the case is met
  case 'apple' : // is switch : no  need for comparaison
    console.log( "My favrite fruit is " + fruit);  // output  My favrite fruit is apple
break;
}




// Are you old enough? programmed in js using if else if else and switch case default statements 

var age = 10;
 if ( age >65){
    console.log("You get your income from your pension");
 }
  else if ( age >= 18){
    console.log("Each month you will get a salary");
 }
 else if ( age<18){
    console.log("You get an allowance");
 }
 else {
    console.log("The value of the age variable is not numerical")
 };



 //switch statement 
 var age = 10;
 switch (age){
    case age > 65 :
        console.log("You get your income from your pension");
        break;
    case age >= 18 :
            console.log("Each month you will get a salary");
            break;
     case age < 18 :
                console.log("You  get an allowance");
                break;
default :
console.log("The value of the age variable is not numerical");
 
 }
