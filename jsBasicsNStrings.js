// var declared without let var const
x = 4
y = 7
console.log(x+y);

// js objects
const Car = {
    name:"BMW",
    cost: 1230000,
    color: "grey",
    fun: function(){
        return this.name + this.color;
    }
  
}
//document.getElementById("obj").innerHTML = "The Car is " + Car.name + " and it is " + Car["color"] + " in color";
console.log(Car);

fcall = Car.fun();
console.log(fcall);

// js string methods
let str = "Strings"
let len = str.length
console.log("string length is : " + len);

let str2 = "this is \"double quote\" and this is backslash \\"
console.log(str2);

let str3 = "Sliceable string"
let SliceMethod = str3.slice(2,9)
let SliceMethod2 = str3.slice(-7)
console.log(SliceMethod);
console.log(SliceMethod2);

let substr = "This is substring in astringa"
let SubstrMethod = substr.substring(2,20)
console.log(SubstrMethod);

let str4 = "This is Microsoft Office"
let replaceMethod = str4.replace("Microsoft", "Google")
console.log(replaceMethod);

// to make microsoft case-insensitive

let replaceMethod2 = str4.replace(/MICROSOFT/i,"Google")
console.log(replaceMethod2);

let repAll = str4.replaceAll("Office", "Branch-Office")
console.log(repAll);

let UppCase = str4.toUpperCase()
console.log(UppCase);

let lowCase = str4.toLowerCase()
console.log(lowCase);

let str5 = "Con"
let str6 = "Cat"
let cat = str5.concat(" ", str6)
console.log(cat);

let str7 = "      This       is will  be trimmed      iguess"
let Trimmethod = str7.trim()
console.log(str7);
console.log(Trimmethod);

let str8 = "the sky is blue"
let position = str8.charAt(4)
console.log(position);

let str9 = "This will be converted | into an array"
let CharArr = str9.split(" | ")
console.log(CharArr);

// string search methods

let str10 = "This is a string now find the location of the string"
let str11 = "This is a string now find the location of the string"
let str12 = "This is a string now find the location of the string"
let str13 = "This is a string now find the location of the string"
let str14 = "This is a string now find the location of the string"
let str15 = "This is a string now find the location of the string"
let str16 = "This is a string now find the location of the string"
let str17 = "This is a string now find the location of the string"


let idxOf = str10.indexOf("string")

let lastIdx = str11.lastIndexOf("string")

let srch = str12.search("now")

let mtch = str13.match("is")

let mtchAll = str14.matchAll(/the/g)

let inc = str15.includes("find")

let stWith = str16.startsWith("This")

let edWith = str17.endsWith("string",11)

console.log(" ");
console.log(idxOf);
console.log(lastIdx); 
console.log(srch);
console.log(mtch); 
console.log(mtchAll);
console.log(inc); 
console.log(stWith);
console.log(edWith); 

// string templates

let heading = "This is a heading"
let liTags = ["list1", "list2", "list3"]
let ptag = "This is a paragraph"

let div = `<h2>${heading}</h2>`;

for(const x of liTags){
    div = div + `<li>${x}</li>`;
}
div = div + `<p>${ptag}</p>`
//document.getElementById("JStemp").innerHTML = div;

let content = "This is content";
let container = `<h2>${content}</h2>`;
//document.getElementById("headTag").innerHTML = container;


console.log("Numbers in js: ");
console.log(Number.isInteger(10.5));

//Number methods
console.log("\nBelow are number methods : \n");
let num1 = 123
let num2 = 12
let num3 = 123.7896
let num4 = 123
let num5 = 123
let num6 = 123 

let nres1 = num1.toString()
console.log(nres1);
console.log(typeof nres1);
console.log((1236).toString());

console.log(num2.toExponential(2));

console.log(num3.toPrecision(3));

console.log(num3.valueOf());

console.log(Number(true));
console.log(Number("23"));

console.log(parseInt(" 102 3")); 

// JavaScript Math objects
console.log("\nJavaScript Math objects : ");
console.log("PI : " + Math.PI);
console.log("Euler's no : " + Math.E);
console.log("Square root of 25 : " + Math.sqrt(25));
console.log("square toot of 2 : " + Math.SQRT1_2);
console.log("square root of 1/2 : " + Math.SQRT2);
console.log("natural log of 2 : " + Math.LN2);
console.log("natural log of 10 : " + Math.LN10);
console.log("base 2 log of e : " + Math.LOG2E);
console.log("base 10 log of e : " + Math.LOG10E);

console.log("Round : " + Math.round(88.7531));
console.log("Ceil : " + Math.ceil(90.7654));
console.log("Floor : " + Math.floor(23.6754));
console.log("Trunc : " + Math.trunc(2345.712));

console.log("Sign : " + Math.sign(-4));
console.log("Sign : " + Math.sign(0));
console.log("Sign : " + Math.sign(4));

console.log("Power of : " + Math.pow(8,3));
console.log("Absolute : " + Math.abs(-4.7));
console.log("Sin(45) : " + Math.sin(45*Math.PI/180)); // for degrees
console.log("Cos(45) : " + Math.cos(30*Math.PI/180)); // for degrees
console.log("Min function : " + Math.min(0, 150, 20, 37, -8, -2, -10));
console.log("Max function : " + Math.max(0, 150, 20, 37, -8, -2, -10));
console.log("Random number : " + Math.random());
console.log("Log : " + Math.log(3));
console.log("Log2 : " + Math.log2(3));
console.log("Log10 : " + Math.log10(3));

console.log("Random no. between 0 and 10(decimal) : " + Math.random() * 10);
console.log("Random no. between 0 and 10(absolute) : " + Math.floor(Math.random() * 10));
console.log("Random no. between 1 and 10(absolute) : " + (Math.floor(Math.random() * 10) + 1));

// for in loop{objects}

const obj = {fname:"Virat", lname:"Kohli", age:35}
let text = ""
for(let x in obj){
    text += obj[x] + " ";
}
console.log(text);

// for in loops[array]

const arr = [1,2,3,4,5,10]
let sumOEven = 0;
for(let x in arr){
    if(arr[x]%2==0){
        sumOEven += arr[x];
    } 
}
console.log(sumOEven);

// for of loop[array]
const arr2 = ["batman","superman","spiderman"]
let heros = "";
for(let x of arr2){
  heros += x + " ";
}
console.log(heros);









