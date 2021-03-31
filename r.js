//class start/class create
//ParslCase
class MyClass {

    //1.prototype

    //2.constructor

    //3.method

    myFuction() {

        console.log(`hello antim`);//method body
          this.myFuction1();//internal calling
    }
    myFuction1(){

        console.log(`hello prayukta`);//mehod body
    }

}
//class end
//create object
//variabl object_name=new class_name();
let obj = new MyClass();

//object.function_name();
obj.myFuction();//calling function
