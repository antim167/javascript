/*creat object data type
{
    1.property

    2.methods
}
*/

var a={
    //1.property
    fname:"antim",
    'lname':"songara",
    mob:961767,
    "email":"antim34gmail.com", 

    //2.methods  
    full_name:function(){
        return this.fname + " " +this.lname;
    },
    get_city:function(){
      return("neemuch");
    }
};
/*for(var b in a){
    console.log( `${b}=${a[b]}`);
}*/
console.log(a.fname);
console.log(a.lname);
console.log(a.email);
console.log(a.mob);
console.log(a.full_name());
console.log(a.get_city())

//use loop
for(var b in a){
    console.log( `${b}=${a[b]}`);
}