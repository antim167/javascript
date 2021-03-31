//class start/class create
//ParslCase
class MyClass {

    //1.prototype
      a=20;
      b=30;
      c=" hiii ";
    //2.constructor

    //3.method

    myFuction() {

        console.log(`value is ${this.a + this.b}`);//method body
          this.myFuction1();//internal calling
          this.myFuction2();
          this.myFuction3();
    }
    myFuction1(){

        console.log(`value is ${this.a * this.b}`);//mehod body
    }
    myFuction2(){

        console.log(`value is ${this.a % this.b}`);//mehod body
    }
    myFuction3(){

        console.log(`hello ${this.c}prayukta`);//mehod body
    }

}
//class end
//create object
//variabl object_name=new class_name();
let obj = new MyClass();

//object.function_name();
obj.myFuction();//calling function