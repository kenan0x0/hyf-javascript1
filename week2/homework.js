'use strict'
//first assignment
console.log("Hello, world \nHallo, wereld \nMarhaba, alam");
//end of first assignment

//second assignment
console.log("I'm awesome");
console.log("The code in the previous assignment will not work because of the conflict between the \ncolon from the inside of the parentheses and the colon of the word I'm \ncould be solved by making the colons inside the parentheses a double colon like I did up")
//end second assignment

//third assignment
let x;
console.log("I think that if I were to run the js now the var x will be undefined");
console.log(x)
x = 50;
console.log("Now the value of x will be a number and it's 50");
console.log(x);
//end third assignment

//fourth assignment
let y = "Christmas is the best time of the year";
console.log("The value of y is just as previous a string with everything I've written between double colons");
console.log(y);
y = "Worst time of the year is when Christmas finishes";
console.log("The value of y will be overwritten, it will stay a string but with the second sentence");
console.log(y);
//end fourth assignment

//fifth assignment
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
if ( z > a ){
    console.log("Yes, number 1");
} else {
    console.log("Yes, number 2");
}
let l = z;
console.log(l); /*We could also simply compare then normally with the <> signs and if we do for example
this a > b and it returned false then we naturally know then that b's value is bigger*/
//end fifth assignment

//sixth assignment
let plurality = [];
console.log("I think it will also return the square brackets");
console.log(plurality);
let favoriteAnimals = [
    "Dogs",
    "Tigers",
    "Lions"
]
console.log(favoriteAnimals);
favoriteAnimals.push ("baby pig");
console.log(favoriteAnimals);
//end sixth assignment

//seventh assignment
let myString = "This is a test";
console.log(myString);
console.log(myString.length)
//end seventh assignment

//eighth assignment
let q = 15;
console.log('The value of my variable q is: ' + q);
let w = "Hi";
console.log('The value of my variable w is: ' + w);
let e = true;
console.log('The value of my variable e is: ' + e);
let r = "bye";
console.log('The value of my variable r is: ' + r);
console.log("The type of my variables is different from of to another I have numbers and strings");
console.log(typeof q, typeof w, typeof e, typeof r);
if ( typeof q === typeof w, typeof w === typeof e, typeof e === typeof r, typeof w === typeof r){
    console.log("SAME TYPE");
}
//end eighth assignment

//ninth assignment
let t = 7;
t = t % 3; //Result would be 1 
console.log(t = t % 3);
console.log("The mission of the operator % is to show the remainder of the dividing");
console.log("We could find out the result by using the property Math.floor and dividing the values normally and it will return a number");
console.log("We use the returned number and multiply it with the right value and then we min the first value from the second and that will be the remainder");
//end ninth assignment

//tenth assignment
let i = 10;
let u = "Hi I'm a lonely string";
let newArray = [i, u];
console.log(newArray);
console.log("I guess yes we can compare infinities (Not Sure) but it was true when I tried it");
if ( 6/0 === 10/0 ){
    console.log("Yes we can and it shall return true");
} else {
    console.log("No we can't and it shall return undefined");
}
console.log("It is normal to add variables with different types to an array");
console.log("Things can be values can be compared with === and in case of a match it will return true else it will return false")