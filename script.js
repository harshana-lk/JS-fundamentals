// Variable Declaration(Correct Method)---------------------------------------------------------------------------------------

let nermo = "Harshana";
let firstName = "Swarna";

console.log(nermo);

// ---------------------------------------------------------------------------------------------------------------------------

// Variable Declaration(Wrong Methods)-----------------------------------------------------------------------------------------

// let 3olivia = "Jayaweera";
// let Harshana&Jayaweeara = "1234";

// Data Types------------------------------------------------------------------------------------------------------------------

// ==> Boolean Value
let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

// ==> String Value
let java = "Amazing";
console.log(typeof java);

// ==> Number Value
let numberType = 1234;
console.log(typeof numberType);

// ==> Undefined Value
let UndefinedValue;
console.log(typeof UndefinedValue);

// ==> Null Value
let nullValue = null;
console.log(typeof nullValue);

// ==> BigInt Value
let bigIntValue = 14789656332144556332n;
console.log(typeof bigIntValue);

// ==> Dinamic Variable
javascriptIsFun = "OG";
console.log(typeof javascriptIsFun);

// Let,Const,Var VAriable declaration----------------------------------------------------------------------------------------------

// ==>Mutable Variable(LET)
// we can change the value
let fName = "Harshana";
fName = "jayaweeara";

// ==>Mutable Variable(VAR)
// we can change the value
var sName = "hansika";
sName = "Sewwandi";

// ==>Immutable Variable(Const)
// we can't change the value
// const lName = "Jayaweera";
// lName = "Dissanayaka";

// ==> Operators-------------------------------------------------------------------------------------------------------------------

// Subtraction
let now = 2023;
let myAge = now - 2000;
console.log(myAge);

// Addition
let salary = 50000.0;
let nowSalary = salary + 5000;
console.log(nowSalary);

now += 200;
console.log(now);

now++;
console.log(now);

++now;
console.log(now);

// Multiplication & Division & Power
console.log(nowSalary * 2, nowSalary / 2, 2 ** 3);

nowSalary *= 10;
console.log(nowSalary);

nowSalary /= 10;
console.log(nowSalary);

// String Concat
const first_name = "Harshana";
const last_name = "Jayaweera";
console.log(first_name + "" + last_name);

// Comparison Operators
const isNetSalary = nowSalary > salary;
console.log(isNetSalary);

//==> Template Literals-------------------------------------------------------------------------------------------------------------

// This is without Template String
const myName = "Harshana";
const job = "Student";
const birthYear = 2000;
const nowYear = 2023;

const Harshana =
  "I'm " + myName + " ,a " + (nowYear - birthYear) + " Years old " + job;
console.log(Harshana);

console.log(
  "String With \n\
Multiple \n\
Lines"
);

// With Template String
const newHarshana = `I'm ${myName} ,a ${
  nowYear - birthYear
} Years Old ${job} !`;
console.log(newHarshana);

console.log(`String with 
Multiple 
Lines`);

// ==> If Else Statement Handling----------------------------------------------------------------------------------------------------

const ageOfMine = 15;
const isOldEnough = ageOfMine >= 18;

if (isOldEnough) {
  console.log(`You are able to drive the car 🚗`);
} else {
  const yearsLeft = 18 - ageOfMine;
  console.log(
    `You are not able to drive the car 🚗 please wait another ${yearsLeft} years !`
  );
}

// ==> Type Conversion & Type Coercion-----------------------------------------------------------------------------------------------

// Type Conversion
const inputYear = "2000";
console.log(inputYear, Number(inputYear));
console.log(Number(inputYear) + 20);

// Type Coercion
const coercion = "My Age Is :" + 23;
console.log(coercion);

// in this case string values are converted to Number Format
console.log("23" - "10" - 3);

console.log("23" * 3);

console.log("34" / 2);

console.log("34" > "24");

// in this case ("1" + 1) is equals to 11 (because of + operator)
let num = "1" + 1;
// then  (in this case (n-=1) equals to 10 (because of - operator))
num -= 1;
console.log(num);

//==>Truthy & Falsy Values---------------------------------------------------------------------------------------------------------

//5 falsy values => 0 , '' , undefined , null , Nan

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Harshana")); //truthy value
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean({})); //truthy value

const money = 0;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You have to find a job");
}

// ==> Equality Operator-----------------------------------------------------------------------------------------------------------

const age = "18";
if (age === 18) console.log("You are allowed to get the license (Strict)"); //Strict Equality Operator

if (age == 18) console.log("You are allowed to get the license (Loose)"); //Lose Equality Operator

const fav = prompt("What Is your Favorite Number ? ");

console.log(fav);
console.log(typeof fav);

if (fav === 23) {
  console.log("23 is a cool number");
} else if (fav === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("You are a fool");
}

// Strict non equality Operator
if (fav !== 23) { 
  console.log("Why not 23 ?");
}
