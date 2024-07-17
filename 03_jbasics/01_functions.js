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
console.log(logginintro("aakash"));
console.log(logginintro(""));
console.log(logginintro());