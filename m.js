//class create,class start
//1)
class A {
    //1.property

    //2.constructor
    constructor() {

    }
    //3.method
    myFunction(name) {
        console.log(`hello ${name} class a`);

    }
}
//class end//class create,class start
//2)
class B extends A {
    //1.property

    //2.constructor
    constructor(name) {
        super(name);
        this.myFunction(name);
    }
    //3.method
    myFunction1(name) {

        console.log(`hello ${name} class b`);

    }
}
//class end

//class end//class create,class start
//3)
class C extends B {
    //1.property

    //2.constructor
    constructor(name) {
        super(name);
        
        this.myFunction1(name);
    }
    //3.method
    myFunction2(name) {

        console.log(`hello ${name} class c`);

    }
}
//class end

//class end//class create,class start
//4)
class D extends C {
    //1.property

    //2.constructor
    constructor(name) {
        super(name);
       ;
        this.myFunction2(name);
    }
    //3.method
    myFunction3(name) {

        console.log(`hello ${name} class d`);

    }
}
//class end

//class end//class create,class start
//5)
class E extends D {
    //1.property

    //2.constructor
    constructor(name) {
        super(name);
       
        this.myFunction3(name);
    }
    //3.method
    myFunction4(name) {

        console.log(`hello ${name} class e`);

    }
}
//class end

//class end//class create,class start
//6)
class F extends E {
    //1.property

    //2.constructor
    constructor(name) {
        super(name);
        this.myFunction(name);
        this.myFunction1(name);
        this.myFunction2(name);
        this.myFunction3(name);
        this.myFunction4(name);
        
    }
    //3.method
    myFunction5(name) {

        console.log(`hello ${name} class f`);

    }
}
//class end

//create an external object of the class
//let object=new ClassName();
let obj = new F("antim songara");

