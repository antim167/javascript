//class create,class start
class A {
    //1.property

    //2.constructor
    constructor(b) {
        this.myFunction(b);
    }
    //3.method
    myFunction(b) {
        console.log(`hello ${b} class a`);

    }
}
//class end

//class create,class start
class B extends A {
    //1.property

    //2.constructor
    constructor(b) {
        super(b);
        //create internal obj of the class
        this.myFunction(b);
    }
    //3.method
    myFunction1(b) {
        console.log(`hello ${b} class b`);

    }
}
//class end

//class create,class start
class C extends B {
    //1.property

    //2.constructor
    constructor(b) {
        super(b);
        //create internal obj of the class
        this.myFunction(b);
        this.myFunction1(b);
    }
    //3.method
    myFunction2(a) {
        console.log(`hello ${a}class c`);

    }
}
//class end


//create an external object of the class
//let object=new ClassName();
let obj = new C("prayukta singh");
obj.myFunction2(" antim songara ");
