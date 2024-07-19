// if
const isuserloggedin = true
const temperature=40
// if(temperature<50){
// console.log("temperatue is less than 50");
// }else{
//     console.log("temperatue is more than 50");
// }
//<,>,<=,>=,!=,==,===

// const score =100
// if(score<200){
//     const power="test"
//     console.log(`user power:${power}`);
// }
// if(score<200){
//     var light="test2"
//     console.log(`user power:${light}`);
// }console.log(`user light:${light}`);
// if(2==2)console.log("this is 2");
// if(2==2)console.log("this is 2"),console.log("this can also print");//this is bad practise

// const balance =1000
// if(balance<500){
//     console.log("less then 500");
// } else if(balance<750){
//     console.log("lessthen 750");
// }else{
//     console.log("less then 1200")
//}
const userloggin=true
const debitecard=true
const loggedinwithfacebook=false
const loggedinwithgoogle=true
if(userloggin && debitecard){
    console.log("allow to access");
}
if(loggedinwithfacebook || loggedinwithgoogle){
    console.log("allow to access");
}