const user={
    username:"aakash",
    price:999,
  welcome:function(username){
    console.log(`${this.username},welcome to code`);
    // console.log(this);
  }

}
// user.welcome()
// user.username="sam"
// user.welcome()
// console.log(this);//at window it showes window because of multiple objects

// function chai() {
//   let  username="aakash"
//     console.log(this.username);
// }
// chai()

const chai=function(){
    let  username="aakash"
        console.log(this);
}
// chai()

// const chai=()=>{
//     let username="aakash"
//     console.log(this);
// }
// chai()

// const arrowfunction =(num1,num2) => {
//   return num1+num2
// const arrowfunction =(num1,num2)=>(num1+num2)
// const arrowfunction =(num1,num2)=>num1+num2
const arrowfunction =(num1,num2)=>({username:"aakash"})

console.log(arrowfunction(3,4));