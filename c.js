
//create class 
class MyClass {
    //1 property
    contacts = {};
    //2 constructor
    constructor(a) {
        this.contacts = a
        this.myFun();
    }
    //3 method
    myFun() {
        console.log("from 1st classs");
        console.log(this.contacts);
    }
}
//class end

//create class 
//inheritance
class MyClassA extends MyClass {
    //1 property

    //2 constructor
    constructor(x) {
        super(x);
        //this.myFun1(x);
    }
    //3 method
    myfun1() {
        console.log("from myfun1");
        for (const key in this.contacts) {
            console.log(this.contacts[key]);
        }
    }
    myfun2(x) {
        console.log("from myfun2")
        for (const key in x) {
            console.log(x[key]);
        }
    }

}

//class end

x = {
    fname: "prayukta",
    lname: "singh",
    age: 1,
    Email: 'pryu3@gmail.com'
};
let obj = new MyClassA(x);
obj.myfun1();
obj.myfun2(x);