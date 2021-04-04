//create class 
class MyClass {
    //1) property

    //2)constructor
    constructor(n) {
        //create an enternal of the class
    this.hello(n);
    }

    //3)methods
     hello = (n) => {

        console.log(`hello ${n} from 1st class`);
      }

}
//class end

//class create
class MyClass1 extends MyClass {

    //1)property




    //2)constructor

    constructor(n) {
        super(n);
     this.hello1(n);
    }
    //3)method

      hello1=(n)=>{
          console.log(`hello ${n} from second class2`);
      }

}
//class end

//creat an external obj of the class

let obj =new MyClass1("antim songara");
