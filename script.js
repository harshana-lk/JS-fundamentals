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
Mutiple \n\
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
