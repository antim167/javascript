//class create
class A {
    //1.property
     name="";
    //2.constructor
    constructor(a) {
    this.name=a;//create internal object of the class
    }
    //3.method
    myFunction() {
        console.log(`hello ${this.name} good morning`);

    }
}
//class end
//create an external object of the class
//let object=new ClassName();
let obj =new A("antim");
obj.myFunction();

