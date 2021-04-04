//normal function
//1)
function myFunction() {
    console.log("hello normal fun");
}
//function calling
myFunction();

//fat_arroy function

let hello = () => {
    console.log("hello fatarroy fun");
}
hello();

//normal function
//2)
function myFunction1(a) {
    console.log(`hello ${a} good morning`);
}
myFunction1("antim songara");

//fat_arroy function
const hello1 = (a) => {
    console.log(`hello ${a} good morning`);
}
hello1("prayukta singh");

//normal function 
//3)
function myFunction2(a, b) {
    return (`the value is ${a + b}`);
}
var a = myFunction2(34, 57);
console.log(a);
//fat_arroy function
var hello2 = (a, b) => {
    return (`the value is ${a + b}`)
}
const b = hello2(23, 45);
console.log(b);
//4)far_arroy function
let total = (z) =>{
    console.log(`hii ${z/3}%`);
}
let hello3 = (phy, maths, che) =>{
    return (`${phy + maths + che}`);

}
let z =hello3(34,56,78);
 total(z);
    //normal function 

    //4) // 
function precentage(Y) {

        console.log(`prcentage ${Y/3} %`);
    }
function myFunction3(phy, maths, che) {
    return (`${phy + maths + che}`);
}
var m = myFunction3(89, 98, 88);
         precentage(m);
