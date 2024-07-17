// let a=100
// const b=200
var c=500
// console.log(c);
if(true){
    let a=10
    const b=20
    var c=50
    // console.log("inner:", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const user="aakash"
    function two(){
        const website="github"
        // console.log(user);
    }
    // console.log(website);
    two()
}one()

if(true){
    const username="aakash"
    if(true){
        const website="github"
        // console.log(username);
       }  } // console.log(website);
// console.log(username);


// **************************interesting******************

console.log(add1(4));
function add1(num){
    return num+1
}
add2(3)
const add2=function(num){
    returnnum+2
}