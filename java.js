//JAVASCRIPT VARIABLE
let age=30;
let year=2020;
console.log(age,year);
// variable create by const keyword never change

const value=200;
console.log(value);

//crate using var
var score=900;
console.log(score);
//String 
console.log("Helllo ,world");
let email="ashenafin2024@gmail.com";
console.log(email);
//String concationation
let firstName="Ashenafi";
let lastName="Tesfaye";
let fullName=firstName +''+ lastName;
console.log(fullName);
//Getting character
console.log(fullName[0]);
console.log(fullName[5]);
//getting length
console.log("The length of the your name is "+fullName.length);
//method
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.indexOf('A'));
//Common String method
let commonString="ashenafitesfaye@gmail.com";
//lastIndexOf()
console.log(commonString.lastIndexOf('g'));
//slice()
console.log(commonString.slice(0,8));
//substr
console.log(commonString.substr(2,5));
//replace
console.log(commonString.replace('f','o'))
//CharAt
console.log(commonString.charAt(5));