
// // function myFunction() {
// //     console.log("start");
// // }

const { log } = require("console");

// // myFunction();
// console.log("judith");

// function myFunction2(x,y) {
//     console.log(x+y);
// }

// myFunction2(2,5);

// function sayName (x){
//     console.log('hello welcome ${x}');

// }
// sayName()

// function doMath (x =3,y =5){                //default parameter
//     console.log(x*y)
// }

// doMath(4,9)

function doMath2 (x){        
    if (x === undefined){
        console.log("please enter a number")
    } else {
        console.log(x *2);
    }
}

doMath2()

const doMath3 = (x) =>{
    if (x === undefined){
        console.log("please enter a number")
    } else {
        console.log(x *2);
    }

}

// doMath3()


// function name1() {                     // void function.. when its like this it will be stored like an array form and it will be displaying like an object
//     console.log(arguments.length);
// }
// name1(6,9,9,6)


// function name2 () {
//     let el = []
//     for(let x=0;x < arguments.length; x++){
//         el.push(arguments[x])
//     }
//     return el.reduce((a,b) => {
//         return a+b
//     });
// }
// console.log(name2(2,3,4,5));

function name3 (){
    let some = 0

    for(let i=0; i < arguments.length; i++) {       //the arguments is whatever the user will pass in
        some +=( arguments[i])
    }

    return some;
}
console.log(name3(3,4,8));


function name4 (){
    let ju =[]

for(let i = 0; i < arguments.length;i++){
    ju.push(arguments[i]);

}
return parseInt(ju.reverse().join(""));
}
console.log(name4(6,7,9,9));


function height (x){
    if (x < 50){
        console.log("you are short");
    }else{
        console.log("you are tall");
    }
}
height(100);

function check (){
    max = -Infinity
    for (let i = 0; i < arguments.length; i++) {  
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(check(1,5,6));



function check3 (){
    max = -Infinity
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}

console.log(check3(5,6,7,8,9));

//using readline

// const readLine = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,                                 //we use readline to able to write on the teminal
// });

// readline.question("hey,whats is your name:",(name) =>{
//     console.log(`hmm i love what ${name} is what you call`);
// });

//using the prompt sync

 const prompt = require("prompt-sync")();

// let lay = prompt("what is your name?");

// console.log(`what a beautiful name:`, lay);

// function inputData() {

//     let input1 = parseInt(prompt("enter your first number:"))
//     let input2 = parseInt(prompt("enter your second number:"))

//     console.log(input1 + input2);
// }

// inputData();


//creating a class

// class Build {
//     constructor(name) {
//         this.name = name;
//     }

//     log() {
//         console.log(`display ${this.name}`);
//     }
// }

// let build = new Build("Judith");
// build.log();

class mum {
    constructor(name,color,age){
        this.name = name
        this.color = color
        this.age = age
    }

    show() {
        console.log(`i love javascript ${this.name}`);

    }
}

let show1 = new mum("judith","fair","10");
show1.show();

// //step 2






const koya = {name: "moji", score: 10, color: "black", age: 12};
const koya2 = {name: "koya", score: 10, color: "black", age: 12};
const koya3 = {name: "shola", score: 10, color: "black", age: 12};

let el =[];
el.push(koya,koya2,koya3);
let sum = 0;
el.forEach((element) => {
    sum += element.score;
    return sum
});
console.log(sum);
let name22 = "peter"
name22 = "judith"


// function add() {
//         let el =[];
//         el.push(koya,koya2,koya3);
//         let sum = 0;
//          el.forEach((element) => {
//         sum += element.score;
       
//     });
//     console.log(sum);
// }

// add()



// function add() {
//     let el =[];
//     el.push(koya,koya2,koya3);
//     let sum = 0;
//      el.forEach((element) => {
//     sum += element.score;

   
// });
//  return sum;
// }

//  console.log(add({name: "esther", score: 60, color: "fair", age: 89}));


//to see everything
function add() {
    let el =[];
    el.push(koya,koya2,koya3);
    let sum = 0;
     el.forEach((element) => {

    console.log(element);
     
});
}
add()

//for in methd
let newArr = [1,2,"tunde"]
let newArr1 = {name: "judith",age: 13, color:"blue", score:100 }
let newArr2 = {name: "chi",age: 13, color:"blue", score:100 }

for(let i in newArr1) {
    console.log(newArr2[i]);
}



class NewChild {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    sum() {
        return this.x * this.x
    }

    sumcacl() {
        return this.sum()
    }
  
}

let newBuild = new NewChild(5,5)
console.log(newBuild.sumcacl());