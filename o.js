//class create
class A {
    //1.property
     name="";
    //2.constructor
    constructor(n) {
    this.name=n;//create internal object of the class
    }
    //3.method
    myFunction() {
        console.log(`hello ${this.name} good morning`);

    }
}
//class end

//class create
class B extends A {
    //1.property
    
    //2.constructor
    constructor(n) {
    super(n);
    }
    //3.method
    myFunction1() {
        console.log(`hello ${this.name} good morning`);

    }
}
//class end
//create an external object of the class
//let object=new ClassName();
let obj =new B("antim");
obj.myFunction1();

