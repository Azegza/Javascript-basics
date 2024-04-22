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
