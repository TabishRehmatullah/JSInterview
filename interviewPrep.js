//JS INterview questions



                            // ****var vs let vs Const**** //
    //**SCOPE????
//scope is a certain region in a prpgram where a defined variable exists and can be recognized 
//and beyond that it cannot be recognized
// var is a functinol scope but "let and const" are block scope


//variable shadowing

let greet= "hello";
function greetings(){
    let greet = "HI"
    console.log(greet);
}
greetings();
console.log(greet);

//declaration
//var can be redclaraed like 
var a;
var a;
// but let and const cannot be redeclared within the same scope, we can redclare them in different scopes like this
// let a; {
//     let a;
// }



//declaratin without initilization
//let a; ok
//var b; ok
//const c; not oky, we need to provide const the value
//const c= 4; now ok

//reinitilization
 //var a=6;
    // a = 5;
    // let a= 5;
    // a=6; all ok

    //const a = 4;
    // a =5 not ok


    //HOISTING

    //var is hoisted, if it is used before initilization, it will return "Undefined",
    // const and let are also Hoisted but in the temporal dead zone, they will not normally return undefined if called before
    // initilization
    





//Q1: What is a function declaration

function square(num){
    return num * num;
}
console.log(square(4));




//Q2 what is a function expression?
//Storing a function inside a variable

const sum  = function(a, b){
    return a + b;
};

console.log(sum(3,5));

//function(a, b){
//     return a + b;
// } this is an annonymous function





//Q3 what are first class functions?
// when a function is treated like a variable

function substract(num1 , num2){
    return num1 -num2;
}
function display(fn){
    console.log("difference is:" + fn(20,4))
}
display(substract);


//Q4 what is IIFE? immediately invoked function expression?
//calling the function with it's definition

(function multi(a, b){
    console.log("multiplcation is: "+ a*b);
})(3,4);



//Q6 check the output of these IIFE functions
(function (x){
    return (function(y){
        console.log(x);
    })(3)
})(6); //output is 6


//Q6 Function scope

//num1 and num2 are globally declared so function took them if there were any copy of these 
//variables inside the functin, the function would jave taken that value
num1 = 3, num2=5;
let name= "Tabish";
function multiplcation(){
    console.log("new multi is:" + num1*num2)
}
multiplcation();

function getScore(){
    num1 = 30,
    num2 = 2;
    function add(){
        return name + "Scored" + (num1+num2);
    }
   console.log("Updates: " + add());
}
getScore();




//Q7 Function scope output based question:

//  for (let i=0; i<5; i++){
    
//         setTimeout(function(){
//             console.log("Printing: "+ i);
//         }, i*1000);
    
//  } //this will print 0, 1, 2, 3,4

//  for(var i =0; i<5; i++){
//     setTimeout(
//         function(){
//             console.log("Now Printing" + i)
//         }, i*1000
//     )

//  } // this will always print 5 because var doesnot have a block scope


 //Q8 function hoisting  OP question

 var x= 21;
 var fun =  function(){
    console.log("Fun printed" + x)
    var x= 20;
 };
 fun(); //gives undefined

 //Q9 Params vs arguments


 function addition(num1, num2) // params
 {
    console.log(num1+num2)
 }

 addition(5,7)// arguments


 function product(...nums){ //rest operator
    console.log(arr[0] * arr[1])

 }

 var arr= [7,5]

 product(...arr); //spread operator

 function func(a, b, y, ...numbers){ // always use rest operators at the end of param list
    console.log(a, y);
 }
 func(3,5,1,9,7,8);

 //Q11 Callback functions
 // callback functions are those functions that can be passed to another function
 //you can build your own or there are also some pre built callback functions in JS
//  document.addEventListener("click", function(){

//  })


//ARROW FUNCTION
const Yuhu = (num1, num2)=> console.log(num1+ num2);
Yuhu(3,4);


function createBase(num){
    return function (a){
        console.log(num+a)
    }
}

var addSix = createBase(6)(21);

// var addSix = createBase(6);
// addSix(10); //returns 16
// addSix(21); //return 27


    for(var i= 0; i<3; i++){
        function closure(i){
            setTimeout(function log(){
                console.log(i);
            }, i*1000);

        }
        closure(i);
        
    }
    


    function threeSum(a){
        return function(b){
            return function(c){
                return "Sum is" + (a+b+c);
            }
        }

    }
    console.log(threeSum(3)(4)(10));


// A simple example of Polymorphism (Method overloading)

function adding( a , b){
    return a + b;
}

function adding(a,b,c){
    return a + b + c;
}

function adding(a,b,c,d){
    return a + b + c + d;
}
   
console.log("Adding 4 numbers: " + adding(6,5,7,10))


//Some interview Coding questions from js

//Sort names into houses based on their name length
let students = ["Ali", "Asadullah", "Kashif", "Taimoor", "Ubaidullah", "Raheel", "Zahid Ahmed", "Muhammad Ahmed", "Khizar", "kaif", "Sahil"]



let houses = []

for (const student of students) {
    if(student.length < 6){
        houses.push("Gryffindor")
    }
    else if(student.length < 8){
        houses.push("Hufflepuff")
    }
    else if(student.length < 12){
        houses.push("Ravenclaw")
    }
    else{
        houses.push("Slytherin")
    }
}

console.log(houses)

//count the number of occurance of a letter in a word
let alpha= prompt("Enter the letter you want to count")
let exampleString = prompt("Enter String");
function countAlpha(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === alpha.toLowerCase()) {
            count++;
        }
    }
    return count;
}



let result = countAlpha(exampleString);
console.log(`The letter ${alpha} occurs in ${exampleString}  ${result} times.`);


//Reverse of a string

function reverseString(str) {
    let reversedStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr.push(str[i]);
    }
    return reversedStr.join("");
   
}


let exampleString = "Hello, World!";
let reversed = reverseString(exampleString);
console.log(reversed);  


//Check if the word is palindrome

function isPalindrome(str) {
    str = str.toLowerCase();
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return str === reversedStr;
}
let exampleString = "madame";
let result = isPalindrome(exampleString);
console.log(result); 



//find the factorial of a number
function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(6)); 


//sum of numbers of an array
function sumArray(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}


console.log(sumArray([1, 2, 3, 4]));  





// adding two arrays
function addArrays(arr1, arr2) {
    let resultArray = [];

    for (let i = 0; i < arr1.length; i++) {
        resultArray[i] = arr1[i] + arr2[i];
    }

    return resultArray;
}

let array1 = [1, 2, 5, 4, 3, 9];
let array2 = [5, 0, 3, 1, 7,4];

let addedArray = addArrays(array1, array2);

console.log(addedArray);  



//check if the number is prime
function isPrime(num) {
    if (num < 2) return false;
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

console.log(isPrime(2));  
console.log(isPrime(10)); 


//count the number of vowels in a string
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelCount++;
                break;
            }
        }
    }
    
    return vowelCount;
}

console.log(countVowels("hello")); 
console.log(countVowels("javascript"));  



//find the longest word in a string
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("My name is Tabishhhhh"));


