//class start/class create
//ParslCase
class MyClass {

    //1.prototype

    //2.constructor

    //3.method

    myFuction(a,b) {

        console.log(`hello antim`);//method body
        console.log(`the sum is ${a+b}`);
        this.myFuction1(a,b);
          this.myFuction2(a,b);
    }
    myFuction1(c,d) {

        console.log(`hello. prayukta`);//mehod body
        console.log(`the multiplication is ${c*d}`);
      

    }
    myFuction2(e,f) {

        console.log(`hello. nannu`);//mehod body
        console.log(`the sub is ${e-f}`);
      

    }
}
//class end
//create object
//variabl object_name=new class_name();
let obj = new MyClass();

//object.function_name();
obj.myFuction(10,20);//calling function