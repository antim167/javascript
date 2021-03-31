//class start/class create
//ParslCase
class MyClass {

    //1.prototype

    //2.constructor

    //3.method

    myFuction(a) {

        console.log(`hello antim ${a}`);//method body
        this.myFuction1(a);

    }
    myFuction1(a) {

        console.log(`hello. prayukta ${a}`);//mehod body
        this.myFuction4(a);

    }
    myFuction2(a) {

        console.log(`hello.. songara ${a}`);
    }
    myFuction3(a) {

        console.log(`hello... singh ${a}`);
    }
    myFuction4(a) {
        this.myFuction2(a);
        this.myFuction3(a);
        console.log(`hello.${a}... goodmorning`);
    }

}
//class end
//create object
//variabl object_name=new class_name();
let obj = new MyClass();

//object.function_name();
obj.myFuction(" singh ");//calling function