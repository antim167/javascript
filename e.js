var a,b,c;

a=20;//global variable
b=30;

console.log("multiplication is:-"+(a*b));
//fuction declaration
function hello(){
    d="good morning ";//local variable
    console.log(`hello antim ${d}${a+b}`);
}
//function calling
hello();