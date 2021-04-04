//create class 
class MyClass {
    //1) property
     x={};
    //2)constructor
    constructor(n) {
        //create an enternal of the class
         this.x=n;
        this.hello(n);
    }

    //3)methods
    hello = (n) => {

        console.log(n);
    }

}
//class end

//class create
class MyClass1 extends MyClass {

    //1)property

    //2)constructor

    constructor(n) {
        super(n);
        //this.hello1();
    }
    //3)method

    hello1 = (x) => {
        for (const key in x) {

            console.log(`${key} => ${x[key]}`);
        }
    }

}
//class end

//creat an external obj of the class
x = {
    name: "antim",
    surname: "sonagra",
    age: 21
};
let obj = new MyClass1(x);
obj.hello1(x);