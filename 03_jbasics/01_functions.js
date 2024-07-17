function myname(){
    console.log("A");
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}
// myname()
// myname
// function addtwono(num1,num2){
//     console.log(num1+num2);//here we don't know that which datatype is coming as argument which can be solve by using if/else condition
// }
function addtwono(num1,num2){
   return num1+num2
}
// addtwono(1,2)
// addtwono(1,"2")
// addtwono(1,null)
const real = addtwono(1,5)
// console.log("real:",real)

function logginintro(username){
    if(!username){
        console.log("please enter the valid name");
        return
    }
    return`${username} welcome to window`
}
// console.log(logginintro("aakash"));
// console.log(logginintro(""));
// console.log(logginintro());
function calculatecartprice(val1,val2,...num)//rest operator
{
  return num
}
// console.log(calculatecartprice(200,300,400,402));
const user={
    userid:112121,
    userpassward:"aakash337"
}
function getuserdetail(anyobject){
    return`userid is ${anyobject.userid},user passward is ${anyobject.userpassward}`
}
// console.log(getuserdetail(user));
// console.log(getuserdetail({
//     userid:32312322,
//     userpassward:"aaka1234"
// }));

const arr =[100,200,300,400]
function arrelementprinter(array){
  return array[1]
}
// console.log(arrelementprinter(arr));
console.log(arrelementprinter([200,400,500,600]));