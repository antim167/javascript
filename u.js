//class start/class create
//ParslCase
class MyClass {

    //1.prototype

    //2.constructor

    //3.method

    myFuction() {

        console.log(`hello antim`);//method body
          this.myFuction1();
         
    }
    myFuction1(){

        console.log(`hello. prayukta`);//mehod body
        this.myFuction4();
        this.myFuction2();
        this.myFuction3();
    }
    myFuction2(){

        console.log(`hello.. songara`);
    }
    myFuction3(){

        console.log(`hello... singh`);
    }
    myFuction4(){

        console.log(`hello.... goodmorning`);
    }

}
//class end
//create object
//variabl object_name=new class_name();
let obj = new MyClass();

//object.function_name();
obj.myFuction();//calling function
