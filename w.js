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
    myFuction1(b) {

        console.log(`hello. prayukta ${b}`);//mehod body
        this.myFuction4(b);

    }
    myFuction2(d) {

        console.log(`hello.. songara ${d}`);
    }
    myFuction3(d) {

        console.log(`hello... singh ${d}`);
    }
    myFuction4(c) {
        this.myFuction2(c);
        this.myFuction3(c);
        console.log(`hello.${c}... goodmorning`);
    }

}
//class end
//create object
//variabl object_name=new class_name();
let obj = new MyClass();

//object.function_name();
obj.myFuction(" singh ");//calling function