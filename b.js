
//create class
class MyClass{

    //1.property
    information={};
    //2.constructor
       constructor(a){//formal argument
           this.information=a;//constructor used to initilized the property
           this.myFun();
       }
    //3.method
    myFun(){
        console.log(this.information);
        //use forin lop 
        for (const key in this.information) {
          
                console.log(`${key} -> ${this.information[key]}`);
                
           
        }
    }
}
//end classs

//create an external object of the class
//let obj =new ClassName();
x={
    fullName:"antim songara",
    age:22,
    address:"nemuch",
    mob:"99999"
};
let obj = new MyClass(x);//actual argument
//calling method
//object.methodName

